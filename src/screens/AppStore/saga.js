import {takeEvery, put} from 'redux-saga/effects';
import {
  actions,
  saveUserData,
  saveStoresList,
  saveStoreProducts,
  saveCategories,
  saveStoresByCategories,
  saveUserOrders,
  saveMessage,
  saveCurrentCarts,
  saveNotification,
  saveUserRazorPayPayments,
  showLoading,
  saveRating,
  showAlertToast,
  saveRazorPayOrder,
  saveRazorPayPayment,
  saveUserCarts,
} from './actions';
import crashlytics from '@react-native-firebase/crashlytics';
import {
  getItemFromAsyncStorage,
  setItemInAsyncStorage,
} from '../../utils/storage.utils';
import * as queries from '../../graphql/queries';
import {API} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import {AlertMessage, ErrorMessage} from '../../utils/constants';

function* getUserData() {
  try {
    yield put(showLoading(true));
    const currentUserId = yield getItemFromAsyncStorage('current_user_id');
    const currentUser = yield API.graphql({
      query: queries.getUser,
      variables: {id: currentUserId},
    }).then(res => res.data.getUser);
    yield put(saveUserData(currentUser));

    let address = yield getItemFromAsyncStorage('selectedAddress');
    if (address == null) {
      address = currentUser?.addresses?.items[0];
      yield setItemInAsyncStorage('selectedAddress', JSON.stringify(address));
    }

    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('getUserData.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchStoreProducts({storeId}) {
  try {
    console.log('fetchStoreProducts.storeId', storeId);
    yield put(showLoading(true));
    yield put(saveStoreProducts(null));

    let storeProducts = yield API.graphql({
      query: queries.productsByStoreId,
      variables: {
        filter: {
          isInInventory: {eq: true},
          deletedAt: {attributeExists: false},
          mrp: {ne: null},
          mrp: {attributeExists: true},
        },
        storeId: storeId,
        limit: 10000,
      },
    }).then(resp => resp?.data?.productsByStoreId?.items);
    console.log('storeProducts.length', storeProducts.length);

    storeProducts = storeProducts?.sort((a, b) =>
      a?.product?.description.localeCompare(b?.product?.description),
    );

    yield put(saveStoreProducts(storeProducts));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchStoreProducts.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchStoresList() {
  try {
    yield put(showLoading(true));
    const storesList = yield API.graphql({
      query: queries.listStores,
      variables: {
        limit: 10000,
        filter: {
          latitude: {
            ne: null,
          },
          longitude: {
            ne: null,
          },
          deletedAt: {attributeExists: false},
        },
      },
    }).then(resp => resp?.data?.listStores?.items);

    console.log('fetchStoresList.storesList.length', storesList?.length);

    yield put(saveStoresList(storesList));

    const storeCategories = [
      ...new Set(storesList.map(store => store?.category)),
    ];

    yield put(saveCategories([...storeCategories, 'All']));

    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchStoresList.storesList.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchStoresByCategory({category}) {
  try {
    yield put(showLoading(true));
    const storesByCategory = yield API.graphql({
      query: queries.storeByCategory,
      variables: {category: category, limit: 10000},
    }).then(resp => resp.data.storeByCategory.items);

    console.log('.storesByCategory.length', storesByCategory.length);

    yield put(saveStoresByCategories(storesByCategory));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchStoresByCategory.saga.error', error);
    yield put(showLoading(false));
    put(
      showAlertToast({
        alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
      }),
    );
  }
}

function* fetchUserOrders() {
  const currentUserId = yield getItemFromAsyncStorage('current_user_id');
  try {
    yield put(showLoading(true));
    const userOrders = yield API.graphql({
      query: queries.ordersByUserId,
      variables: {userId: currentUserId, limit: 10000},
    }).then(resp => resp?.data?.ordersByUserId.items);

    userOrders?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    yield put(saveUserOrders(userOrders));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchUserOrders.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchChat({conversationId}) {
  console.log('conversationId.fetchMessage.saga', conversationId);
  try {
    if (conversationId != null) {
      const chat = yield API.graphql({
        query: queries.messagesByConversationId,
        variables: {conversationId: conversationId, limit: 10000},
      }).then(resp => resp.data.messagesByConversationId.items);
      yield put(saveMessage(chat));
    }
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchMessage.saga.error', error);
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchCurrentCarts() {
  try {
    yield put(showLoading(true));
    const currentUserId = yield getItemFromAsyncStorage('current_user_id');
    const carts = yield API.graphql({
      query: queries.cartsByUserId,
      variables: {
        userId: currentUserId,
        filter: {isOrderPlaced: {eq: false}},
        limit: 10000,
      },
    }).then(res => res.data.cartsByUserId.items);
    yield put(saveCurrentCarts(carts));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchCurrentCarts.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* submitInviteStore({inviteStoreReq}) {
  try {
    yield put(showLoading(true));
    yield API.graphql({
      query: mutations.createInviteStore,
      variables: {input: inviteStoreReq},
    }).then(resp => resp);
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('submitInviteStore.saga.error', error);
    yield put(showLoading(false));
    put(
      showAlertToast({
        alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
      }),
    );
  }
}

function* submitRating({ratingReq}) {
  try {
    yield put(showLoading(true));
    yield API.graphql({
      query: mutations.createOrderRating,
      variables: {input: ratingReq},
    }).then(resp => resp);
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('rating.saga.error', error);
    yield put(showLoading(false));
    put(
      showAlertToast({
        alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
      }),
    );
  }
}

function* fetchNotifications({topic}) {
  try {
    yield put(showLoading(true));
    const notifications = yield API.graphql({
      query: queries.notificationsByTopic,
      variables: {
        topic: topic,
        limit: 10000,
        filter: {title: {ne: 'Blocal Message'}},
      },
    }).then(resp => resp.data.notificationsByTopic.items);
    yield put(saveNotification(notifications));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchNotifications.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchUserRazorPayPayments() {
  try {
    yield put(showLoading(true));
    const currentUserId = yield getItemFromAsyncStorage('current_user_id');
    const userRazorPayPayments = yield API.graphql({
      query: queries.razorPayPaymentByUserId,
      variables: {userId: currentUserId, limit: 10000},
    }).then(resp => resp.data.razorPayPaymentByUserId.items);
    yield put(showLoading(false));
    yield put(saveUserRazorPayPayments(userRazorPayPayments));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchUserRazorPayPayments.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchRating({orderId}) {
  try {
    yield put(showLoading(true));
    const ratingDetail = yield API.graphql({
      query: queries.orderRatingByOrderId,
      variables: {orderId: orderId, limit: 10000},
    }).then(resp => resp.data.orderRatingByOrderId.items);
    yield put(saveRating(ratingDetail));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchRating.saga.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* fetchRazorPayOrder({orderIdForPayment, orderIdForOrder}) {
  try {
    yield put(showLoading(true));
    if (orderIdForPayment != null) {
      const razorPayPayment = yield API.graphql({
        query: queries.razorPayPaymentByOrderId,
        variables: {orderId: orderIdForPayment, limit: 10000},
      }).then(resp => resp.data.razorPayPaymentByOrderId.items[0]);
      yield put(saveRazorPayPayment(razorPayPayment));
      console.log('fetchRazorPayOrder', razorPayPayment);
    }
    if (orderIdForOrder != null) {
      const razorPayOrder = yield API.graphql({
        query: queries.razorPayOrderByOrderId,
        variables: {orderId: orderIdForOrder, limit: 10000},
      }).then(resp => resp.data.razorPayOrderByOrderId.items[0]);
      yield put(saveRazorPayOrder(razorPayOrder));
      console.log('fetchRazorPayOrder', razorPayOrder);
    }
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchRazorPayOrder.error', error);
    yield put(showLoading(false));
    dispatch(
      showAlertToast({
        alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
      }),
    );
  }
}

function* fetchUserCarts() {
  try {
    yield put(showLoading(true));
    yield put(saveUserCarts(null));
    const userId = yield getItemFromAsyncStorage('current_user_id');
    let carts = yield API.graphql({
      query: queries.cartsByUserId,
      variables: {userId, limit: 10000},
    }).then(res => res?.data?.cartsByUserId?.items);
    carts = carts?.filter(resp => resp.isOrderPlaced == false);
    console.log('fetchUserCarts.carts', carts);

    yield put(saveUserCarts(carts));
    yield put(showLoading(false));
  } catch (error) {
    crashlytics()?.recordError(error);
    console.log('fetchUserCarts.error', error);
    yield put(showLoading(false));
    if (error?.errors[0]?.message == ErrorMessage.GRAPHQL_NETWORK_ERROR) {
      yield put(
        showAlertToast({
          alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          actionButtonTitle: 'OK',
        }),
      );
    } else {
      yield put(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  }
}

function* saga() {
  yield takeEvery(actions.FETCH_USER_DATA, getUserData);
  yield takeEvery(actions.FETCH_STORE_PRODUCTS, fetchStoreProducts);
  yield takeEvery(actions.FETCH_STORES_LIST, fetchStoresList);
  yield takeEvery(actions.FETCH_STORES_BY_CATEGORY, fetchStoresByCategory);
  yield takeEvery(actions.FETCH_USER_ORDERS, fetchUserOrders);
  yield takeEvery(actions.FETCH_MESSAGE, fetchChat);
  yield takeEvery(actions.FETCH_CURRENT_CARTS, fetchCurrentCarts);
  yield takeEvery(actions.SUBMIT_INVITE_STORE, submitInviteStore);
  yield takeEvery(actions.SUBMIT_RATING, submitRating);
  yield takeEvery(actions.FETCH_NOTIFICATION, fetchNotifications);
  yield takeEvery(
    actions.FETCH_USER_RAZORPAY_PAYMENTS,
    fetchUserRazorPayPayments,
  );
  yield takeEvery(actions.FETCH_RATING, fetchRating);
  yield takeEvery(actions.FETCH_RAZOR_PAY_ORDER, fetchRazorPayOrder);
  yield takeEvery(actions.FETCH_USER_CARTS, fetchUserCarts);
}
export default saga;
