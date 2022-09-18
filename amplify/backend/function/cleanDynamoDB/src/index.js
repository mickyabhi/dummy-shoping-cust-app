/* Amplify Params - DO NOT EDIT
	API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_BLOCALAPPAPI_GRAPHQLAPIIDOUTPUT
	API_BLOCALAPPAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const {print} = graphql;

const API_URL = process.env.API_BLOCALAPPAPI_GRAPHQLAPIENDPOINTOUTPUT;
const API_KEY = process.env.API_BLOCALAPPAPI_GRAPHQLAPIKEYOUTPUT;

const listCarts = /* GraphQL */ gql`
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        storeId
        discount
        isOrderPlaced
        originalCartValue
        updatedCartValue
        deletedAt
        createdAt
        updatedAt
        cartItems {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;

const listStores = /* GraphQL */ gql`
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        deliveryCharges
        contactNumber
        minimumAmount
        deletedAt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

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
        createdAt
        razorPayOrderId
        preferredSlot
        orderStatus
        deletedAt
        razorPayOrder
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

const getAllStores = async () => {
  console.log('getAllStores');
  const listStoresResp = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(listStores),
      variables: {
        limit: 10000,
        filter: {
          deletedAt: {
            attributeExists: false,
          },
        },
      },
    },
  });

  console.log('listStoresResp?.data', JSON.stringify(listStoresResp?.data));
  console.log('listStoresResp.errors', listStoresResp?.data?.errors);

  const items = listStoresResp?.data?.data?.listStores?.items;
  const error = listStoresResp?.data?.errors;
  console.log('getAllStores.error', error);

  return error ? Promise.reject(error) : items;
};

const getAllCarts = async () => {
  console.log('getAllCarts');
  const listCartsResp = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(listCarts),
      variables: {limit: 10000},
    },
  });

  console.log('listCartsResp?.data', JSON.stringify(listCartsResp?.data));
  console.log('listCartsResp.errors', listCartsResp?.data?.errors);

  const items = listCartsResp?.data?.data?.listCarts?.items;
  const error = listCartsResp?.data?.errors;
  console.log('getAllCarts.error', error);

  return error ? Promise.reject(error) : items;
};

const getAllOrders = async () => {
  console.log('getAllCarts');
  const listOrdersResp = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(listOrders),
      variables: {
        limit: 10000,
        filter: {
          deletedAt: {
            attributeExists: false,
          },
        },
      },
    },
  });

  console.log('listOrdersResp?.data', JSON.stringify(listOrdersResp?.data));
  console.log('listOrdersResp.errors', listOrdersResp?.data?.errors);

  const items = listOrdersResp?.data?.data?.listOrders?.items;
  const error = listOrdersResp?.data?.errors;
  console.log('getAllOrders.error', error);

  return error ? Promise.reject(error) : items;
};

exports.handler = async event => {
  let stores = await getAllStores().catch(error => {
    console.log('getAllStores', error);
    return null;
  });

  let carts = await getAllCarts().catch(error => {
    console.log('getAllCarts', error);
    return null;
  });

  let orders = await getAllOrders().catch(error => {
    console.log('getAllOrders', error);
    return null;
  });

  console.log('stores', stores);
  console.log('orders', orders);
  console.log('carts', carts);

  if (
    stores == null ||
    !stores.length ||
    carts == null ||
    !carts.length ||
    orders == null ||
    !orders.length
  ) {
    return {
      statusCode: 500,
      body: JSON.stringify('Something is wrong'),
    };
  }

  let orderStoreIds = orders?.map(order => order.storeId);
  let cartStoreIds = carts?.map(cart => cart.storeId);
  let storeIds = stores?.map(store => store.id);

  let orderCartIds = orders?.map(order => order.cartId);
  let cartIds = carts?.map(cart => cart.id);

  orderStoreIds = [...new Set(orderStoreIds)];
  orderCartIds = [...new Set(orderCartIds)];
  cartStoreIds = [...new Set(cartStoreIds)];
  storeIds = [...new Set(storeIds)];
  cartIds = [...new Set(cartIds)];

  console.log('orderStoreIds.length', orderStoreIds.length);
  console.log('orderStoreIds', orderStoreIds);

  console.log('cartStoreIds.length', cartStoreIds.length);
  console.log('cartStoreIds', cartStoreIds);

  console.log('storeIds.length', storeIds.length);
  console.log('storeIds', storeIds);

  console.log('orderCartIds.length', orderCartIds.length);
  console.log('orderCartIds', orderCartIds);

  console.log('cartIds.length', cartIds.length);
  console.log('cartIds', cartIds);

  let missingStores = [];
  let missingCarts = [];

  for (const cartStoreId of cartStoreIds) {
    if (!storeIds.includes(cartStoreId)) {
      console.log('Missing storeId.cartStoreId', cartStoreId);
      missingStores.push(cartStoreId);
    }
  }

  for (const orderStoreId of orderStoreIds) {
    if (!storeIds.includes(orderStoreId)) {
      console.log('Missing storeId.orderStoreId', orderStoreId);
      missingStores.push(orderStoreId);
    }
  }

  for (const orderCartId of orderCartIds) {
    if (!cartIds.includes(orderCartId)) {
      console.log('Missing cartId.orderCartId', orderCartId);
      missingCarts.push(orderCartId);
    }
  }

  missingStores = [...new Set(missingStores)];
  missingCarts = [...new Set(missingCarts)];

  console.log('missingStores.length', missingStores.length);
  console.log('missingStores', missingStores);

  console.log('missingCarts.length', missingCarts.length);
  console.log('missingCarts', missingCarts);

  const response = {
    statusCode: 200,
    body: JSON.stringify({missingCarts, missingStores}),
  };
  return response;
};
