import React from 'react';
import {Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {showAlertToast} from '../../screens/AppStore/actions';

const SnackBar = props => {
  const dispatch = useDispatch();
  const dismissSnackBar = () => dispatch(showAlertToast(null));

  return (
    <Snackbar
      visible={true}
      onDismiss={() => dismissSnackBar()}
      action={{
        label: `${props?.actionButtonTitle || 'Okay'}`,
        onPress: () => dismissSnackBar(),
      }}>
      {props?.alertMessage}
    </Snackbar>
  );
};

export default SnackBar;
