import { combineReducers } from 'redux';
import ShopItemsReducer from './ShopItems/reducers';
import ConfirmModalReducer from './ConfirmModal/reducers';

const rootReducer = combineReducers({
    shopItems: ShopItemsReducer,
    confirmModal: ConfirmModalReducer,
});
export default rootReducer;