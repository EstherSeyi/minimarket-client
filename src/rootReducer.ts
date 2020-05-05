import {combineReducers} from 'redux';
import authentication from './redux/reducers/auth.reducer';
import error from './redux/reducers/error.reducer';

export default combineReducers({
  authentication,
  error,
});
