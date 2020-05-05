import {combineReducers} from 'redux';
import authentication from './redux/reducers/auth.reducer';
import error from './redux/reducers/error.reducer';
import markets from './redux/reducers/markets.reducer';

export default combineReducers({
  authentication,
  error,
  markets,
});
