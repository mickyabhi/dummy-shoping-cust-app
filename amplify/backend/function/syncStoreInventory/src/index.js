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

const listStoreInventorySyncs = /* GraphQL */ gql`
  query ListStoreInventorySyncs(
    $filter: ModelStoreInventorySyncFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreInventorySyncs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        storeInventorySyncStatus
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

const createStoreProduct = /* GraphQL */ gql`
  mutation CreateStoreProduct(
    $input: CreateStoreProductInput!
    $condition: ModelStoreProductConditionInput
  ) {
    createStoreProduct(input: $input, condition: $condition) {
      id
      mrp
      storeId
      discount
      productId
      totalSold
      totalQuantity
      sellingPrice
      isInInventory
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
        createdAt
        updatedAt
        productImage {
          nextToken
        }
      }
      owner
    }
  }
`;

const createStoreInventorySync = /* GraphQL */ gql`
  mutation CreateStoreInventorySync(
    $input: CreateStoreInventorySyncInput!
    $condition: ModelStoreInventorySyncConditionInput
  ) {
    createStoreInventorySync(input: $input, condition: $condition) {
      id
      category
      storeInventorySyncStatus
      createdAt
      updatedAt
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
        deliveryCharges
        contactNumber
        minimumAmount
        createdAt
        updatedAt
        storeAdmins {
          nextToken
        }
        storeImages {
          nextToken
        }
        bankInfo {
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
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      owner
    }
  }
`;

const updateStoreInventorySync = /* GraphQL */ gql`
  mutation UpdateStoreInventorySync(
    $input: UpdateStoreInventorySyncInput!
    $condition: ModelStoreInventorySyncConditionInput
  ) {
    updateStoreInventorySync(input: $input, condition: $condition) {
      id
      category
      storeInventorySyncStatus
      createdAt
      updatedAt
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
        deliveryCharges
        contactNumber
        minimumAmount
        createdAt
        updatedAt
        storeAdmins {
          nextToken
        }
        storeImages {
          nextToken
        }
        bankInfo {
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
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      owner
    }
  }
`;

const getStoresList = async (nextToken = null, stores = []) => {
  const variables = nextToken
    ? {
        nextToken,
        limit: 10000,
      }
    : {
        limit: 10000,
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

  stores = stores.filter(store => store?.deletedAt == null);

  return errors ? null : stores;
};

const getSyncedInventoryStores = async (nextToken = null, stores = []) => {
  let storeInventorySyncsFilter = {
    storeInventorySyncStatus: {
      eq: 'COMPLETED',
    },
    deletedAt: {
      attributeExists: false,
    },
  };

  const variables = nextToken
    ? {nextToken, filter: storeInventorySyncsFilter, limit: 10000}
    : {filter: storeInventorySyncsFilter, limit: 10000};

  console.log('storeInventorySyncsFilter', storeInventorySyncsFilter);
  console.log('getSyncedInventoryStores.variables', variables);

  const listStoreInventorySyncsRes = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(listStoreInventorySyncs),
      variables,
    },
  });

  console.log(
    'listStoreInventorySyncsRes?.data',
    JSON.stringify(listStoreInventorySyncsRes?.data),
  );
  console.log(
    'listStoreInventorySyncsRes.errors',
    listStoreInventorySyncsRes?.data?.errors,
  );

  const listStoreInventorySyncsResNextToken =
    listStoreInventorySyncsRes?.data?.data?.listStoreInventorySyncs?.nextToken;
  const items =
    listStoreInventorySyncsRes?.data?.data?.listStoreInventorySyncs?.items;
  const errors = listStoreInventorySyncsRes?.data?.errors;

  if (errors == null && items != null) {
    stores = stores.concat(items);
  }

  if (
    listStoreInventorySyncsResNextToken != null &&
    items != null &&
    items?.length
  ) {
    stores = await getSyncedInventoryStores(
      listStoreInventorySyncsResNextToken,
      stores,
    );
  }

  return errors ? null : stores;
};

const getProductListByCategory = async (
  category,
  nextToken = null,
  products = [],
) => {
  if (category == null) return null;

  let productsFilter = {
    masterCategory: {
      eq: category,
    },
    mrp: {
      gt: 0,
    },
    deletedAt: {
      attributeExists: false,
    },
  };

  const variables = nextToken
    ? {
        nextToken,
        filter: productsFilter,
        limit: 10000,
      }
    : {
        filter: productsFilter,
        limit: 10000,
      };

  console.log('productsFilter', productsFilter);
  console.log('getProductListByCategory.variables', variables);

  const listProductsRes = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(listProducts),
      variables,
    },
  });

  console.log('listProductsRes?.data', JSON.stringify(listProductsRes?.data));
  console.log('listProductsRes.errors', listProductsRes?.data?.errors);

  const listProductsResNextToken =
    listProductsRes?.data?.data?.listProducts?.nextToken;
  const items = listProductsRes?.data?.data?.listProducts?.items;
  const errors = listProductsRes?.data?.errors;

  if (errors == null && items != null) {
    products = products.concat(items);
  }

  if (listProductsResNextToken != null && items != null && items?.length) {
    products = await getProductListByCategory(
      category,
      listProductsResNextToken,
      products,
    );
  }

  return errors
    ? null
    : products.filter(product => product.mrp != null && product.mrp > 0);
};

const addInventorySyncStore = async (storeId, category) => {
  if (storeId == null || category == null) return null;

  const createStoreInventorySyncInput = {
    category,
    id: storeId,
    storeInventorySyncStatus: 'PENDING',
  };

  console.log('createStoreInventorySyncInput', createStoreInventorySyncInput);

  const createStoreInventorySyncRes = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(createStoreInventorySync),
      variables: {
        input: createStoreInventorySyncInput,
      },
    },
  });

  console.log('createStoreInventorySyncRes', createStoreInventorySyncRes);

  console.log(
    'createStoreInventorySyncRes?.data',
    JSON.stringify(createStoreInventorySyncRes?.data),
  );
  console.log(
    'createStoreInventorySyncRes.errors',
    createStoreInventorySyncRes?.data?.errors,
  );
  return createStoreInventorySyncRes;
};

const updateInventorySyncStore = async (storeId, category) => {
  if (storeId == null || category == null) return null;

  const updateStoreInventorySyncInput = {
    category,
    id: storeId,
    storeInventorySyncStatus: 'COMPLETED',
  };

  const updateStoreInventorySyncRes = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(updateStoreInventorySync),
      variables: {
        input: updateStoreInventorySyncInput,
      },
    },
  });

  console.log('updateStoreInventorySyncRes', updateStoreInventorySyncRes);
  console.log(
    'updateStoreInventorySyncRes?.data',
    JSON.stringify(updateStoreInventorySyncRes?.data),
  );
  console.log(
    'updateStoreInventorySyncRes.errors',
    updateStoreInventorySyncRes?.data?.errors,
  );
  return updateStoreInventorySyncRes;
};

const addStoreProduct = async (storeId, product) => {
  console.log('addStoreProduct.storeId', storeId);
  console.log('addStoreProduct.product', product);

  if (storeId == null || product == null) return null;

  const createStoreProductInput = {
    storeId,
    discount: 0,
    mrp: product.mrp,
    isInInventory: true,
    productId: product.id,
    sellingPrice: product.mrp,
    id: product.id + '' + storeId,
  };

  console.log('createStoreProductInput', createStoreProductInput);

  const createStoreProductRes = await axios({
    url: API_URL,
    method: 'post',
    headers: {
      'x-api-key': API_KEY,
    },
    data: {
      query: print(createStoreProduct),
      variables: {
        input: createStoreProductInput,
      },
    },
  });

  console.log('createStoreProductRes', createStoreProductRes);
  console.log(
    'createStoreProductRes?.data',
    JSON.stringify(createStoreProductRes?.data),
  );
  console.log(
    'createStoreProductRes.errors',
    createStoreProductRes?.data?.errors,
  );
  return createStoreProductRes;
};

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
  console.log('storesIds', storesIds);

  let syncedInventoryStores = await getSyncedInventoryStores();
  console.log('syncedInventoryStores.length', syncedInventoryStores?.length);
  console.log('syncedInventoryStores', syncedInventoryStores);

  let syncedInventoryStoresIds = [];
  if (syncedInventoryStores != null) {
    syncedInventoryStoresIds = syncedInventoryStores.map(
      storeInventorySync => storeInventorySync.id,
    );
  }

  console.log(
    'syncedInventoryStoresIds.length',
    syncedInventoryStoresIds?.length,
  );
  console.log('syncedInventoryStoresIds', syncedInventoryStoresIds);

  const storesToBeSynced = stores.filter(
    store => !syncedInventoryStoresIds.includes(store.id),
  );

  console.log('storesToBeSynced.length', storesToBeSynced?.length);
  console.log('storesToBeSynced', storesToBeSynced);

  const productsCategoryMapping = {};

  for (const store of storesToBeSynced) {
    const storeCategory = store?.category;
    let productsInCategory = productsCategoryMapping[storeCategory];

    if (productsInCategory == null) {
      let products = await getProductListByCategory(storeCategory);

      console.log('products.length - ' + storeCategory, products?.length);
      console.log('products - ' + storeCategory, products);

      if (products != null) productsCategoryMapping[storeCategory] = products;

      productsInCategory = productsCategoryMapping[storeCategory];
    }

    if (productsInCategory == null || !productsInCategory.length) continue;
    console.log(
      'productsInCategory.length - ' + storeCategory,
      productsInCategory?.length,
    );

    if (!syncedInventoryStoresIds.includes(store.id)) {
      await addInventorySyncStore(store.id, storeCategory);
    }

    for (const product of productsInCategory) {
      await addStoreProduct(store.id, product);
    }

    await updateInventorySyncStore(store.id, storeCategory);
  }

  console.log('productsCategoryMapping', productsCategoryMapping);

  const response = {
    statusCode: 200,
    body: JSON.stringify(productsCategoryMapping),
  };
  return response;
};
