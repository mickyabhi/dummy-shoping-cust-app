/* Amplify Params - DO NOT EDIT
	API_BLOCALAPPAPI_CARTITEMTABLE_ARN
	API_BLOCALAPPAPI_CARTITEMTABLE_NAME
	API_BLOCALAPPAPI_CARTTABLE_ARN
	API_BLOCALAPPAPI_CARTTABLE_NAME
	API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_BLOCALAPPAPI_GRAPHQLAPIIDOUTPUT
	API_BLOCALAPPAPI_ORDERTABLE_ARN
	API_BLOCALAPPAPI_ORDERTABLE_NAME
	API_BLOCALAPPAPI_RAZORPAYORDERTABLE_ARN
	API_BLOCALAPPAPI_RAZORPAYORDERTABLE_NAME
	API_BLOCALAPPAPI_RAZORPAYPAYMENTTABLE_ARN
	API_BLOCALAPPAPI_RAZORPAYPAYMENTTABLE_NAME
	API_BLOCALAPPAPI_STORETABLE_ARN
	API_BLOCALAPPAPI_STORETABLE_NAME
	API_BLOCALAPPAPI_USERTABLE_ARN
	API_BLOCALAPPAPI_USERTABLE_NAME
	AUTH_BLOCALAPP0B9D70CA_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const {print} = graphql;

let NOTIFICATION_API =
  'https://us-central1-namma-kirana.cloudfunctions.net/sendNotificationToTopic';

const API_URL = process.env.API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT;

let API_KEY = 'da2-v655vfldkrf5hakigwzgi3ssx4';
if (process.env.ENV == 'prod') API_KEY = 'da2-yb4lf75mgfdcfi2h4x2usqpg24';

const listOrders = /* GraphQL */ gql`
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        storeId
        cartId
        shortId
        orderStatus
        preferredSlot
        createdAt
        updatedAt
        cart {
          id
          originalCartValue
        }
      }
      nextToken
    }
  }
`;

const updateOrder = /* GraphQL */ gql`
  mutation UpdateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
      id
      userId
      storeId
      cartId
      shortId
      orderStatus
      preferredSlot
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

const confirmOrder = async orderId => {
  const updateOrderInput = {
    id: orderId,
    orderStatus: 'CONFIRMED',
  };

  return await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(updateOrder),
      variables: {input: updateOrderInput},
    },
  });
};

exports.handler = async event => {
  console.log('getItem.event', event);
  console.log('getItem.process.env', process.env);
  console.log('getItem.API_URL', API_URL);
  console.log('getItem.API_KEY', API_KEY);
  console.log('print(listOrders)', print(listOrders));

  try {
    const currentDate = new Date().toISOString();
    const threeMinuteAgo = new Date(Date.now() - 1000 * 180).toISOString();

    console.log('getItem.currentDate', currentDate);
    console.log('getItem.threeMinuteAgo', threeMinuteAgo);

    let orderFilter = {
      orderStatus: {
        eq: 'OPEN',
      },
      //   createdAt: {
      //     between: [threeMinuteAgo, currentDate],
      //   },
    };

    console.log('getItem.orderFilter', orderFilter);

    const listOrdersRes = await axios({
      url: API_URL,
      method: 'post',
      headers: {
        'x-api-key': API_KEY,
      },
      data: {
        query: print(listOrders),
        variables: {filter: orderFilter, limit: 10000},
      },
    });

    console.log('listOrdersRes?.data', JSON.stringify(listOrdersRes?.data));
    console.log('listOrdersRes.errors', listOrdersRes?.data?.errors);
    let orders = listOrdersRes?.data?.data?.listOrders?.items;

    console.log('getItem.orders', orders);

    if (
      listOrdersRes?.data?.errors == null &&
      orders != null &&
      orders.length
    ) {
      for (const order of orders) {
        console.log('order', order);

        const timeDiff = new Date() - new Date(order.createdAt);
        console.log('timeDiff', timeDiff);

        const timeDiffInMinutes = Math.floor(timeDiff / 60e3);
        const timeDiffInSeconds = Math.floor(timeDiff / 1e3);
        console.log('timeDiffInMinutes', timeDiffInMinutes);
        console.log('timeDiffInSeconds', timeDiffInSeconds);
        if (timeDiffInMinutes < 2) continue;

        const updateOrderRes = await confirmOrder(order.id);

        console.log('updateOrderRes.errors', updateOrderRes?.data?.errors);
        console.log(
          'updateOrderRes?.data',
          JSON.stringify(updateOrderRes?.data),
        );

        const createNotificationRes = await sendNotificationToTopic(
          'New Order Received' + '🚀🚀',
          'Order received of value Rs.' +
            order?.cart?.originalCartValue?.toFixed(2) +
            '💰',
          'STR_' + order.storeId,
          {orderId: order.id},
        );

        console.log(
          'createNotificationRes.errors',
          createNotificationRes?.data?.errors,
        );

        console.log(
          'createNotificationRes?.data',
          JSON.stringify(createNotificationRes?.data),
        );
      }
    }

    const body = {
      listOrdersRes: listOrdersRes?.data?.data?.listOrders,
    };
    console.log('getItem.body', body);

    if (orders != null) {
      return {
        statusCode: 200,
        body: JSON.stringify({orders}),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    } else
      return {
        statusCode: 500,
        body: JSON.stringify({err: 'Oops! Something went wrong!'}),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
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
