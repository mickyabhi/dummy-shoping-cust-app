import {combineReducers} from 'redux';
import appReducer from '../screens/AppStore/reducer';
const rootReducer = combineReducers({
  appReducer,
});
export default rootReducer;
