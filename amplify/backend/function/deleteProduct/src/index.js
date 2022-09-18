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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const listProducts = /* GraphQL */ gql`
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mrp
        name
        category
        description
        subCategory
        masterCategory
        merchandiseCategory
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const updateStoreProduct = /* GraphQL */ gql`
  mutation UpdateStoreProduct(
    $input: UpdateStoreProductInput!
    $condition: ModelStoreProductConditionInput
  ) {
    updateStoreProduct(input: $input, condition: $condition) {
      id
      mrp
      storeId
      discount
      productId
      totalSold
      totalQuantity
      sellingPrice
      isInInventory
      deletedAt
      createdAt
      updatedAt
      product {
        id
        mrp
        name
        category
        description
        subCategory
        masterCategory
        merchandiseCategory
        deletedAt
        createdAt
        updatedAt
      }
      owner
    }
  }
`;

const deleteStoreProduct = async (productId, storeId) => {
  console.log('deleteStoreProduct', productId, storeId);
  if (productId == null || storeId == null) return;

  const updateStoreProductInput = {
    id: productId + '' + storeId,
    deletedAt: '2022-02-15T13:33:35.020Z',
  };

  console.log('updateStoreProductInput', updateStoreProductInput);

  return await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(updateStoreProduct),
      variables: {input: updateStoreProductInput},
    },
  });
};

const getStoresList = async (nextToken = null, stores = []) => {
  const variables = nextToken
    ? {
        nextToken,
        limit: 10000,
        filter: {
          category: {eq: 'Grocery'},
          deletedAt: {
            attributeExists: false,
          },
        },
      }
    : {
        limit: 10000,
        filter: {
          category: {eq: 'Grocery'},
          deletedAt: {
            attributeExists: false,
          },
        },
      };
  console.log('getStoresList.variables', variables);

  const listStoresRes = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(listStores),
      variables,
    },
  });

  console.log('listStoresRes?.data', JSON.stringify(listStoresRes?.data));
  console.log('listStoresRes.errors', listStoresRes?.data?.errors);

  const listStoresResNextToken =
    listStoresRes?.data?.data?.listStores?.nextToken;
  const items = listStoresRes?.data?.data?.listStores?.items;
  const errors = listStoresRes?.data?.errors;

  if (errors == null && items != null) {
    stores = stores.concat(items);
  }

  if (listStoresResNextToken != null && items != null && items?.length) {
    stores = await getStoresList(listStoresResNextToken, stores);
  }

  return errors ? null : stores;
};

let productListToDelete = [
  1961, 1957, 1962, 1963, 1958, 30202, 30203, 30201, 30204, 30205, 30206, 30207,
  30208, 30209, 30210, 30212, 30213, 30211, 30215, 30216, 30214, 1968, 2085,
  2086, 2087, 2090, 2088, 2089, 2091, 1971, 1972, 1978, 1979, 1976, 1977, 1975,
  1974, 1973, 2092, 1675, 1823, 10024, 10009, 10020, 10025, 10026, 10031, 10019,
  10008, 10027, 10010, 10030,
];

productListToDelete = [...new Set(productListToDelete)];

exports.handler = async event => {
  console.log('event', event);
  console.log('process.env', process.env);
  console.log('API_URL', API_URL);
  console.log('API_KEY', API_KEY);

  let stores = await getStoresList();
  console.log('stores.length', stores?.length);
  console.log('stores', stores);

  let storesIds = [];
  if (stores != null) {
    storesIds = stores.map(store => store.id);
  }

  console.log('productListToDelete', productListToDelete);
  console.log('storesIds', storesIds);

  //   const updateStoreProductRes = await deleteStoreProduct(
  //     1001,
  //     "9b2e8a68-0597-4ba9-8a40-2d8b67e1bd5f"
  //   );
  //   console.log(
  //     "updateStoreProductRes?.data",
  //     JSON.stringify(updateStoreProductRes?.data)
  //   );
  //   console.log(
  //     "updateStoreProductRes.errors",
  //     updateStoreProductRes?.data?.errors
  //   );

  for (const productId of productListToDelete) {
    for (const storesId of storesIds) {
      const updateStoreProductRes = await deleteStoreProduct(
        productId,
        storesId,
      );
      console.log(
        'updateStoreProductRes?.data',
        JSON.stringify(updateStoreProductRes?.data),
      );
      console.log(
        'updateStoreProductRes.errors',
        updateStoreProductRes?.data?.errors,
      );
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(storesIds),
  };
  return response;
};
