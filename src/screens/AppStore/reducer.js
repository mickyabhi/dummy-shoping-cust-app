import {actions} from './actions';

const initialState = {
  errorMessage: null,
  logOutModal: false,
  rateUsModal: false,
  userData: null,
  storeProducts: null,
  currentCarts: [],
  product: [],
  loadingState: false,
  userOrders: [],
  storesList: [],
  categories: [],
  storeByCategory: [],
  saveMessage: [],
  notifications: [],
  userRazorPayPayments: null,
  rating: null,
  alertData: null,
  razorPayOrder: null,
  razorPayPayment: null,
  userCarts: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_LOGOUT_MODAL: {
      return {
        ...state,
        logOutModal: action.logOutModal,
      };
    }

    case actions.SHOW_RATEUS_MODAL: {
      return {
        ...state,
        rateUsModal: action.rateUsModal,
      };
    }

    case actions.SAVE_USER_DATA: {
      return {
        ...state,
        userData: action.userData,
      };
    }

    case actions.SAVE_STORE_PRODUCTS: {
      return {
        ...state,
        storeProducts: action.storeProducts,
      };
    }

    case actions.SAVE_STORES_LIST: {
      return {
        ...state,
        storesList: action.storesList,
      };
    }

    case actions.SAVE_CATEGORIES: {
      return {
        ...state,
        categories: action.categories,
      };
    }

    case actions.SAVE_STORES_BY_CATEGORY: {
      return {
        ...state,
        storeByCategory: action.storeByCategory,
      };
    }

    case actions.SAVE_USER_ORDERS: {
      return {
        ...state,
        userOrders: action.userOrders,
      };
    }

    case actions.SHOW_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }

    case actions.SHOW_LOADING: {
      return {
        ...state,
        loadingState: action.loadingState,
      };
    }

    case actions.SAVE_MESSAGE: {
      return {
        ...state,
        saveMessage: action.message,
      };
    }

    case actions.SAVE_CURRENT_CARTS: {
      return {
        ...state,
        currentCarts: action.currentCarts,
      };
    }

    case actions.SUBMIT_RATING: {
      return {
        ...state,
      };
    }

    case actions.SUBMIT_INVITE_STORE: {
      return {
        ...state,
      };
    }

    case actions.SAVE_NOTIFICATION: {
      return {
        ...state,
        notifications: action.notifications,
      };
    }

    case actions.SAVE_USER_RAZORPAY_PAYMENTS: {
      return {
        ...state,
        userRazorPayPayments: action.userRazorPayPayments,
      };
    }

    case actions.SAVE_RATING: {
      return {
        ...state,
        rating: action.rating,
      };
    }

    case actions.ERROR_HANDLE: {
      return {
        ...state,
        alertData: action.alertData,
      };
    }

    case actions.SAVE_RAZOR_PAY_ORDER: {
      return {
        ...state,
        razorPayOrder: action.order,
      };
    }

    case actions.SAVE_RAZOR_PAY_PAYMENT: {
      return {
        ...state,
        razorPayPayment: action.payment,
      };
    }

    case actions.SAVE_USER_CARTS: {
      return {
        ...state,
        userCarts: action.userCarts,
      };
    }

    case actions.CLEAR_REDUCER: {
      return {
        errorMessage: null,
        logOutModal: false,
        rateUsModal: false,
        userData: null,
        storeProducts: null,
        currentCarts: [],
        product: [],
        loadingState: false,
        userOrders: [],
        storesList: [],
        categories: [],
        storeByCategory: [],
        saveMessage: [],
        notifications: [],
        userRazorPayPayments: null,
        rating: null,
        alertData: null,
        razorPayOrder: null,
        razorPayPayment: null,
        userCarts: null,
      };
    }

    default:
      return {...state};
  }
};
export default AppReducer;
