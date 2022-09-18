import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';
import backIcon from '../../../assets/images/BackIcon.png';
import OrderDetailCard from '../../components/OrderDetailCard';
import TableHeader from '../../components/TableHeader';
import OrderItemCard from '../../components/OrderItemCard';
import * as queries from '../../graphql/queries';
import API from '@aws-amplify/api';
import {formatDateString} from '../../utils/common.utils';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import SummaryTable from '../../components/SummaryTable';
import {showLoading} from '../../screens/AppStore/actions';
import {useDispatch} from 'react-redux';
import {analytic} from '../../utils/analytics';
import {
  OrderStatus,
  OrderStatusMapping,
  PaymentType,
} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';

const OrdersDetailScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [order, setOrder] = useState(props?.route?.params?.order);
  const [notificationOrderId] = useState(props?.route?.params?.orderId);
  const [orderCartItems, setOrderCartItems] = useState(null);
  const [storeImage, setStoreImage] = useState([]);
  const [deliveryCharges, setDeliveryCharges] = useState(null);

  const [merchantContactNumber] = useState(
    order?.store?.primaryNumber.slice(-10),
  );
  console.log('order', order);
  const [summaryData, setSummaryData] = useState({
    totalFulfillmentPercent: '',
    originalCartValue: '',
    totalQuantity: null,
    totalPricePerUnit: null,
    totalOrderedQty: null,
    totalOrderedQtyValue: '',
    totalFulfillmentValuePercent: '',
    creditAmount: null,
  });

  const loadStoreImage = async id => {
    const storeImg = await API.graphql({
      query: queries.imagesByStoreId,
      variables: {storeId: id},
    })
      .then(resp => resp?.data?.imagesByStoreId?.items)
      .catch(error => {
        console.log('StoreImage.error: ', error);
        crashlytics()?.recordError(error);
        return null;
      });
    setStoreImage(storeImg);
  };
  const loadOrder = async orderId => {
    const order = await API.graphql({
      query: queries.getOrder,
      variables: {id: orderId},
    }).then(resp => resp.data.getOrder);
    console.log('loadOrder', order);
    loadStoreCartItems(order.cartId);
    loadStoreImage(order.storeId);
    setOrder(order);
  };
  const loadStoreCartItems = async cartId => {
    dispatch(showLoading(true));
    let cartsItems = await API.graphql({
      query: queries.cartsItemsByCartId,
      variables: {cartId: cartId, limit: 10000},
    }).then(resp => resp?.data?.cartsItemsByCartId?.items);

    setOrderCartItems(cartsItems);
    dispatch(showLoading(false));

    let originalCartValue = 0;
    let totalQuantity = 0;
    let totalPricePerUnit = 0;
    let totalOrderedQuantity = 0;
    let totalOrderQuantityValue = 0;
    cartsItems?.forEach(cartItem => {
      if (cartItem?.storeProduct?.sellingPrice)
        originalCartValue += cartItem.availability
          ? cartItem.storeProduct.sellingPrice * cartItem.quantity
          : 0;
      totalQuantity += cartItem.availability ? cartItem.quantity : 0;
      totalPricePerUnit += cartItem.storeProduct.sellingPrice;
      totalOrderedQuantity += cartItem.orderedQuantity;
      totalOrderQuantityValue +=
        cartItem.storeProduct.sellingPrice * cartItem.orderedQuantity;
      setDeliveryCharges(cartItem?.cart?.deliveryCharges);
    });

    const totalFulfillmentPercent =
      (totalQuantity / totalOrderedQuantity) * 100;
    const totalFulfillmentValuePercent =
      (originalCartValue / totalOrderQuantityValue) * 100;
    const creditAmount = totalOrderQuantityValue - originalCartValue;
    setSummaryData({
      totalFulfillmentPercent: totalFulfillmentPercent?.toFixed(),
      originalCartValue: originalCartValue?.toFixed(2),
      totalQuantity: totalQuantity,
      totalPricePerUnit: totalPricePerUnit,
      totalOrderedQty: totalOrderedQuantity,
      totalOrderedQtyValue: totalOrderQuantityValue?.toFixed(2),
      totalFulfillmentValuePercent: totalFulfillmentValuePercent?.toFixed(),
      creditAmount: creditAmount?.toFixed(2),
    });
  };

  useEffect(() => {
    if (notificationOrderId != null) {
      loadOrder(notificationOrderId);
    } else {
      loadStoreCartItems(order?.cartId);
      loadStoreImage(order?.storeId);
    }
  }, [props]);

  return (
    <View style={styles.ordersDetailView}>
      <Header
        backNavigationIcon={backIcon}
        headerTitle="My Orders"
        onPress={() => {
          analytic().trackEvent('OrderDetailScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={styles.ordersLowerDetailView}>
          {order && (
            <OrderDetailCard
              order={order}
              storeName={order?.store?.name}
              status={OrderStatusMapping[order?.orderStatus]}
              city={order?.store?.address}
              phoneNumber={merchantContactNumber}
              date={formatDateString(order?.createdAt)}
              orderedQty={summaryData?.totalOrderedQty}
              fulfillment={summaryData?.totalQuantity}
              storeImage={storeImage}
            />
          )}
          {order?.orderStatus == OrderStatus.DECLINED && (
            <>
              <View style={styles.itemListMainView}>
                <TableHeader
                  status={order?.orderStatus}
                  item="Item"
                  pricePerUnit="Price Per Unit"
                  orderedQuantity="Quantity"
                  totalOrder="Total"
                />

                <View style={styles.orderItemCardView}>
                  {orderCartItems?.map(item => (
                    <OrderItemCard
                      orderStatus={order?.orderStatus}
                      itemPrice={item?.storeProduct?.sellingPrice}
                      orderedQty={item?.orderedQuantity}
                      productId={item?.storeProduct?.productId}
                      totalOrder={
                        item?.storeProduct?.sellingPrice * item?.orderedQuantity
                      }
                    />
                  ))}
                </View>
              </View>
              <View style={styles.totalSectionView}>
                <OrderItemCard
                  orderStatus={order?.orderStatus}
                  itemName="TOTAL"
                  quantity={summaryData?.totalOrderedQty}
                  total={summaryData?.totalOrderedQtyValue}
                />
              </View>
            </>
          )}
          {order?.orderStatus == OrderStatus.CANCELLED && (
            <>
              <View style={styles.itemListMainView}>
                <TableHeader
                  status={order?.orderStatus}
                  item="Item"
                  pricePerUnit="Price Per Unit"
                  orderedQuantity="Quantity"
                  totalOrder="Total"
                />

                <View style={styles.orderItemCardView}>
                  {orderCartItems?.map(item => (
                    <OrderItemCard
                      orderStatus={order?.orderStatus}
                      itemPrice={item?.storeProduct?.sellingPrice}
                      orderedQty={item?.orderedQuantity}
                      productId={item?.storeProduct?.productId}
                      totalOrder={
                        item?.storeProduct?.sellingPrice * item?.orderedQuantity
                      }
                    />
                  ))}
                </View>
              </View>
              <View style={styles.totalSectionView}>
                <OrderItemCard
                  orderStatus={order?.orderStatus}
                  itemName="TOTAL"
                  quantity={summaryData?.totalOrderedQty}
                  total={summaryData?.totalOrderedQtyValue}
                />
              </View>
            </>
          )}
          {order?.orderStatus === OrderStatus.CONFIRMED && (
            <>
              <View style={styles.itemListMainView}>
                <TableHeader
                  status={order?.orderStatus}
                  item="Item"
                  pricePerUnit="Price Per Unit"
                  orderedQuantity="Quantity"
                  totalOrder="Total"
                />

                <View style={styles.orderItemCardView}>
                  {orderCartItems?.map(item => (
                    <OrderItemCard
                      item={item}
                      orderStatus={order?.orderStatus}
                      itemPrice={item?.storeProduct?.sellingPrice}
                      orderedQty={item?.orderedQuantity}
                      productId={item?.storeProduct?.productId}
                      totalOrder={
                        item?.storeProduct?.sellingPrice * item?.orderedQuantity
                      }
                    />
                  ))}
                </View>
              </View>

              <View style={styles.totalSectionView}>
                <OrderItemCard
                  orderStatus={order?.orderStatus}
                  itemName="TOTAL"
                  quantity={summaryData?.totalOrderedQty}
                  total={summaryData?.totalOrderedQtyValue}
                />
              </View>
            </>
          )}
          {order?.orderStatus === OrderStatus.OPEN && (
            <>
              <View style={styles.itemListMainView}>
                <TableHeader
                  status={order?.orderStatus}
                  item="Item"
                  pricePerUnit="Price Per Unit"
                  orderedQuantity="Quantity"
                  totalOrder="Total"
                />

                <View style={styles.orderItemCardView}>
                  {orderCartItems?.map(item => (
                    <OrderItemCard
                      orderStatus={order?.orderStatus}
                      itemPrice={item?.storeProduct?.sellingPrice}
                      orderedQty={item?.orderedQuantity}
                      productId={item?.storeProduct?.productId}
                      totalOrder={
                        item?.storeProduct?.sellingPrice * item?.quantity
                      }
                    />
                  ))}
                </View>
              </View>
              <View style={styles.totalSectionView}>
                <OrderItemCard
                  orderStatus={order?.orderStatus}
                  itemName="TOTAL"
                  quantity={summaryData?.totalOrderedQty}
                  total={summaryData?.originalCartValue}
                />
              </View>
            </>
          )}
          {order?.orderStatus === OrderStatus.DELIVERY_IN_PROGRESS && (
            <>
              <View style={styles.itemListMainView}>
                <TableHeader
                  status={order?.orderStatus}
                  item="Item"
                  priceUnit="Price Per Unit"
                  availability="Availability"
                  quantity="Quantity"
                  total="Total"
                />

                <View style={styles.orderItemCardView}>
                  {orderCartItems?.map(item => (
                    <OrderItemCard
                      price={item?.storeProduct?.sellingPrice}
                      quantity={item?.quantity}
                      productId={item?.storeProduct?.productId}
                      total={item?.storeProduct?.sellingPrice * item?.quantity}
                      availability={item?.availability}
                      orderStatus={order?.orderStatus}
                    />
                  ))}
                </View>
              </View>

              <View style={styles.tableTopView}>
                <SummaryTable summaryData={summaryData} />
              </View>
              {summaryData?.creditAmount != 0 &&
                order?.paymentType != PaymentType.COD && (
                  <View style={styles.noteView}>
                    <Text allowFontScaling={false} style={styles.noteText}>
                      NOTE: {summaryData?.creditAmount} will be credited to your
                      mode of payment within 48 hours.
                    </Text>
                  </View>
                )}

              {order?.paymentType == PaymentType.COD && (
                <View style={styles.noteView}>
                  <Text allowFontScaling={false} style={styles.noteText}>
                    NOTE: Amount payable at the time of delivery is INR Rs.
                    {deliveryCharges
                      ? Number(summaryData?.originalCartValue) +
                        Number(deliveryCharges)
                      : summaryData?.originalCartValue}
                  </Text>
                </View>
              )}
            </>
          )}
          {order?.orderStatus === OrderStatus.DELIVERED && (
            <>
              <View style={styles.itemListMainView}>
                <TableHeader
                  status={order?.orderStatus}
                  item="Item"
                  deliveredPrice="Price Per Unit"
                  orderedQty="Ordered Quantity"
                  deliveredQty="Delivered Quantity"
                  deliveredTotal="Total"
                />

                <View style={styles.orderItemCardView}>
                  {orderCartItems &&
                    orderCartItems.map(item => (
                      <OrderItemCard
                        orderStatus={order?.orderStatus}
                        price={item?.storeProduct?.sellingPrice}
                        orderedQty={item?.orderedQuantity}
                        quantity={item?.availability ? item?.quantity : 0}
                        total={
                          item?.availability
                            ? item?.storeProduct?.sellingPrice * item?.quantity
                            : 0
                        }
                        productId={item?.storeProduct?.productId}
                        availability={item?.availability}
                      />
                    ))}
                </View>
              </View>
              <View style={styles.tableTopView}>
                <SummaryTable summaryData={summaryData} />
              </View>
              {summaryData?.creditAmount !== 0 &&
                order?.paymentType != PaymentType.COD && (
                  <View style={styles.noteView}>
                    <Text allowFontScaling={false} style={styles.noteText}>
                      NOTE: {summaryData?.creditAmount} will be credited to your
                      mode of payment within 48 hours.
                    </Text>
                  </View>
                )}

              {order?.paymentType == PaymentType.COD && (
                <View style={styles.noteView}>
                  <Text allowFontScaling={false} style={styles.noteText}>
                    NOTE: Amount payable at the time of delivery is INR Rs.
                    {deliveryCharges
                      ? Number(summaryData?.originalCartValue) +
                        Number(deliveryCharges)
                      : summaryData?.originalCartValue}
                  </Text>
                </View>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrdersDetailScreen;
