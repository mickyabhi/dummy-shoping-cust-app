export const actions = {
  SHOW_LOGOUT_MODAL: 'SHOW_LOGOUT_MODAL',
  SHOW_RATEUS_MODAL: 'SHOW_RATEUS_MODAL',
  FETCH_USER_DATA: 'FETCH_USER_DATA',
  SAVE_USER_DATA: 'SAVE_USER_DATA',
  FETCH_STORE_PRODUCTS: 'FETCH_STORE_PRODUCTS',
  SAVE_STORE_PRODUCTS: 'SAVE_STORE_PRODUCTS',
  FETCH_STORES_LIST: 'FETCH_STORES_LIST',
  SAVE_STORES_LIST: 'SAVE_STORES_LIST',
  SAVE_CATEGORIES: 'SAVE_CATEGORIES',
  FETCH_STORES_BY_CATEGORY: 'FETCH_STORES_BY_CATEGORY',
  SAVE_STORES_BY_CATEGORY: 'SAVE_STORES_BY_CATEGORY',
  FETCH_USER_ORDERS: 'FETCH_USER_ORDERS',
  SAVE_USER_ORDERS: 'SAVE_USER_ORDERS',
  SHOW_ERROR_MESSAGE: 'SHOW_ERROR_MESSAGE',
  SHOW_LOADING: 'SHOW_LOADING',
  FETCH_MESSAGE: 'FETCH_MESSAGE',
  SAVE_MESSAGE: 'SAVE_MESSAGE',
  FETCH_CURRENT_CARTS: 'FETCH_CURRENT_CARTS',
  SAVE_CURRENT_CARTS: 'SAVE_CURRENT_CARTS',
  SUBMIT_INVITE_STORE: 'SUBMIT_INVITE_STORE',
  SUBMIT_RATING: 'SUBMIT_RATING',
  FETCH_NOTIFICATION: 'FETCH_NOTIFICATION',
  SAVE_NOTIFICATION: 'SAVE_NOTIFICATION',
  FETCH_USER_RAZORPAY_PAYMENTS: 'FETCH_USER_RAZORPAY_PAYMENTS',
  SAVE_USER_RAZORPAY_PAYMENTS: 'SAVE_USER_RAZORPAY_PAYMENTS',
  FETCH_RATING: 'FETCH_RATING',
  SAVE_RATING: 'SAVE_RATING',
  ERROR_HANDLE: 'ERROR_HANDLE',
  FETCH_RAZOR_PAY_ORDER: 'FETCH_RAZOR_PAY_ORDER',
  SAVE_RAZOR_PAY_ORDER: 'SAVE_RAZOR_PAY_ORDER',
  SAVE_RAZOR_PAY_PAYMENT: 'SAVE_RAZOR_PAY_PAYMENT',
  FETCH_USER_CARTS: 'FETCH_USER_CARTS',
  SAVE_USER_CARTS: 'SAVE_USER_CARTS',
  CLEAR_REDUCER: 'CLEAR_REDUCER',
};

export const clearReducer = () => ({
  type: actions.CLEAR_REDUCER,
});

export const showLogOutModal = logOutModal => ({
  type: actions.SHOW_LOGOUT_MODAL,
  logOutModal,
});

export const showRateUsModal = rateUsModal => ({
  type: actions.SHOW_RATEUS_MODAL,
  rateUsModal,
});

export const fetchUserData = () => ({
  type: actions.FETCH_USER_DATA,
});

export const saveUserData = userData => ({
  type: actions.SAVE_USER_DATA,
  userData,
});

export const fetchStoreProducts = storeId => ({
  type: actions.FETCH_STORE_PRODUCTS,
  storeId,
});

export const saveStoreProducts = storeProducts => ({
  type: actions.SAVE_STORE_PRODUCTS,
  storeProducts,
});

export const fetchStoresList = () => ({
  type: actions.FETCH_STORES_LIST,
});

export const saveStoresList = storesList => ({
  type: actions.SAVE_STORES_LIST,
  storesList,
});

export const saveCategories = categories => ({
  type: actions.SAVE_CATEGORIES,
  categories,
});

export const fetchStoresByCategory = category => ({
  type: actions.FETCH_STORES_BY_CATEGORY,
  category,
});

export const saveStoresByCategories = storeByCategory => ({
  type: actions.SAVE_STORES_BY_CATEGORY,
  storeByCategory,
});

export const fetchOrder = () => ({
  type: actions.FETCH_USER_ORDERS,
});

export const saveUserOrders = userOrders => ({
  type: actions.SAVE_USER_ORDERS,
  userOrders,
});

export const showErrorToast = errorMessage => ({
  type: actions.SHOW_ERROR_MESSAGE,
  errorMessage,
});

export const showLoading = (loadingState = true) => ({
  type: actions.SHOW_LOADING,
  loadingState,
});

export const fetchMessage = conversationId => ({
  type: actions.FETCH_MESSAGE,
  conversationId,
});

export const saveMessage = message => ({
  type: actions.SAVE_MESSAGE,
  message,
});

export const fetchCurrentCarts = () => ({
  type: actions.FETCH_CURRENT_CARTS,
});

export const saveCurrentCarts = currentCarts => ({
  type: actions.SAVE_CURRENT_CARTS,
  currentCarts,
});

export const submitInviteStore = inviteStoreReq => ({
  type: actions.SUBMIT_INVITE_STORE,
  inviteStoreReq,
});

export const submitRating = ratingReq => ({
  type: actions.SUBMIT_RATING,
  ratingReq,
});

export const fetchNotification = topic => ({
  type: actions.FETCH_NOTIFICATION,
  topic,
});

export const saveNotification = notifications => ({
  type: actions.SAVE_NOTIFICATION,
  notifications,
});

export const fetchRating = orderId => ({
  type: actions.FETCH_RATING,
  orderId,
});

export const saveRating = rating => ({
  type: actions.SAVE_RATING,
  rating,
});

export const fetchUserRazorPayPayments = () => ({
  type: actions.FETCH_USER_RAZORPAY_PAYMENTS,
});

export const saveUserRazorPayPayments = userRazorPayPayments => ({
  type: actions.SAVE_USER_RAZORPAY_PAYMENTS,
  userRazorPayPayments,
});

export const showAlertToast = alertData => ({
  type: actions.ERROR_HANDLE,
  alertData,
});

export const fetchRazorPayOrderByOrderId = (
  orderIdForPayment,
  orderIdForOrder,
) => ({
  type: actions.FETCH_RAZOR_PAY_ORDER,
  orderIdForPayment,
  orderIdForOrder,
});

export const saveRazorPayOrder = order => ({
  type: actions.SAVE_RAZOR_PAY_ORDER,
  order,
});

export const saveRazorPayPayment = payment => ({
  type: actions.SAVE_RAZOR_PAY_PAYMENT,
  payment,
});

export const fetchUserCarts = () => ({
  type: actions.FETCH_USER_CARTS,
});

export const saveUserCarts = userCarts => ({
  type: actions.SAVE_USER_CARTS,
  userCarts,
});
