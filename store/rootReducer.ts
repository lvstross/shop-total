import { combineReducers } from 'redux';
import reducer from './ShopItems/reducers';

const rootReducer = combineReducers({
    shopItems: reducer,
});
export default rootReducer;