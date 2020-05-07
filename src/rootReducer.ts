import {combineReducers} from 'redux';
import authentication from './redux/reducers/auth.reducer';
import error from './redux/reducers/error.reducer';
import markets from './redux/reducers/markets.reducer';
import market from './redux/reducers/market.reducer';

export default combineReducers({
  authentication,
  error,
  markets,
  market,
});
