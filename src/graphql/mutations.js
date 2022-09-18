/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrderId = /* GraphQL */ `
  mutation CreateOrderId(
    $amount: Float
    $orderId: String
    $userId: String
    $storeId: String
    $cartId: String
  ) {
    createOrderId(
      amount: $amount
      orderId: $orderId
      userId: $userId
      storeId: $storeId
      cartId: $cartId
    )
  }
`;
export const processMerchantPayment = /* GraphQL */ `
  mutation ProcessMerchantPayment(
    $amount: Float
    $orderId: String
    $storeId: String
    $cartId: String
  ) {
    processMerchantPayment(
      amount: $amount
      orderId: $orderId
      storeId: $storeId
      cartId: $cartId
    )
  }
`;
export const syncStoreInventory = /* GraphQL */ `
  mutation SyncStoreInventory($storeId: String) {
    syncStoreInventory(storeId: $storeId)
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserImage = /* GraphQL */ `
  mutation CreateUserImage(
    $input: CreateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    createUserImage(input: $input, condition: $condition) {
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
export const updateUserImage = /* GraphQL */ `
  mutation UpdateUserImage(
    $input: UpdateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    updateUserImage(input: $input, condition: $condition) {
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
export const deleteUserImage = /* GraphQL */ `
  mutation DeleteUserImage(
    $input: DeleteUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    deleteUserImage(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createSuperAdmin = /* GraphQL */ `
  mutation CreateSuperAdmin(
    $input: CreateSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    createSuperAdmin(input: $input, condition: $condition) {
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
export const updateSuperAdmin = /* GraphQL */ `
  mutation UpdateSuperAdmin(
    $input: UpdateSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    updateSuperAdmin(input: $input, condition: $condition) {
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
export const deleteSuperAdmin = /* GraphQL */ `
  mutation DeleteSuperAdmin(
    $input: DeleteSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    deleteSuperAdmin(input: $input, condition: $condition) {
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
export const createStoreAdmin = /* GraphQL */ `
  mutation CreateStoreAdmin(
    $input: CreateStoreAdminInput!
    $condition: ModelStoreAdminConditionInput
  ) {
    createStoreAdmin(input: $input, condition: $condition) {
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
export const updateStoreAdmin = /* GraphQL */ `
  mutation UpdateStoreAdmin(
    $input: UpdateStoreAdminInput!
    $condition: ModelStoreAdminConditionInput
  ) {
    updateStoreAdmin(input: $input, condition: $condition) {
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
export const deleteStoreAdmin = /* GraphQL */ `
  mutation DeleteStoreAdmin(
    $input: DeleteStoreAdminInput!
    $condition: ModelStoreAdminConditionInput
  ) {
    deleteStoreAdmin(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createStoreImage = /* GraphQL */ `
  mutation CreateStoreImage(
    $input: CreateStoreImageInput!
    $condition: ModelStoreImageConditionInput
  ) {
    createStoreImage(input: $input, condition: $condition) {
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
export const updateStoreImage = /* GraphQL */ `
  mutation UpdateStoreImage(
    $input: UpdateStoreImageInput!
    $condition: ModelStoreImageConditionInput
  ) {
    updateStoreImage(input: $input, condition: $condition) {
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
export const deleteStoreImage = /* GraphQL */ `
  mutation DeleteStoreImage(
    $input: DeleteStoreImageInput!
    $condition: ModelStoreImageConditionInput
  ) {
    deleteStoreImage(input: $input, condition: $condition) {
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
export const createBankInfo = /* GraphQL */ `
  mutation CreateBankInfo(
    $input: CreateBankInfoInput!
    $condition: ModelBankInfoConditionInput
  ) {
    createBankInfo(input: $input, condition: $condition) {
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
export const updateBankInfo = /* GraphQL */ `
  mutation UpdateBankInfo(
    $input: UpdateBankInfoInput!
    $condition: ModelBankInfoConditionInput
  ) {
    updateBankInfo(input: $input, condition: $condition) {
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
export const deleteBankInfo = /* GraphQL */ `
  mutation DeleteBankInfo(
    $input: DeleteBankInfoInput!
    $condition: ModelBankInfoConditionInput
  ) {
    deleteBankInfo(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createProductImage = /* GraphQL */ `
  mutation CreateProductImage(
    $input: CreateProductImageInput!
    $condition: ModelProductImageConditionInput
  ) {
    createProductImage(input: $input, condition: $condition) {
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
export const updateProductImage = /* GraphQL */ `
  mutation UpdateProductImage(
    $input: UpdateProductImageInput!
    $condition: ModelProductImageConditionInput
  ) {
    updateProductImage(input: $input, condition: $condition) {
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
export const deleteProductImage = /* GraphQL */ `
  mutation DeleteProductImage(
    $input: DeleteProductImageInput!
    $condition: ModelProductImageConditionInput
  ) {
    deleteProductImage(input: $input, condition: $condition) {
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
export const deleteStoreProduct = /* GraphQL */ `
  mutation DeleteStoreProduct(
    $input: DeleteStoreProductInput!
    $condition: ModelStoreProductConditionInput
  ) {
    deleteStoreProduct(input: $input, condition: $condition) {
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
export const deleteStoreInventorySync = /* GraphQL */ `
  mutation DeleteStoreInventorySync(
    $input: DeleteStoreInventorySyncInput!
    $condition: ModelStoreInventorySyncConditionInput
  ) {
    deleteStoreInventorySync(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createRazorPayOrder = /* GraphQL */ `
  mutation CreateRazorPayOrder(
    $input: CreateRazorPayOrderInput!
    $condition: ModelRazorPayOrderConditionInput
  ) {
    createRazorPayOrder(input: $input, condition: $condition) {
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
export const deleteRazorPayOrder = /* GraphQL */ `
  mutation DeleteRazorPayOrder(
    $input: DeleteRazorPayOrderInput!
    $condition: ModelRazorPayOrderConditionInput
  ) {
    deleteRazorPayOrder(input: $input, condition: $condition) {
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
export const createRazorPayPayment = /* GraphQL */ `
  mutation CreateRazorPayPayment(
    $input: CreateRazorPayPaymentInput!
    $condition: ModelRazorPayPaymentConditionInput
  ) {
    createRazorPayPayment(input: $input, condition: $condition) {
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
export const deleteRazorPayPayment = /* GraphQL */ `
  mutation DeleteRazorPayPayment(
    $input: DeleteRazorPayPaymentInput!
    $condition: ModelRazorPayPaymentConditionInput
  ) {
    deleteRazorPayPayment(input: $input, condition: $condition) {
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
export const deleteRazorPayMerchantPayment = /* GraphQL */ `
  mutation DeleteRazorPayMerchantPayment(
    $input: DeleteRazorPayMerchantPaymentInput!
    $condition: ModelRazorPayMerchantPaymentConditionInput
  ) {
    deleteRazorPayMerchantPayment(input: $input, condition: $condition) {
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
export const createRefundOrder = /* GraphQL */ `
  mutation CreateRefundOrder(
    $input: CreateRefundOrderInput!
    $condition: ModelRefundOrderConditionInput
  ) {
    createRefundOrder(input: $input, condition: $condition) {
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
export const deleteRefundOrder = /* GraphQL */ `
  mutation DeleteRefundOrder(
    $input: DeleteRefundOrderInput!
    $condition: ModelRefundOrderConditionInput
  ) {
    deleteRefundOrder(input: $input, condition: $condition) {
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
export const createOldOrder = /* GraphQL */ `
  mutation CreateOldOrder(
    $input: CreateOldOrderInput!
    $condition: ModelOldOrderConditionInput
  ) {
    createOldOrder(input: $input, condition: $condition) {
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
export const deleteOldOrder = /* GraphQL */ `
  mutation DeleteOldOrder(
    $input: DeleteOldOrderInput!
    $condition: ModelOldOrderConditionInput
  ) {
    deleteOldOrder(input: $input, condition: $condition) {
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
export const createOrderRating = /* GraphQL */ `
  mutation CreateOrderRating(
    $input: CreateOrderRatingInput!
    $condition: ModelOrderRatingConditionInput
  ) {
    createOrderRating(input: $input, condition: $condition) {
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
export const updateOrderRating = /* GraphQL */ `
  mutation UpdateOrderRating(
    $input: UpdateOrderRatingInput!
    $condition: ModelOrderRatingConditionInput
  ) {
    updateOrderRating(input: $input, condition: $condition) {
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
export const deleteOrderRating = /* GraphQL */ `
  mutation DeleteOrderRating(
    $input: DeleteOrderRatingInput!
    $condition: ModelOrderRatingConditionInput
  ) {
    deleteOrderRating(input: $input, condition: $condition) {
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
export const createInviteStore = /* GraphQL */ `
  mutation CreateInviteStore(
    $input: CreateInviteStoreInput!
    $condition: ModelInviteStoreConditionInput
  ) {
    createInviteStore(input: $input, condition: $condition) {
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
export const updateInviteStore = /* GraphQL */ `
  mutation UpdateInviteStore(
    $input: UpdateInviteStoreInput!
    $condition: ModelInviteStoreConditionInput
  ) {
    updateInviteStore(input: $input, condition: $condition) {
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
export const deleteInviteStore = /* GraphQL */ `
  mutation DeleteInviteStore(
    $input: DeleteInviteStoreInput!
    $condition: ModelInviteStoreConditionInput
  ) {
    deleteInviteStore(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const deletePromotion = /* GraphQL */ `
  mutation DeletePromotion(
    $input: DeletePromotionInput!
    $condition: ModelPromotionConditionInput
  ) {
    deletePromotion(input: $input, condition: $condition) {
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
export const createStoreProduct = /* GraphQL */ `
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
export const updateStoreProduct = /* GraphQL */ `
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
        productImage {
          nextToken
        }
      }
      owner
    }
  }
`;
export const createStoreInventorySync = /* GraphQL */ `
  mutation CreateStoreInventorySync(
    $input: CreateStoreInventorySyncInput!
    $condition: ModelStoreInventorySyncConditionInput
  ) {
    createStoreInventorySync(input: $input, condition: $condition) {
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
export const updateStoreInventorySync = /* GraphQL */ `
  mutation UpdateStoreInventorySync(
    $input: UpdateStoreInventorySyncInput!
    $condition: ModelStoreInventorySyncConditionInput
  ) {
    updateStoreInventorySync(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const updateRazorPayOrder = /* GraphQL */ `
  mutation UpdateRazorPayOrder(
    $input: UpdateRazorPayOrderInput!
    $condition: ModelRazorPayOrderConditionInput
  ) {
    updateRazorPayOrder(input: $input, condition: $condition) {
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
export const updateRazorPayPayment = /* GraphQL */ `
  mutation UpdateRazorPayPayment(
    $input: UpdateRazorPayPaymentInput!
    $condition: ModelRazorPayPaymentConditionInput
  ) {
    updateRazorPayPayment(input: $input, condition: $condition) {
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
export const createRazorPayMerchantPayment = /* GraphQL */ `
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
export const updateRazorPayMerchantPayment = /* GraphQL */ `
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
export const updateRefundOrder = /* GraphQL */ `
  mutation UpdateRefundOrder(
    $input: UpdateRefundOrderInput!
    $condition: ModelRefundOrderConditionInput
  ) {
    updateRefundOrder(input: $input, condition: $condition) {
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
export const updateOldOrder = /* GraphQL */ `
  mutation UpdateOldOrder(
    $input: UpdateOldOrderInput!
    $condition: ModelOldOrderConditionInput
  ) {
    updateOldOrder(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const createPromotion = /* GraphQL */ `
  mutation CreatePromotion(
    $input: CreatePromotionInput!
    $condition: ModelPromotionConditionInput
  ) {
    createPromotion(input: $input, condition: $condition) {
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
export const updatePromotion = /* GraphQL */ `
  mutation UpdatePromotion(
    $input: UpdatePromotionInput!
    $condition: ModelPromotionConditionInput
  ) {
    updatePromotion(input: $input, condition: $condition) {
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
