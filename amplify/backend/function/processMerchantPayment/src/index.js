/* Amplify Params - DO NOT EDIT
	API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_BLOCALAPPAPI_GRAPHQLAPIIDOUTPUT
	API_BLOCALAPPAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var buffer = require('buffer/').Buffer;
const {v4: uuidv4} = require('uuid');
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const {print} = graphql;

let NOTIFICATION_API =
  'https://us-central1-namma-kirana.cloudfunctions.net/sendNotificationToTopic';
let RAZORPAY_PAYOUT_API = 'https://api.razorpay.com/v1/payouts';

let razorpayConfig = {
  key_id: 'rzp_test_Iv1tHHSQ6G3edR',
  key_secret: 'PvTtHcoU22IE37cfVo2WSvl9',
  account_number: '3434654325903514',
};
if (process.env.ENV == 'prod')
  razorpayConfig = {
    key_id: 'rzp_live_bepGSRFeas5M7P',
    key_secret: '5PVvgsyIkGVNJeU9niD35Q0V',
    account_number: '3434654325903514',
  };

let authorizationHeader =
  razorpayConfig.key_id + ':' + razorpayConfig.key_secret;

console.log('authorizationHeader', authorizationHeader);
authorizationHeader =
  'Basic ' + buffer.from(authorizationHeader).toString('base64');
console.log('authorizationHeader', authorizationHeader);

const API_URL = process.env.API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT;
const API_KEY = process.env.API_BLOCALAPPAPI_GRAPHQLAPIKEYOUTPUT;

const getOrder = /* GraphQL */ gql`
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userId
      storeId
      cartId
      shortId
      createdAt
      preferredSlot
      orderStatus
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        createdAt
        updatedAt
        owner
      }
      store {
        id
        name
        category
        gstNumber
        primaryNumber
        licenseNumber
        city
        state
        address
        pincode
        location
        landmark
        latitude
        longitude
        minimumAmount
        deliveryCharges
        contactNumber
        createdAt
        updatedAt
      }
      cart {
        id
        userId
        storeId
        discount
        isOrderPlaced
        originalCartValue
        updatedCartValue
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;

const listRazorPayPayments = /* GraphQL */ gql`
  query ListRazorPayPayments(
    $filter: ModelRazorPayPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRazorPayPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        storeId
        cartId
        amount
        currency
        receipt
        shortOrderId
        razorpay_order_id
        razorpay_signature
        razorpay_payment_id
        checkoutResponse
        razorPayOrder
        deletedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

const listRazorPayOrders = /* GraphQL */ gql`
  query ListRazorPayOrders(
    $filter: ModelRazorPayOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRazorPayOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        userId
        storeId
        cartId
        amount
        amount_due
        amount_paid
        attempts
        offers
        offer_id
        created_at
        currency
        entity
        receipt
        status
        notes
        deletedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

const bankInfoByStoreId = /* GraphQL */ gql`
  query BankInfoByStoreId($storeId: ID) {
    bankInfoByStoreId(storeId: $storeId) {
      items {
        id
        storeId
        ifsc
        city
        upiId
        bankName
        branchName
        accountType
        accountNumber
        accountHolderName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

const createRazorPayMerchantPayment = /* GraphQL */ gql`
  mutation CreateRazorPayMerchantPayment(
    $input: CreateRazorPayMerchantPaymentInput!
    $condition: ModelRazorPayMerchantPaymentConditionInput
  ) {
    createRazorPayMerchantPayment(input: $input, condition: $condition) {
      id
      orderId
      userId
      storeId
      cartId
      amount
      receipt
      deletedAt
      shortOrderId
      razorpay_order_id
      razorpay_payment_id
      razorPayOrder
      razorPayPayment
      merchantPaymentResponse
      status
      createdAt
      updatedAt
      owner
    }
  }
`;

const updateRazorPayMerchantPayment = /* GraphQL */ gql`
  mutation UpdateRazorPayMerchantPayment(
    $input: UpdateRazorPayMerchantPaymentInput!
    $condition: ModelRazorPayMerchantPaymentConditionInput
  ) {
    updateRazorPayMerchantPayment(input: $input, condition: $condition) {
      id
      orderId
      userId
      storeId
      cartId
      amount
      receipt
      deletedAt
      shortOrderId
      razorpay_order_id
      razorpay_payment_id
      razorPayOrder
      razorPayPayment
      merchantPaymentResponse
      status
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
const razorPayMerchantPaymentByOrderId = /* GraphQL */ gql`
  query RazorPayMerchantPaymentByOrderId(
    $orderId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayMerchantPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayMerchantPaymentByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        userId
        storeId
        cartId
        amount
        receipt
        deletedAt
        shortOrderId
        razorpay_order_id
        razorpay_payment_id
        razorPayOrder
        razorPayPayment
        merchantPaymentResponse
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

const processMerchantPayout = async (
  bankInfo,
  storeContact,
  storeEmail,
  storeName,
  amount,
  razorpay_payment_id,
  razorpay_order_id,
  orderId,
  cartId,
  storeId,
  userId,
  receipt,
) => {
  console.log('processMerchantPayout.bankInfo', bankInfo);

  const mode = 'IMPS';
  let merchantPayoutReq = {
    fund_account: {
      account_type: 'bank_account',
      bank_account: {
        name: bankInfo.bankName,
        ifsc: bankInfo.ifsc,
        account_number: bankInfo.accountNumber,
      },
      contact: {
        notes: {
          orderId,
          cartId,
          storeId,
          userId,
          receipt,
        },
        reference_id: orderId,
        contact: storeContact,
        name: storeName,
        type: 'self',
        email: storeEmail || '',
      },
    },
    account_number: razorpayConfig.account_number,
    currency: 'INR',
    mode,
    purpose: 'payout',
    queue_if_low_balance: true,
    reference_id: orderId.length > 30 ? uuidv4() : orderId,
    narration: 'BLocal order',
    notes: {
      razorpay_payment_id,
      razorpay_order_id,
      orderId,
      cartId,
      storeId,
      userId,
      receipt,
    },
    amount,
  };

  console.log('merchantPayoutReq', JSON.stringify(merchantPayoutReq));

  return await axios.post(RAZORPAY_PAYOUT_API, merchantPayoutReq, {
    headers: {
      Authorization: authorizationHeader,
      'X-Payout-Idempotency': uuidv4(),
      'Content-Type': 'application/json',
    },
  });
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

const razorPayMerchantPaymentEntry = async (
  operation,
  status,
  orderId,
  userId,
  storeId,
  cartId,
  amount,
  receipt,
  shortOrderId,
  razorpay_payment_id,
  razorpay_order_id,
  razorPayOrder,
  razorPayPayment,
  merchantPaymentResponse,
) => {
  const razorPayMerchantPaymentInput = {
    id: razorpay_order_id,
    status,
    orderId,
    userId,
    storeId,
    cartId,
    amount,
    receipt,
    shortOrderId,
    razorpay_payment_id,
    razorpay_order_id,
    razorPayOrder,
    razorPayPayment,
    merchantPaymentResponse,
  };

  console.log(
    'razorPayMerchantPaymentEntry.razorPayMerchantPaymentInput',
    razorPayMerchantPaymentInput,
  );

  let razorPayMerchantPaymentEntryResp = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(
        operation == 'CREATE'
          ? createRazorPayMerchantPayment
          : updateRazorPayMerchantPayment,
      ),
      variables: {input: razorPayMerchantPaymentInput},
    },
  });

  console.log(
    'razorPayMerchantPaymentEntryResp?.data',
    JSON.stringify(razorPayMerchantPaymentEntryResp?.data),
  );
  console.log(
    'razorPayMerchantPaymentEntryResp.errors',
    razorPayMerchantPaymentEntryResp?.data?.errors,
  );

  const data =
    razorPayMerchantPaymentEntryResp?.data?.data?.[
      operation == 'CREATE'
        ? 'createRazorPayMerchantPayment'
        : 'updateRazorPayMerchantPayment'
    ];
  const error = razorPayMerchantPaymentEntryResp?.data?.errors;
  console.log('razorPayMerchantPaymentEntry.error', error);

  return error ? Promise.reject(error) : data;
};

exports.handler = async event => {
  try {
    console.log('getItem.event', event);
    console.log('getItem.process.env', process.env);
    console.log('getItem.API_URL', API_URL);
    console.log('getItem.API_KEY', API_KEY);

    const _arguments = event.arguments;
    console.log('processMerchantPayment._arguments', _arguments);

    let amount = _arguments.amount;
    amount = parseInt(amount.toFixed(2) * 100);

    const orderId = _arguments.orderId;
    const storeId = _arguments.storeId;
    const cartId = _arguments.cartId;

    const razorPayMerchantPaymentByOrderIdRes = await axios({
      url: API_URL,
      method: 'post',
      headers: {
        'x-api-key': API_KEY,
      },
      data: {
        query: print(razorPayMerchantPaymentByOrderId),
        variables: {orderId},
      },
    });

    const razorPayMerchantPaymentByOrderIdResData =
      razorPayMerchantPaymentByOrderIdRes?.data;

    const razorPayMerchantPaymentByOrderIdResError =
      razorPayMerchantPaymentByOrderIdRes?.data?.errors;

    console.log(
      'razorPayMerchantPaymentByOrderIdResData',
      JSON.stringify(razorPayMerchantPaymentByOrderIdResData),
    );

    console.log(
      'razorPayMerchantPaymentByOrderIdResError',
      razorPayMerchantPaymentByOrderIdResError,
    );

    let razorPayMerchantPaymentByOrderIdItems =
      razorPayMerchantPaymentByOrderIdResData?.data
        ?.razorPayMerchantPaymentByOrderId;

    if (
      razorPayMerchantPaymentByOrderIdItems != null &&
      razorPayMerchantPaymentByOrderIdItems.length > 0
    ) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          err: 'merchant payment is already processed on this order id',
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    const getOrderRes = await axios({
      url: API_URL,
      method: 'post',
      headers: {
        'x-api-key': API_KEY,
      },
      data: {
        query: print(getOrder),
        variables: {id: orderId},
      },
    });

    console.log('getOrderRes?.data', JSON.stringify(getOrderRes?.data));
    console.log('getOrderRes.errors', getOrderRes?.data?.errors);

    let order = getOrderRes?.data?.data?.getOrder;
    console.log('order', order);

    if (order == null || getOrderRes?.data?.errors != null) {
      return {
        statusCode: 500,
        body: JSON.stringify({err: 'Error in getOrderRes'}),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    const listRazorPayOrdersRes = await axios({
      url: API_URL,
      method: 'post',
      headers: {
        'x-api-key': API_KEY,
      },
      data: {
        query: print(listRazorPayOrders),
        variables: {
          filter: {
            or: [
              {orderId: {eq: orderId}},
              {orderId: {eq: cartId}},
              {cartId: {eq: cartId}},
            ],
          },
          limit: 10000,
        },
      },
    });

    console.log(
      'listRazorPayOrdersRes?.data',
      JSON.stringify(listRazorPayOrdersRes?.data),
    );
    console.log(
      'listRazorPayOrdersRes.errors',
      listRazorPayOrdersRes?.data?.errors,
    );

    let razorPayOrderItems =
      listRazorPayOrdersRes?.data?.data?.listRazorPayOrders?.items;

    let razorPayOrder = null;
    if (razorPayOrderItems && razorPayOrderItems.length)
      razorPayOrder = razorPayOrderItems[0];

    console.log('razorPayOrder', razorPayOrder);

    if (razorPayOrder == null || listRazorPayOrdersRes?.data?.errors != null) {
      return {
        statusCode: 500,
        body: JSON.stringify({err: 'Error in razorPayOrderByOrderId'}),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    const listRazorPayPaymentsRes = await axios({
      url: API_URL,
      method: 'post',
      headers: {
        'x-api-key': API_KEY,
      },
      data: {
        query: print(listRazorPayPayments),
        variables: {
          filter: {
            or: [
              {orderId: {eq: orderId}},
              {orderId: {eq: cartId}},
              {cartId: {eq: cartId}},
            ],
          },
          limit: 10000,
        },
      },
    });

    console.log(
      'listRazorPayPaymentsRes?.data',
      JSON.stringify(listRazorPayPaymentsRes?.data),
    );
    console.log(
      'listRazorPayPaymentsRes.errors',
      listRazorPayPaymentsRes?.data?.errors,
    );

    let razorPayPaymentItems =
      listRazorPayPaymentsRes?.data?.data?.listRazorPayPayments?.items;

    let razorPayPayment = null;
    if (razorPayPaymentItems && razorPayPaymentItems.length)
      razorPayPayment = razorPayPaymentItems[0];

    console.log('razorPayPayment', razorPayPayment);

    if (
      razorPayPayment == null ||
      listRazorPayPaymentsRes?.data?.errors != null
    ) {
      return {
        statusCode: 500,
        body: JSON.stringify({err: 'Error in listRazorPayPayments'}),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    let actualAmount = razorPayPayment.amount;
    actualAmount = parseInt(actualAmount.toFixed(2) * 100);
    console.log('actualAmount', actualAmount);

    if (actualAmount < amount) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          err: 'actualAmount is lower than requested amount',
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    const bankAccountByStoreIdRes = await axios({
      url: API_URL,
      method: 'post',
      headers: {
        'x-api-key': API_KEY,
      },
      data: {
        query: print(bankInfoByStoreId),
        variables: {storeId},
      },
    });

    console.log(
      'bankAccountByStoreIdRes?.data',
      JSON.stringify(bankAccountByStoreIdRes?.data),
    );
    console.log(
      'bankAccountByStoreIdRes.errors',
      bankAccountByStoreIdRes?.data?.errors,
    );

    let bankInfoItems =
      bankAccountByStoreIdRes?.data?.data?.bankInfoByStoreId?.items;
    let bankInfo = null;
    if (bankInfoItems && bankInfoItems.length) bankInfo = bankInfoItems[0];

    console.log('bankInfo', bankInfo);

    if (bankInfo == null || bankAccountByStoreIdRes?.data?.errors != null) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          err: 'Error in bankInfoByStoreId',
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    const userId = order.userId;

    let razorPayMerchantPaymentEntryResp = await razorPayMerchantPaymentEntry(
      'CREATE',
      'PENDING',
      orderId,
      userId,
      storeId,
      cartId,
      amount,
      razorPayPayment.receipt,
      order.shortId,
      razorPayPayment.razorpay_payment_id,
      razorPayPayment.razorpay_order_id,
      JSON.stringify(razorPayOrder),
      JSON.stringify(razorPayPayment),
      JSON.stringify({status: 'PENDING'}),
    ).catch(error => {
      console.log('razorPayMerchantPaymentEntry', error);
      throw error;
    });

    console.log(
      'razorPayMerchantPaymentEntryResp.CREATE',
      razorPayMerchantPaymentEntryResp,
    );

    let merchantPayoutRes = await processMerchantPayout(
      bankInfo,
      order?.store?.primaryNumber.replace('_', '+'),
      order?.store?.email,
      order?.store?.name,
      amount,
      razorPayPayment.razorpay_payment_id,
      razorPayPayment.razorpay_order_id,
      orderId,
      cartId,
      storeId,
      userId,
      razorPayPayment.receipt,
    ).catch(async error => {
      console.log('processMerchantPayout.error', error);
      razorPayMerchantPaymentEntryResp = await razorPayMerchantPaymentEntry(
        'UPDATE',
        'DISPUTED',
        orderId,
        userId,
        storeId,
        cartId,
        amount,
        razorPayPayment.receipt,
        order.shortId,
        razorPayPayment.razorpay_payment_id,
        razorPayPayment.razorpay_order_id,
        JSON.stringify(razorPayOrder),
        JSON.stringify(razorPayPayment),
        JSON.stringify(error),
      ).catch(error => {
        console.log('razorPayMerchantPaymentEntry', error);
        throw error;
      });

      console.log(
        'razorPayMerchantPaymentEntryResp.UPDATE',
        razorPayMerchantPaymentEntryResp,
      );
      throw error;
    });

    merchantPayoutRes = merchantPayoutRes.data;
    console.log('merchantPayoutRes', merchantPayoutRes);

    if (merchantPayoutRes) {
      razorPayMerchantPaymentEntryResp = await razorPayMerchantPaymentEntry(
        'UPDATE',
        'PROCESSED',
        orderId,
        userId,
        storeId,
        cartId,
        amount,
        razorPayPayment.receipt,
        order.shortId,
        razorPayPayment.razorpay_payment_id,
        razorPayPayment.razorpay_order_id,
        JSON.stringify(razorPayOrder),
        JSON.stringify(razorPayPayment),
        JSON.stringify(merchantPayoutRes),
      ).catch(error => {
        console.log('razorPayMerchantPaymentEntry', error);
        throw error;
      });

      console.log(
        'razorPayMerchantPaymentEntryResp.UPDATE',
        razorPayMerchantPaymentEntryResp,
      );

      let topic = 'STR_' + storeId;
      await sendNotificationToTopic(
        'Amount credited',
        'Payment of Rs.' +
          amount / 100 +
          ' credit to your account for order number ' +
          order.shortId,
        topic,
        {
          accountNumber: bankInfo.accountNumber,
          amount,
          razorpay_payment_id: razorPayPayment.razorpay_payment_id,
          razorpay_order_id: razorPayPayment.razorpay_order_id,
          orderId,
          cartId,
          storeId,
          userId: order.userId,
          receipt: razorPayPayment.receipt,
        },
      );
      return {
        statusCode: 200,
        body: JSON.stringify('Success'),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify('Error occurred'),
    };
  } catch (err) {
    console.log('processMerchantPayment.err', err);
    console.log('processMerchantPayment.err.message', err?.message);
    return {
      statusCode: 500,
      body: JSON.stringify(err?.message),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
