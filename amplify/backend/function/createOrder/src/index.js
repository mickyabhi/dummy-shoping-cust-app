const Razorpay = require('razorpay');

exports.handler = async event => {
  console.log('createOrder.event', event);

  let instance = new Razorpay({
    key_id: 'rzp_test_Iv1tHHSQ6G3edR',
    key_secret: 'PvTtHcoU22IE37cfVo2WSvl9',
  });

  if (process.env.ENV == 'prod')
    instance = new Razorpay({
      key_id: 'rzp_live_bepGSRFeas5M7P',
      key_secret: '5PVvgsyIkGVNJeU9niD35Q0V',
    });

  const _arguments = event.arguments;
  console.log('createOrder._arguments', _arguments);

  let amount = _arguments.amount;
  amount = parseInt(amount.toFixed(2) * 100);

  const createOrderReq = {
    amount: amount,
    currency: 'INR',
    receipt: _arguments.orderId,
    notes: {
      amount: _arguments.amount,
      orderId: _arguments.orderId,
      userId: _arguments.userId,
      storeId: _arguments.storeId,
      cartId: _arguments.cartId,
    },
  };

  console.log('createOrderReq', createOrderReq);

  try {
    const order = await instance.orders.create(createOrderReq);
    console.log('createOrder.order', order);

    if (order.error != null) {
      const error = order.error;
      return {
        statusCode: order.statusCode || 500,
        body: JSON.stringify({error, createOrderReq}),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify(order),
      };
    }
  } catch (error) {
    console.log('createOrder.error', error);
    console.log('createOrder.error', JSON.stringify(error));

    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
