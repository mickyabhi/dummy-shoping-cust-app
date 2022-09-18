/* Amplify Params - DO NOT EDIT
	API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_BLOCALAPPAPI_GRAPHQLAPIIDOUTPUT
	API_BLOCALAPPAPI_GRAPHQLAPIKEYOUTPUT
	AUTH_BLOCALAPP0B9D70CA_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const Razorpay = require('razorpay');
const {print} = graphql;

let NOTIFICATION_API =
  'https://us-central1-namma-kirana.cloudfunctions.net/sendNotificationToTopic';

let razorpayConfig = {
  key_id: 'rzp_test_Iv1tHHSQ6G3edR',
  key_secret: 'PvTtHcoU22IE37cfVo2WSvl9',
};
if (process.env.ENV == 'prod')
  razorpayConfig = {
    key_id: 'rzp_live_bepGSRFeas5M7P',
    key_secret: '5PVvgsyIkGVNJeU9niD35Q0V',
  };

const instance = new Razorpay(razorpayConfig);

const API_URL = process.env.API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT;
const API_KEY = process.env.API_BLOCALAPPAPI_GRAPHQLAPIKEYOUTPUT;

const listRefundOrders = /* GraphQL */ gql`
  query ListRefundOrders(
    $filter: ModelRefundOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRefundOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cartId
        userId
        storeId
        orderId
        shortOrderId
        refundReason
        refundStatus
        refundAmount
        notes
        razorPayOrder
        razorPayPayment
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

const updateRefundOrder = /* GraphQL */ gql`
  mutation UpdateRefundOrder($input: UpdateRefundOrderInput!) {
    updateRefundOrder(input: $input) {
      id
      cartId
      userId
      storeId
      orderId
      shortOrderId
      refundReason
      refundStatus
      refundAmount
      razorPayOrder
      razorPayPayment
      createdAt
      updatedAt
      owner
    }
  }
`;

const createNotification = /* GraphQL */ gql`
  mutation CreateNotification($input: CreateNotificationInput!) {
    createNotification(input: $input) {
      id
      topic
      title
      body
      isRead
      metaData
      createdAt
      updatedAt
      owner
    }
  }
`;

const confirmOrderRefund = async (refundOrderId, refundStatus, notes) => {
  console.log('confirmOrderRefund.refundOrderId', refundOrderId);
  console.log('confirmOrderRefund.refundStatus', refundStatus);

  const updateOrderRefundInput = {
    id: refundOrderId,
    refundStatus,
  };

  if (notes != null) updateOrderRefundInput.notes = JSON.stringify(notes);

  return await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(updateRefundOrder),
      variables: {input: updateOrderRefundInput},
    },
  });
};

const processOrderRefund = async refundOrder => {
  console.log('razorpayConfig', razorpayConfig);
  console.log('processOrderRefund.refundOrder', refundOrder);

  let amount = refundOrder.refundAmount;
  amount = parseInt(amount.toFixed(2) * 100);
  console.log('processOrderRefund.amount', amount);

  if (amount == 0) {
    await confirmOrderRefund(refundOrder.id, 'DISPUTED', {
      error: "Amount can't be zero",
    });
    return;
  }

  const razorPayPayment = JSON.parse(refundOrder.razorPayPayment);
  console.log('processOrderRefund.razorPayPayment', razorPayPayment);

  const actualRazorPayPaymentAmount = razorPayPayment.amount;
  console.log(
    'processOrderRefund.actualRazorPayPaymentAmount',
    actualRazorPayPaymentAmount,
  );

  const razorPayOrder = JSON.parse(refundOrder.razorPayOrder);
  console.log('processOrderRefund.razorPayOrder', razorPayOrder);

  if (amount > actualRazorPayPaymentAmount) {
    await confirmOrderRefund(refundOrder.id, 'DISPUTED', {
      error: 'Refund amount is greater than actual order amount.',
    });
    return;
  }

  const refundOrderReq = {
    amount: amount,
    speed: 'optimum',
    receipt: razorPayPayment.receipt,
    notes: {
      razorpay_payment_id: razorPayPayment.razorpay_payment_id,
      razorpay_order_id: razorPayPayment.razorpay_order_id,
      orderId: razorPayPayment.orderId,
      cartId: razorPayPayment.cartId,
      storeId: razorPayPayment.storeId,
      userId: razorPayPayment.userId,
      receipt: razorPayPayment.receipt,
      refundReason: refundOrder.refundReason,
      refundStatus: refundOrder.refundStatus,
      refundAmount: refundOrder.refundAmount,
      actualRazorPayPaymentAmount,
    },
  };

  console.log('processOrderRefund.refundOrderReq', refundOrderReq);

  const refundRes = await instance.payments
    .refund(razorPayPayment.razorpay_payment_id, refundOrderReq)
    .catch(async err => {
      await confirmOrderRefund(refundOrder.id, 'DISPUTED', err);
      console.log('refund.err', err);
      return null;
    });

  console.log('refundOrder.refundRes', refundRes);

  if (refundRes != null) {
    await confirmOrderRefund(refundOrder.id, 'PROCESSED', refundRes);
    await sendNotificationToTopic(
      'Refund Processed',
      'Refund processed of Rs.' +
        amount / 100 +
        ' for order id ' +
        razorPayPayment?.shortOrderId,
      'CAU' + razorPayPayment?.userId,
      {orderId: razorPayPayment.orderId},
    );
  }
};

const sendNotificationToTopic = async (title, body, topic, metaData) => {
  topic = topic.replace('+', '_');

  let createNotificationInput = {
    title,
    body,
    topic,
    isRead: false,
    metaData: JSON.stringify(metaData),
  };

  const sendNotificationRes = await axios.post(
    NOTIFICATION_API,
    createNotificationInput,
    {
      headers: {
        Authorization: API_KEY,
      },
    },
  );

  console.log('sendNotificationRes', sendNotificationRes);

  return await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(createNotification),
      variables: {input: createNotificationInput},
    },
  });
};

exports.handler = async event => {
  try {
    console.log('getItem.event', event);
    console.log('getItem.process.env', process.env);
    console.log('getItem.API_URL', API_URL);
    console.log('getItem.API_KEY', API_KEY);
    console.log('print(listRefundOrders)', print(listRefundOrders));

    let refundOrdersFilter = {
      refundStatus: {
        eq: 'PENDING',
      },
    };

    const listRefundOrdersRes = await axios({
      url: API_URL,
      method: 'post',
      headers: {
        'x-api-key': API_KEY,
      },
      data: {
        query: print(listRefundOrders),
        variables: {filter: refundOrdersFilter, limit: 10000},
      },
    });

    console.log('listRefundOrdersRes', listRefundOrdersRes);
    console.log(
      'listRefundOrdersRes?.data',
      JSON.stringify(listRefundOrdersRes?.data),
    );
    console.log(
      'listRefundOrdersRes.errors',
      listRefundOrdersRes?.data?.errors,
    );
    let refundOrders = listRefundOrdersRes?.data?.data?.listRefundOrders?.items;
    console.log('refundOrders', refundOrders);

    if (
      listRefundOrdersRes?.data?.errors == null &&
      refundOrders != null &&
      refundOrders.length
    ) {
      for (const refundOrder of refundOrders) {
        console.log('refundOrder', refundOrder);
        await processOrderRefund(refundOrder);
      }
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(refundOrders),
    };
    return response;
  } catch (err) {
    console.log('error posting to appsync: ', err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
