/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      topic
      title
      body
      isRead
      metaData
      deletedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topic
        title
        body
        isRead
        metaData
        deletedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const notificationsByTopic = /* GraphQL */ `
  query NotificationsByTopic(
    $topic: ID
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByTopic(
      topic: $topic
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        topic
        title
        body
        isRead
        metaData
        deletedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      gender
      firstName
      lastName
      primaryNumber
      secondaryNumber
      deletedAt
      createdAt
      updatedAt
      owner
      userImage {
        id
        userId
        imagePath
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      addresses {
        items {
          id
          userId
          tag
          city
          state
          careOf
          careOfLastName
          address
          pincode
          location
          landmark
          latitude
          longitude
          contactNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      carts {
        items {
          id
          userId
          storeId
          discount
          isOrderPlaced
          originalCartValue
          updatedCartValue
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      orders {
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
          paymentType
          deletedAt
          deliveryAddress
          razorPayOrder
          updatedAt
          owner
        }
        nextToken
      }
      conversations {
        items {
          id
          userId
          storeId
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
        }
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const userByPrimaryNumber = /* GraphQL */ `
  query UserByPrimaryNumber(
    $primaryNumber: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByPrimaryNumber(
      primaryNumber: $primaryNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
        }
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserImage = /* GraphQL */ `
  query GetUserImage($id: ID!) {
    getUserImage(id: $id) {
      id
      userId
      imagePath
      deletedAt
      createdAt
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
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
export const listUserImages = /* GraphQL */ `
  query ListUserImages(
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        imagePath
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const imagesByUserId = /* GraphQL */ `
  query ImagesByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    imagesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        imagePath
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      userId
      tag
      city
      state
      careOf
      careOfLastName
      address
      pincode
      location
      landmark
      latitude
      longitude
      contactNumber
      deletedAt
      createdAt
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        tag
        city
        state
        careOf
        careOfLastName
        address
        pincode
        location
        landmark
        latitude
        longitude
        contactNumber
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const addressByUserId = /* GraphQL */ `
  query AddressByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        tag
        city
        state
        careOf
        careOfLastName
        address
        pincode
        location
        landmark
        latitude
        longitude
        contactNumber
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getSuperAdmin = /* GraphQL */ `
  query GetSuperAdmin($id: ID!) {
    getSuperAdmin(id: $id) {
      id
      userId
      deletedAt
      createdAt
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
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
export const listSuperAdmins = /* GraphQL */ `
  query ListSuperAdmins(
    $filter: ModelSuperAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuperAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const superAdminByUserId = /* GraphQL */ `
  query SuperAdminByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSuperAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    superAdminByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getStoreAdmin = /* GraphQL */ `
  query GetStoreAdmin($id: ID!) {
    getStoreAdmin(id: $id) {
      id
      userId
      storeId
      deletedAt
      createdAt
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
        }
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      owner
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
        deletedAt
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
          deletedAt
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
    }
  }
`;
export const listStoreAdmins = /* GraphQL */ `
  query ListStoreAdmins(
    $filter: ModelStoreAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        storeId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
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
          deletedAt
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const storeAdminByUserId = /* GraphQL */ `
  query StoreAdminByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelStoreAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeAdminByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
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
          deletedAt
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
      storeAdmins {
        items {
          id
          userId
          storeId
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      storeImages {
        items {
          id
          storeId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
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
        deletedAt
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
          deletedAt
          createdAt
          updatedAt
        }
        owner
      }
      orders {
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
          paymentType
          deletedAt
          deliveryAddress
          razorPayOrder
          updatedAt
          owner
        }
        nextToken
      }
      conversations {
        items {
          id
          userId
          storeId
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listStores = /* GraphQL */ `
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
          deletedAt
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
      nextToken
    }
  }
`;
export const storeByPrimaryNumber = /* GraphQL */ `
  query StoreByPrimaryNumber(
    $primaryNumber: String
    $sortDirection: ModelSortDirection
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeByPrimaryNumber(
      primaryNumber: $primaryNumber
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          deletedAt
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
      nextToken
    }
  }
`;
export const storeByCategory = /* GraphQL */ `
  query StoreByCategory(
    $category: String
    $sortDirection: ModelSortDirection
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeByCategory(
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          deletedAt
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
      nextToken
    }
  }
`;
export const getStoreImage = /* GraphQL */ `
  query GetStoreImage($id: ID!) {
    getStoreImage(id: $id) {
      id
      storeId
      imagePath
      deletedAt
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
        deletedAt
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
          deletedAt
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
export const listStoreImages = /* GraphQL */ `
  query ListStoreImages(
    $filter: ModelStoreImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeId
        imagePath
        deletedAt
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
          deletedAt
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const imagesByStoreId = /* GraphQL */ `
  query ImagesByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelStoreImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    imagesByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        imagePath
        deletedAt
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
          deletedAt
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getBankInfo = /* GraphQL */ `
  query GetBankInfo($id: ID!) {
    getBankInfo(id: $id) {
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
      deletedAt
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
        deletedAt
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
          deletedAt
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
export const listBankInfos = /* GraphQL */ `
  query ListBankInfos(
    $filter: ModelBankInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBankInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        deletedAt
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
          deletedAt
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const bankInfoByStoreId = /* GraphQL */ `
  query BankInfoByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBankInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bankInfoByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        deletedAt
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
          deletedAt
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
      productImage {
        items {
          id
          productId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
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
        deletedAt
        createdAt
        updatedAt
        productImage {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const productByCategory = /* GraphQL */ `
  query ProductByCategory(
    $category: String
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByCategory(
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        productImage {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const productBySubCategory = /* GraphQL */ `
  query ProductBySubCategory(
    $subCategory: String
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productBySubCategory(
      subCategory: $subCategory
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        productImage {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const productByMasterCategory = /* GraphQL */ `
  query ProductByMasterCategory(
    $masterCategory: String
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByMasterCategory(
      masterCategory: $masterCategory
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        productImage {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const searchProducts = /* GraphQL */ `
  query SearchProducts(
    $filter: SearchableProductFilterInput
    $sort: SearchableProductSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchProducts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
        productImage {
          nextToken
        }
      }
      nextToken
      total
    }
  }
`;
export const getProductImage = /* GraphQL */ `
  query GetProductImage($id: ID!) {
    getProductImage(id: $id) {
      id
      productId
      imagePath
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
        productImage {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listProductImages = /* GraphQL */ `
  query ListProductImages(
    $filter: ModelProductImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        imagePath
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
      nextToken
    }
  }
`;
export const imagesByProductId = /* GraphQL */ `
  query ImagesByProductId(
    $productId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    imagesByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        imagePath
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
      nextToken
    }
  }
`;
export const getStoreProduct = /* GraphQL */ `
  query GetStoreProduct($id: ID!) {
    getStoreProduct(id: $id) {
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
        productImage {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listStoreProducts = /* GraphQL */ `
  query ListStoreProducts(
    $filter: ModelStoreProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const productByProductId = /* GraphQL */ `
  query ProductByProductId(
    $productId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelStoreProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const productsByStoreId = /* GraphQL */ `
  query ProductsByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelStoreProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getStoreInventorySync = /* GraphQL */ `
  query GetStoreInventorySync($id: ID!) {
    getStoreInventorySync(id: $id) {
      id
      category
      storeInventorySyncStatus
      deletedAt
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
        deletedAt
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
          deletedAt
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
export const listStoreInventorySyncs = /* GraphQL */ `
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
        deletedAt
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
          deletedAt
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
      id
      cartId
      mrp
      quantity
      storeProductId
      availability
      orderedQuantity
      deletedAt
      createdAt
      updatedAt
      storeProduct {
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
      owner
      cart {
        id
        userId
        storeId
        discount
        isOrderPlaced
        originalCartValue
        updatedCartValue
        deliveryCharges
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        cartItems {
          nextToken
        }
        owner
        order {
          id
          userId
          storeId
          cartId
          shortId
          createdAt
          razorPayOrderId
          preferredSlot
          orderStatus
          paymentType
          deletedAt
          deliveryAddress
          razorPayOrder
          updatedAt
          owner
        }
      }
    }
  }
`;
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cartId
        mrp
        quantity
        storeProductId
        availability
        orderedQuantity
        deletedAt
        createdAt
        updatedAt
        storeProduct {
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
          owner
        }
        owner
        cart {
          id
          userId
          storeId
          discount
          isOrderPlaced
          originalCartValue
          updatedCartValue
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const cartsItemsByCartId = /* GraphQL */ `
  query CartsItemsByCartId(
    $cartId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartsItemsByCartId(
      cartId: $cartId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        mrp
        quantity
        storeProductId
        availability
        orderedQuantity
        deletedAt
        createdAt
        updatedAt
        storeProduct {
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
          owner
        }
        owner
        cart {
          id
          userId
          storeId
          discount
          isOrderPlaced
          originalCartValue
          updatedCartValue
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      userId
      storeId
      discount
      isOrderPlaced
      originalCartValue
      updatedCartValue
      deliveryCharges
      deletedAt
      createdAt
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
        }
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      cartItems {
        items {
          id
          cartId
          mrp
          quantity
          storeProductId
          availability
          orderedQuantity
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
      order {
        id
        userId
        storeId
        cartId
        shortId
        createdAt
        razorPayOrderId
        preferredSlot
        orderStatus
        paymentType
        deletedAt
        deliveryAddress
        razorPayOrder
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
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
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const listCarts = /* GraphQL */ `
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
        deliveryCharges
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        cartItems {
          nextToken
        }
        owner
        order {
          id
          userId
          storeId
          cartId
          shortId
          createdAt
          razorPayOrderId
          preferredSlot
          orderStatus
          paymentType
          deletedAt
          deliveryAddress
          razorPayOrder
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const cartsByUserId = /* GraphQL */ `
  query CartsByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        discount
        isOrderPlaced
        originalCartValue
        updatedCartValue
        deliveryCharges
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        cartItems {
          nextToken
        }
        owner
        order {
          id
          userId
          storeId
          cartId
          shortId
          createdAt
          razorPayOrderId
          preferredSlot
          orderStatus
          paymentType
          deletedAt
          deliveryAddress
          razorPayOrder
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const cartsByStoreId = /* GraphQL */ `
  query CartsByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartsByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        discount
        isOrderPlaced
        originalCartValue
        updatedCartValue
        deliveryCharges
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        cartItems {
          nextToken
        }
        owner
        order {
          id
          userId
          storeId
          cartId
          shortId
          createdAt
          razorPayOrderId
          preferredSlot
          orderStatus
          paymentType
          deletedAt
          deliveryAddress
          razorPayOrder
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userId
      storeId
      cartId
      shortId
      createdAt
      razorPayOrderId
      preferredSlot
      orderStatus
      paymentType
      deletedAt
      deliveryAddress
      razorPayOrder
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
        }
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
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
        deliveryCharges
        contactNumber
        minimumAmount
        deletedAt
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
          deletedAt
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
      cart {
        id
        userId
        storeId
        discount
        isOrderPlaced
        originalCartValue
        updatedCartValue
        deliveryCharges
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
          createdAt
          updatedAt
          owner
        }
        cartItems {
          nextToken
        }
        owner
        order {
          id
          userId
          storeId
          cartId
          shortId
          createdAt
          razorPayOrderId
          preferredSlot
          orderStatus
          paymentType
          deletedAt
          deliveryAddress
          razorPayOrder
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
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
        paymentType
        deletedAt
        deliveryAddress
        razorPayOrder
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
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
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const ordersByUserId = /* GraphQL */ `
  query OrdersByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        paymentType
        deletedAt
        deliveryAddress
        razorPayOrder
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
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
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const ordersByCartId = /* GraphQL */ `
  query OrdersByCartId(
    $cartId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCartId(
      cartId: $cartId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        paymentType
        deletedAt
        deliveryAddress
        razorPayOrder
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
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
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const ordersByStoreId = /* GraphQL */ `
  query OrdersByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        paymentType
        deletedAt
        deliveryAddress
        razorPayOrder
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
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
          deliveryCharges
          deletedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getRazorPayOrder = /* GraphQL */ `
  query GetRazorPayOrder($id: ID!) {
    getRazorPayOrder(id: $id) {
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
  }
`;
export const listRazorPayOrders = /* GraphQL */ `
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
export const razorPayOrderByReceipt = /* GraphQL */ `
  query RazorPayOrderByReceipt(
    $receipt: String
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayOrderByReceipt(
      receipt: $receipt
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
export const razorPayOrderByOrderId = /* GraphQL */ `
  query RazorPayOrderByOrderId(
    $orderId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayOrderByOrderId(
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
export const razorPayOrderByUserId = /* GraphQL */ `
  query RazorPayOrderByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayOrderByUserId(
      userId: $userId
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
export const razorPayOrderByStoreId = /* GraphQL */ `
  query RazorPayOrderByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayOrderByStoreId(
      storeId: $storeId
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
export const razorPayOrderByCartId = /* GraphQL */ `
  query RazorPayOrderByCartId(
    $cartId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayOrderByCartId(
      cartId: $cartId
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
export const getRazorPayPayment = /* GraphQL */ `
  query GetRazorPayPayment($id: ID!) {
    getRazorPayPayment(id: $id) {
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
  }
`;
export const listRazorPayPayments = /* GraphQL */ `
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
export const razorPayPaymentByReceipt = /* GraphQL */ `
  query RazorPayPaymentByReceipt(
    $receipt: String
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayPaymentByReceipt(
      receipt: $receipt
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
export const razorPayPaymentByOrderId = /* GraphQL */ `
  query RazorPayPaymentByOrderId(
    $orderId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayPaymentByOrderId(
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
export const razorPayPaymentByUserId = /* GraphQL */ `
  query RazorPayPaymentByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayPaymentByUserId(
      userId: $userId
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
export const razorPayPaymentByStoreId = /* GraphQL */ `
  query RazorPayPaymentByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayPaymentByStoreId(
      storeId: $storeId
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
export const razorPayPaymentByCartId = /* GraphQL */ `
  query RazorPayPaymentByCartId(
    $cartId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayPaymentByCartId(
      cartId: $cartId
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
export const getRazorPayMerchantPayment = /* GraphQL */ `
  query GetRazorPayMerchantPayment($id: ID!) {
    getRazorPayMerchantPayment(id: $id) {
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
export const listRazorPayMerchantPayments = /* GraphQL */ `
  query ListRazorPayMerchantPayments(
    $filter: ModelRazorPayMerchantPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRazorPayMerchantPayments(
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
export const razorPayMerchantPaymentByReceipt = /* GraphQL */ `
  query RazorPayMerchantPaymentByReceipt(
    $receipt: String
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayMerchantPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayMerchantPaymentByReceipt(
      receipt: $receipt
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
export const razorPayMerchantPaymentByOrderId = /* GraphQL */ `
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
export const razorPayMerchantPaymentByUserId = /* GraphQL */ `
  query RazorPayMerchantPaymentByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayMerchantPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayMerchantPaymentByUserId(
      userId: $userId
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
export const razorPayMerchantPaymentByStoreId = /* GraphQL */ `
  query RazorPayMerchantPaymentByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayMerchantPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayMerchantPaymentByStoreId(
      storeId: $storeId
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
export const razorPayMerchantPaymentByCartId = /* GraphQL */ `
  query RazorPayMerchantPaymentByCartId(
    $cartId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRazorPayMerchantPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    razorPayMerchantPaymentByCartId(
      cartId: $cartId
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
export const getRefundOrder = /* GraphQL */ `
  query GetRefundOrder($id: ID!) {
    getRefundOrder(id: $id) {
      id
      cartId
      userId
      storeId
      orderId
      notes
      deletedAt
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
export const listRefundOrders = /* GraphQL */ `
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
        notes
        deletedAt
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
      nextToken
    }
  }
`;
export const refundOrderByUserId = /* GraphQL */ `
  query RefundOrderByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRefundOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    refundOrderByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        userId
        storeId
        orderId
        notes
        deletedAt
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
      nextToken
    }
  }
`;
export const refundOrderByStoreId = /* GraphQL */ `
  query RefundOrderByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRefundOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    refundOrderByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        userId
        storeId
        orderId
        notes
        deletedAt
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
      nextToken
    }
  }
`;
export const refundOrderByOrderId = /* GraphQL */ `
  query RefundOrderByOrderId(
    $orderId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRefundOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    refundOrderByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cartId
        userId
        storeId
        orderId
        notes
        deletedAt
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
      nextToken
    }
  }
`;
export const getOldOrder = /* GraphQL */ `
  query GetOldOrder($id: ID!) {
    getOldOrder(id: $id) {
      id
      userId
      storeId
      shortId
      deletedAt
      orderStatus
      productDetails
      totalOrderValue
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOldOrders = /* GraphQL */ `
  query ListOldOrders(
    $filter: ModelOldOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOldOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        storeId
        shortId
        deletedAt
        orderStatus
        productDetails
        totalOrderValue
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const oldOrderByUserId = /* GraphQL */ `
  query OldOrderByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOldOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oldOrderByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        shortId
        deletedAt
        orderStatus
        productDetails
        totalOrderValue
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const oldOrderByStoreId = /* GraphQL */ `
  query OldOrderByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOldOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oldOrderByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        shortId
        deletedAt
        orderStatus
        productDetails
        totalOrderValue
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrderRating = /* GraphQL */ `
  query GetOrderRating($id: ID!) {
    getOrderRating(id: $id) {
      id
      orderId
      userId
      storeId
      rating
      deletedAt
      reviewMessage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOrderRatings = /* GraphQL */ `
  query ListOrderRatings(
    $filter: ModelOrderRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        userId
        storeId
        rating
        deletedAt
        reviewMessage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const orderRatingByOrderId = /* GraphQL */ `
  query OrderRatingByOrderId(
    $orderId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderRatingByOrderId(
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
        rating
        deletedAt
        reviewMessage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const orderRatingByStoreId = /* GraphQL */ `
  query OrderRatingByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderRatingByStoreId(
      storeId: $storeId
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
        rating
        deletedAt
        reviewMessage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const orderRatingByUserId = /* GraphQL */ `
  query OrderRatingByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderRatingByUserId(
      userId: $userId
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
        rating
        deletedAt
        reviewMessage
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getInviteStore = /* GraphQL */ `
  query GetInviteStore($id: ID!) {
    getInviteStore(id: $id) {
      id
      userId
      storeName
      mobileNumber
      storeArea
      city
      pincode
      deletedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listInviteStores = /* GraphQL */ `
  query ListInviteStores(
    $filter: ModelInviteStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInviteStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        storeName
        mobileNumber
        storeArea
        city
        pincode
        deletedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const invitesByUserId = /* GraphQL */ `
  query InvitesByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelInviteStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invitesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeName
        mobileNumber
        storeArea
        city
        pincode
        deletedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      userId
      storeId
      type
      senderId
      message
      conversationId
      deletedAt
      createdAt
      updatedAt
      owner
      conversation {
        id
        userId
        storeId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        owner
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        storeId
        type
        senderId
        message
        conversationId
        deletedAt
        createdAt
        updatedAt
        owner
        conversation {
          id
          userId
          storeId
          deletedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const messagesByConversationId = /* GraphQL */ `
  query MessagesByConversationId(
    $conversationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByConversationId(
      conversationId: $conversationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        type
        senderId
        message
        conversationId
        deletedAt
        createdAt
        updatedAt
        owner
        conversation {
          id
          userId
          storeId
          deletedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      userId
      storeId
      deletedAt
      createdAt
      updatedAt
      user {
        id
        email
        gender
        firstName
        lastName
        primaryNumber
        secondaryNumber
        deletedAt
        createdAt
        updatedAt
        owner
        userImage {
          id
          userId
          imagePath
          deletedAt
          createdAt
          updatedAt
          owner
        }
        addresses {
          nextToken
        }
        carts {
          nextToken
        }
        orders {
          nextToken
        }
        conversations {
          nextToken
        }
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
        deliveryCharges
        contactNumber
        minimumAmount
        deletedAt
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
          deletedAt
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
      messages {
        items {
          id
          userId
          storeId
          type
          senderId
          message
          conversationId
          deletedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        storeId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const conversationsByUserId = /* GraphQL */ `
  query ConversationsByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const conversationsByStoreId = /* GraphQL */ `
  query ConversationsByStoreId(
    $storeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        storeId
        deletedAt
        createdAt
        updatedAt
        user {
          id
          email
          gender
          firstName
          lastName
          primaryNumber
          secondaryNumber
          deletedAt
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
          deliveryCharges
          contactNumber
          minimumAmount
          deletedAt
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getPromotion = /* GraphQL */ `
  query GetPromotion($id: ID!) {
    getPromotion(id: $id) {
      id
      isActive
      bannerImage
      detailLink
      deletedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPromotions = /* GraphQL */ `
  query ListPromotions(
    $filter: ModelPromotionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromotions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isActive
        bannerImage
        detailLink
        deletedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
