/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateOrderById = /* GraphQL */ `
  subscription OnUpdateOrderById($id: ID) {
    onUpdateOrderById(id: $id) {
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
export const onUpdateOrderByUserId = /* GraphQL */ `
  subscription OnUpdateOrderByUserId($userId: ID) {
    onUpdateOrderByUserId(userId: $userId) {
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
export const onUpdateOrderByStoreId = /* GraphQL */ `
  subscription OnUpdateOrderByStoreId($storeId: ID) {
    onUpdateOrderByStoreId(storeId: $storeId) {
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
export const onCreateConversationByStoreId = /* GraphQL */ `
  subscription OnCreateConversationByStoreId($storeId: ID) {
    onCreateConversationByStoreId(storeId: $storeId) {
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
export const onCreateConversationByUserId = /* GraphQL */ `
  subscription OnCreateConversationByUserId($userId: ID) {
    onCreateConversationByUserId(userId: $userId) {
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
export const onUpdateConversationByStoreId = /* GraphQL */ `
  subscription OnUpdateConversationByStoreId($storeId: ID) {
    onUpdateConversationByStoreId(storeId: $storeId) {
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
export const onUpdateConversationByUserId = /* GraphQL */ `
  subscription OnUpdateConversationByUserId($userId: ID) {
    onUpdateConversationByUserId(userId: $userId) {
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
export const onCreateMessageByConversationId = /* GraphQL */ `
  subscription OnCreateMessageByConversationId($conversationId: ID) {
    onCreateMessageByConversationId(conversationId: $conversationId) {
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
export const onUpdateCartByUserId = /* GraphQL */ `
  subscription OnUpdateCartByUserId($userId: ID) {
    onUpdateCartByUserId(userId: $userId) {
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
export const onCreateNotificationByTopic = /* GraphQL */ `
  subscription OnCreateNotificationByTopic($topic: ID) {
    onCreateNotificationByTopic(topic: $topic) {
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
export const onCreateCartItemByUserId = /* GraphQL */ `
  subscription OnCreateCartItemByUserId($userId: ID) {
    onCreateCartItemByUserId(userId: $userId) {
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
export const onUpdateCartItemByUserId = /* GraphQL */ `
  subscription OnUpdateCartItemByUserId($userId: ID) {
    onUpdateCartItemByUserId(userId: $userId) {
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
export const onDeleteCartItemByUserId = /* GraphQL */ `
  subscription OnDeleteCartItemByUserId($userId: ID) {
    onDeleteCartItemByUserId(userId: $userId) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserImage = /* GraphQL */ `
  subscription OnCreateUserImage {
    onCreateUserImage {
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
export const onUpdateUserImage = /* GraphQL */ `
  subscription OnUpdateUserImage {
    onUpdateUserImage {
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
export const onDeleteUserImage = /* GraphQL */ `
  subscription OnDeleteUserImage {
    onDeleteUserImage {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateSuperAdmin = /* GraphQL */ `
  subscription OnCreateSuperAdmin {
    onCreateSuperAdmin {
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
export const onUpdateSuperAdmin = /* GraphQL */ `
  subscription OnUpdateSuperAdmin {
    onUpdateSuperAdmin {
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
export const onDeleteSuperAdmin = /* GraphQL */ `
  subscription OnDeleteSuperAdmin {
    onDeleteSuperAdmin {
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
export const onCreateStoreAdmin = /* GraphQL */ `
  subscription OnCreateStoreAdmin {
    onCreateStoreAdmin {
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
export const onUpdateStoreAdmin = /* GraphQL */ `
  subscription OnUpdateStoreAdmin {
    onUpdateStoreAdmin {
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
export const onDeleteStoreAdmin = /* GraphQL */ `
  subscription OnDeleteStoreAdmin {
    onDeleteStoreAdmin {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore {
    onCreateStore {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore {
    onUpdateStore {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore {
    onDeleteStore {
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
export const onCreateStoreImage = /* GraphQL */ `
  subscription OnCreateStoreImage {
    onCreateStoreImage {
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
export const onUpdateStoreImage = /* GraphQL */ `
  subscription OnUpdateStoreImage {
    onUpdateStoreImage {
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
export const onDeleteStoreImage = /* GraphQL */ `
  subscription OnDeleteStoreImage {
    onDeleteStoreImage {
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
export const onCreateBankInfo = /* GraphQL */ `
  subscription OnCreateBankInfo {
    onCreateBankInfo {
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
export const onUpdateBankInfo = /* GraphQL */ `
  subscription OnUpdateBankInfo {
    onUpdateBankInfo {
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
export const onDeleteBankInfo = /* GraphQL */ `
  subscription OnDeleteBankInfo {
    onDeleteBankInfo {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProductImage = /* GraphQL */ `
  subscription OnCreateProductImage {
    onCreateProductImage {
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
export const onUpdateProductImage = /* GraphQL */ `
  subscription OnUpdateProductImage {
    onUpdateProductImage {
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
export const onDeleteProductImage = /* GraphQL */ `
  subscription OnDeleteProductImage {
    onDeleteProductImage {
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
export const onCreateStoreProduct = /* GraphQL */ `
  subscription OnCreateStoreProduct {
    onCreateStoreProduct {
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
export const onUpdateStoreProduct = /* GraphQL */ `
  subscription OnUpdateStoreProduct {
    onUpdateStoreProduct {
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
export const onDeleteStoreProduct = /* GraphQL */ `
  subscription OnDeleteStoreProduct {
    onDeleteStoreProduct {
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
export const onCreateStoreInventorySync = /* GraphQL */ `
  subscription OnCreateStoreInventorySync {
    onCreateStoreInventorySync {
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
export const onUpdateStoreInventorySync = /* GraphQL */ `
  subscription OnUpdateStoreInventorySync {
    onUpdateStoreInventorySync {
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
export const onDeleteStoreInventorySync = /* GraphQL */ `
  subscription OnDeleteStoreInventorySync {
    onDeleteStoreInventorySync {
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
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem {
    onCreateCartItem {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem {
    onUpdateCartItem {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem {
    onDeleteCartItem {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateRazorPayOrder = /* GraphQL */ `
  subscription OnCreateRazorPayOrder {
    onCreateRazorPayOrder {
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
export const onUpdateRazorPayOrder = /* GraphQL */ `
  subscription OnUpdateRazorPayOrder {
    onUpdateRazorPayOrder {
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
export const onDeleteRazorPayOrder = /* GraphQL */ `
  subscription OnDeleteRazorPayOrder {
    onDeleteRazorPayOrder {
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
export const onCreateRazorPayPayment = /* GraphQL */ `
  subscription OnCreateRazorPayPayment {
    onCreateRazorPayPayment {
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
export const onUpdateRazorPayPayment = /* GraphQL */ `
  subscription OnUpdateRazorPayPayment {
    onUpdateRazorPayPayment {
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
export const onDeleteRazorPayPayment = /* GraphQL */ `
  subscription OnDeleteRazorPayPayment {
    onDeleteRazorPayPayment {
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
export const onCreateRazorPayMerchantPayment = /* GraphQL */ `
  subscription OnCreateRazorPayMerchantPayment {
    onCreateRazorPayMerchantPayment {
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
export const onUpdateRazorPayMerchantPayment = /* GraphQL */ `
  subscription OnUpdateRazorPayMerchantPayment {
    onUpdateRazorPayMerchantPayment {
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
export const onDeleteRazorPayMerchantPayment = /* GraphQL */ `
  subscription OnDeleteRazorPayMerchantPayment {
    onDeleteRazorPayMerchantPayment {
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
export const onCreateRefundOrder = /* GraphQL */ `
  subscription OnCreateRefundOrder {
    onCreateRefundOrder {
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
export const onUpdateRefundOrder = /* GraphQL */ `
  subscription OnUpdateRefundOrder {
    onUpdateRefundOrder {
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
export const onDeleteRefundOrder = /* GraphQL */ `
  subscription OnDeleteRefundOrder {
    onDeleteRefundOrder {
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
export const onCreateOldOrder = /* GraphQL */ `
  subscription OnCreateOldOrder {
    onCreateOldOrder {
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
export const onUpdateOldOrder = /* GraphQL */ `
  subscription OnUpdateOldOrder {
    onUpdateOldOrder {
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
export const onDeleteOldOrder = /* GraphQL */ `
  subscription OnDeleteOldOrder {
    onDeleteOldOrder {
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
export const onCreateOrderRating = /* GraphQL */ `
  subscription OnCreateOrderRating {
    onCreateOrderRating {
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
export const onUpdateOrderRating = /* GraphQL */ `
  subscription OnUpdateOrderRating {
    onUpdateOrderRating {
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
export const onDeleteOrderRating = /* GraphQL */ `
  subscription OnDeleteOrderRating {
    onDeleteOrderRating {
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
export const onCreateInviteStore = /* GraphQL */ `
  subscription OnCreateInviteStore {
    onCreateInviteStore {
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
export const onUpdateInviteStore = /* GraphQL */ `
  subscription OnUpdateInviteStore {
    onUpdateInviteStore {
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
export const onDeleteInviteStore = /* GraphQL */ `
  subscription OnDeleteInviteStore {
    onDeleteInviteStore {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreatePromotion = /* GraphQL */ `
  subscription OnCreatePromotion {
    onCreatePromotion {
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
export const onUpdatePromotion = /* GraphQL */ `
  subscription OnUpdatePromotion {
    onUpdatePromotion {
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
export const onDeletePromotion = /* GraphQL */ `
  subscription OnDeletePromotion {
    onDeletePromotion {
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
