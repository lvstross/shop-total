import { combineReducers } from 'redux';
import reducer from './ShopItems/reducers';

const rootReducer = combineReducers({
    counter: reducer,
});
export default rootReducer;