export const actions = {
  FETCH_USER_ADDRESS: 'FETCH_USER_ADDRESS',
  SAVE_USER_ADDRESS: 'SAVE_USER_ADDRESS',
  SET_ALERT: 'SET_ALERT',
};

export const testFunction = () => ({
  type: actions.SET_ALERT,
});

export const fetchUserAddress = () => ({
  type: actions.FETCH_USER_ADDRESS,
});

export const saveUserAddress = address => ({
  type: actions.SAVE_USER_ADDRESS,
  address,
});
