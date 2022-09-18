import analytics from '@react-native-firebase/analytics';
export const analytic = () => ({
  trackEvent: (event, data = {}) => {
    console.log('trackEvent', event, data);
    try {
      analytics().logEvent(event, data);
    } catch (error) {
      console.log('trackEvent.error', event, error);
    }
  },
});
