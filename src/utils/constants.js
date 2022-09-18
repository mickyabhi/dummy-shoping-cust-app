export const IMAGE_BASE_URL =
  'https://blocalappstorage.s3.ap-south-1.amazonaws.com/';
export const PRODUCT_IMAGE_BASE_URL = IMAGE_BASE_URL + 'product_images/';
export const Img =
  'https://blocalappstorage.s3.ap-south-1.amazonaws.com/store_Images/';
const categoryImageMap = {
  food: IMAGE_BASE_URL + 'app/Food%403x.png',
  chicken: IMAGE_BASE_URL + 'app/Chicken%403x.png',
  fish: IMAGE_BASE_URL + 'app/Fish%403x.png',
  sea_foods: IMAGE_BASE_URL + 'app/Fish%403x.png',
  poultry: IMAGE_BASE_URL + 'app/Chicken%403x.png',
  fruits: IMAGE_BASE_URL + 'app/Fruits%403x.png',
  meat_poultry_and_seafood:
    IMAGE_BASE_URL + 'app/Meat_Poultry_And_Seafood%403x.png',
  poultry_meat_and_seafood:
    IMAGE_BASE_URL + 'app/Meat_Poultry_And_Seafood%403x.png',
  mutton: IMAGE_BASE_URL + 'app/Mutton%403x.png',
  non_foods: IMAGE_BASE_URL + 'app/Nonfood%403x.png',
  others_or_masala_powders:
    IMAGE_BASE_URL + 'app/Others_or_Masala_Powders%403x.png',
  pharmacy: IMAGE_BASE_URL + 'app/Pharmacy%403x.png',
  vegetables: IMAGE_BASE_URL + 'app/Vegetables%403x.png',
  grocery: IMAGE_BASE_URL + 'app/Grocery%403x.png',
  fruits_and_vegetables: IMAGE_BASE_URL + 'app/Fruits_And_Vegetables%403x.png',
  all: IMAGE_BASE_URL + 'app/All+Category%403x.png',
  flowers: IMAGE_BASE_URL + 'app/Flowers%403x.png',
  foods: IMAGE_BASE_URL + 'app/FMCG+Food%403x.png',
  staples: IMAGE_BASE_URL + 'app/Staples%403x.png',
  chicken_and_poultry: IMAGE_BASE_URL + 'app/Meat_Poultry_And_Seafood%403x.png',
};

export const getCategoryImage = category => {
  category = category?.replace('&', 'and');
  category = category?.replace(',', '');
  category = category?.split(' ').join('_');
  category = category?.toLowerCase();
  return categoryImageMap[category] || null;
};

const DELIVERY_SLOT_OPTIONS = [
  {
    title: 'Today',
    data: [
      '7:00 AM - 9:00 AM',
      '9:00 AM - 11:00 AM',
      '11:00 AM - 12:00 PM',
      '12:00 PM - 2:00 PM',
      '2:00 PM - 4:00 PM',
      '4:00 PM - 6:00 PM',
      '6:00 PM - 8:00 PM',
      '8:00 PM - 9:00 PM',
    ],
  },
  {
    title: 'Tomorrow',
    data: [
      '7:00 AM - 9:00 AM',
      '9:00 AM - 11:00 AM',
      '11:00 AM - 1:00 PM',
      '1:00 PM - 3:00 PM',
      '3:00 PM - 5:00 PM',
      '5:00 PM - 7:00 PM',
      '7:00 PM - 9:00 PM',
    ],
  },
];

export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getValidDeliverySlot = () => {
  let currentHour = new Date().getHours();
  let validTimeSlots = DELIVERY_SLOT_OPTIONS.filter(
    timeSlot => timeSlot.title != 'Today',
  );
  let todayTimeSlots = DELIVERY_SLOT_OPTIONS.filter(
    timeSlot => timeSlot.title == 'Today',
  )[0].data;
  currentHour++;
  if (currentHour >= 12) {
    todayTimeSlots = todayTimeSlots.filter(slot => !slot.includes('AM'));
    todayTimeSlots = todayTimeSlots.filter(
      slot =>
        parseInt(slot.split(' - ')[1].replace('PM', '')) > currentHour - 12,
    );
  } else {
    todayTimeSlots = todayTimeSlots.filter(
      slot =>
        slot.includes('PM') ||
        parseInt(slot.split(' - ')[1].replace('AM', '')) > currentHour,
    );
  }

  if (todayTimeSlots.length)
    validTimeSlots.push({title: 'Today', data: todayTimeSlots});

  validTimeSlots = validTimeSlots?.sort((a, b) =>
    a.title.localeCompare(b.title),
  );
  return validTimeSlots;
};

export const OrderStatus = {
  OPEN: 'OPEN',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  DECLINED: 'DECLINED',
  DELIVERED: 'DELIVERED',
  DELIVERY_IN_PROGRESS: 'DELIVERY_IN_PROGRESS',
};

export const OrderStatusMapping = {
  OPEN: 'Ordered',
  CONFIRMED: 'Ordered',
  CANCELLED: 'Cancelled',
  DECLINED: 'Declined',
  DELIVERED: 'Delivered',
  DELIVERY_IN_PROGRESS: 'Delivery In Progress',
};

export const MessageType = {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
};

export const PaymentType = {
  COD: 'COD',
  ONLINE: 'Prepaid',
};

export const sortCategory = categories => {
  const sortedCategories = [];
  categories?.forEach(category => {
    if (category == 'All') sortedCategories[0] = 'All';
    else if (category == 'Grocery') sortedCategories[1] = 'Grocery';
    else if (category == 'Poultry, Meat & Seafood')
      sortedCategories[2] = 'Poultry, Meat & Seafood';
    else if (category == 'Fruits & Vegetables')
      sortedCategories[3] = 'Fruits & Vegetables';
    else if (category == 'Pharmacy') sortedCategories[4] = 'Pharmacy';
  });
  return sortedCategories;
};

export const ErrorMessage = {
  NETWORK: 'auth/network-request-failed',
  INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
  OTP_REQUEST: 'auth/too-many-requests',
  GRAPHQL_NETWORK_ERROR: 'Network Error',
};

export const AlertMessage = {
  NETWORK_CONNECTION_MESSAGE: 'Network Connection Failed!',
  INVALID_PHONE_NUMBER_MESSAGE: 'Please Enter Valid Phone Number',
  OTP_REQUEST_MESSAGE:
    'We have blocked all requests from this device due to unusual activity',
  SOMETHING_WENT_WRONG: 'Oops! Something went wrong!',
};

export const WalletType = {
  RECEIVED: 'Received',
  PAID: 'Paid',
  UNUSED: 'Unused',
  REWARDS: 'Rewards',
};

// export const WalletApiUrl =
//   'https://app.blocal.co.in:5959/mfmbs/mbintf/ina/processwalletapirequest.jsp';
