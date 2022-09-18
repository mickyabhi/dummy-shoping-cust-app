import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, FlatList, Keyboard} from 'react-native';
import Header from '../../components/Header';
import backIcon from '../../../assets/images/BackIcon.png';
import Input from '../../components/InputText';
import {scaledValue} from '../../utils/design.utils';
import cameraIcon from '../../../assets/images/camera_icon.png';
import {TextInput, TouchableRipple} from 'react-native-paper';
import rightArrowIcon from '../../../assets/images/right-arrow.png';
import Message from '../../components/Message';
import * as subscriptions from '../../graphql/subscriptions';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {analytic} from '../../utils/analytics';
import {API} from 'aws-amplify';
import {
  getItemFromAsyncStorage,
  uploadImageInS3,
} from '../../utils/storage.utils';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {showAlertToast, fetchMessage, showLoading} from '../AppStore/actions';
import {useNavigation} from '@react-navigation/native';
import ChooseImageModal from '../../components/ChooseImageModal';
import ImagePicker from 'react-native-image-crop-picker';
import ChatImageModal from './Component/ChatImageModal';
import {AlertMessage, MessageType} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';
import {sendNotificationToTopic} from '../../utils/services';

const ChatScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const flatListRef = useRef();
  const [message, setMessage] = useState('');
  const [order] = useState(props?.route?.params?.order);
  const [storeImage] = useState(props?.route?.params?.storeImg);
  const [conversationId, setConversationId] = useState(null);
  const user = useSelector(state => state?.userData);
  const chat = useSelector(state => state?.saveMessage);
  const [imageSelectModal, setImageSelectModal] = useState(false);
  const [chatImageModal, setChatImageModal] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const loadConversation = async () => {
    const currentUserId = await getItemFromAsyncStorage('current_user_id');
    if (order?.storeId != null && currentUserId != null) {
      const conversationId = await API.graphql({
        query: queries?.conversationsByUserId,
        variables: {
          filter: {storeId: {eq: order?.storeId}},
          userId: currentUserId,
          limit: 10000,
        },
      })
        .then(resp => resp?.data?.conversationsByUserId?.items[0]?.id)
        .catch(error => {
          crashlytics()?.recordError(error);
          dispatch(showLoading(false));
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
        });
      setConversationId(conversationId);
      console.log('conversationId', conversationId);
    }
  };

  const sendMessage = async () => {
    analytic().trackEvent('ChatScreen', {
      CTA: 'messageSent',
    });
    Keyboard.dismiss();
    setMessage('');
    const currentUserId = await getItemFromAsyncStorage('current_user_id');
    const messageObject = {
      userId: currentUserId,
      storeId: props?.route?.params?.storeId,
      senderId: currentUserId,
      conversationId: conversationId,
      message: message,
      type: message.includes('.jpg') ? MessageType.IMAGE : MessageType.TEXT,
    };

    const createMessage = await API.graphql({
      query: mutations.createMessage,
      variables: {input: messageObject},
    })
      .then(resp => resp.data.createMessage)
      .catch(error => {
        console.log('createMessage.error', error);
        crashlytics()?.recordError(error);
        dispatch(showLoading(false));
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
      });
    console.log('createMessage', createMessage);
    dispatch(fetchMessage(conversationId));
    sendNotificationToTopic(
      'Blocal Message',
      messageObject?.message,
      'STR_' + props?.route?.params?.storeId,
      {
        userId: currentUserId,
        shortId: order?.shortId || props?.route?.params?.shortId,
        userName: user?.firstName + ' ' + user?.lastName,
      },
    );
  };

  useEffect(() => {
    loadConversation();
  }, [order]);

  useEffect(() => {
    setConversationId(props?.route?.params?.conversationId);
  }, []);

  useEffect(() => {
    dispatch(fetchMessage(conversationId));

    const subscription = API.graphql({
      query: subscriptions.onCreateMessageByConversationId,
      variables: {conversationId: conversationId},
    }).subscribe({
      next: ({value}) => {
        dispatch(fetchMessage(conversationId));
      },
      error: error => {
        dispatch(fetchMessage(conversationId));
        console.log('subscribe.error', JSON.stringify(error));
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [conversationId]);

  return (
    <>
      <View style={styles.chatScreenView}>
        <Header
          backNavigationIcon={backIcon}
          headerTitle={order?.store?.name || props?.route?.params?.storeName}
          avatarImage={
            storeImage?.imagePath || props?.route?.params?.storeImage
          }
          onPress={() => {
            analytic().trackEvent('CartStore', {
              CTA: 'backIcon',
            });
            navigation.goBack();
          }}
        />
        <View style={styles.mainView}>
          <View style={styles.orderIdView}>
            <Text allowFontScaling={false} style={styles.orderIdText}>
              Order ID: {order?.shortId || props?.route?.params?.shortId}
            </Text>
          </View>
          <View style={styles.chatScreenMainView}>
            <FlatList
              ref={flatListRef}
              showsVerticalScrollIndicator={false}
              onContentSizeChange={() => flatListRef.current.scrollToEnd()}
              data={chat?.sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
              )}
              renderItem={({item}) => (
                <Message
                  message={item?.message}
                  senderId={item?.senderId}
                  userId={item.userId}
                  label={order?.store?.name}
                  firstName={user?.firstName}
                  lastName={user?.lastName}
                  userImage={user?.userImage?.imagePath}
                  type={item.type}
                  storeImage={
                    storeImage?.imagePath || props?.route?.params?.storeImage
                  }
                  onPress={() => {
                    setChatImageModal(true);
                    setPreviewImage(item.message);
                  }}
                />
              )}
            />
            <View style={styles.inputMainView}>
              <Input
                style={styles.inputText}
                borderRadius={scaledValue(8)}
                underlineColor="#e8e8e8"
                value={message}
                onChangeText={value => setMessage(value)}
                label={'Type a message'}
                right={
                  <TextInput.Icon
                    color="gray"
                    name={cameraIcon}
                    size={scaledValue(51.17)}
                    onPress={() => {
                      setImageSelectModal(true);
                      setPreviewImage('');
                      Keyboard.dismiss();
                    }}
                  />
                }
              />
              <TouchableRipple
                style={styles.iconView(message)}
                rippleColor="#F5672E"
                disabled={message != '' ? false : true}
                onPress={sendMessage}>
                <Image source={rightArrowIcon} style={styles.rightArrowIcon} />
              </TouchableRipple>
            </View>
          </View>
        </View>
        <ChooseImageModal
          visible={imageSelectModal}
          onDismiss={() => setImageSelectModal(false)}
          selectImage={() => {
            dispatch(showLoading(true));
            ImagePicker.openPicker({
              width: 300,
              height: 300,
            }).then(async image => {
              setMessage(await uploadImageInS3(image.path));
              setChatImageModal(true);
              dispatch(showLoading(false));
            });
            setImageSelectModal(false);
          }}
          takeImage={() => {
            dispatch(showLoading(true));
            ImagePicker.openCamera({
              width: 300,
              height: 300,
            }).then(async image => {
              setMessage(await uploadImageInS3(image.path));
              setChatImageModal(true);
              dispatch(showLoading(false));
            });
            setImageSelectModal(false);
          }}
        />
      </View>
      <ChatImageModal
        visible={chatImageModal}
        onDismiss={() => setChatImageModal(false)}
        chatImage={message}
        sendMessage={sendMessage}
        previewImage={previewImage}
        onPress={() => {
          setChatImageModal(false);
          setMessage('');
          dispatch(showLoading(false));
        }}
      />
    </>
  );
};
export default ChatScreen;
