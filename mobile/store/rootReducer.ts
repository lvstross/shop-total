import { combineReducers } from 'redux';
import ShopItemsReducer from './ShopItems/reducers';
import ShopListsReducer from './ShopLists/reducers';
import ConfirmModalReducer from './ConfirmModal/reducers';

const rootReducer = combineReducers({
    shopItems: ShopItemsReducer,
    shopLists: ShopListsReducer,
    confirmModal: ConfirmModalReducer,
});
export default rootReducer;