import * as mutations from '../graphql/mutations';
import {API} from 'aws-amplify';
import axios from 'axios';
import {firebase} from '@react-native-firebase/auth';
import Config from 'react-native-config';
import crashlytics from '@react-native-firebase/crashlytics';
// import {WalletApiUrl} from './constants';

export const sendNotificationToTopic = async (title, body, topic, metaData) => {
  const authToken = await firebase.auth().currentUser.getIdToken();
  topic = topic.replace('+', '_');

  let notification = {
    title,
    body,
    topic,
    isRead: false,
    metaData: JSON.stringify(metaData),
  };

  const notificationCheck = await axios.post(
    Config.NOTIFICATION_API,
    notification,
    {
      headers: {
        Authorization: authToken,
      },
    },
  );

  console.log('notificationCheck', notificationCheck);

  await API.graphql({
    query: mutations.createNotification,
    variables: {input: notification},
  })
    .then(resp => resp.data.createNotification)
    .catch(error => {
      crashlytics()?.recordError(error);
      console.log('createNotification.error', error);
      return null;
    });
};

// export const walletRequest = async () => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       userID: 'BLOCALEVIG',
//       password: 'bloc@!2@22ev!g',
//       mfsapiin: {
//         ReqService: 'WAL_API_WALLETSCREEN',
//         mobileNumber: '8639833477',
//       },
//     },
//   };

//   console.log('config', config);

//   const walletCheck = await axios
//     .post(
//       'https://app.blocal.co.in:5959/mfmbs/mbintf/ina/processwalletapirequest.jsp',
//       {
//         mfsapiin: {
//           ReqService: 'WAL_API_WALLETSCREEN',
//           mobileNumber: '8639833477',
//         },
//       },
//       config,
//     )
//     .then(resp => console.log('walletRequest.resp', resp))
//     .catch(error => console.log('walletRequest.err', error));
//   console.log('walletCheck', walletCheck);
// };
