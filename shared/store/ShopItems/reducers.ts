import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  GET_TOTAL,
  CLEAR_ALL_ITEMS,
  InitialState,
  ShopItem,
} from './types';

const INITIAL_STATE: InitialState = {
    shopItems: [],
    shopTotal: 0,
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
          return {
            ...state, shopItems: [...state.shopItems, action.payload],
          };
        case REMOVE_ITEM:
          const filteredItems = state.shopItems.filter(
            item => item.id != action.payload
          );
          return {
            ...state, shopItems: filteredItems,
          };
        case UPDATE_ITEM:
          const updatedItems = state.shopItems.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, ...action.payload };
            }
            return item;
          });
          return {
            ...state, shopItems: updatedItems,
          };
        case CLEAR_ALL_ITEMS:
          return {
            ...state, shopItems: [],
          };
        case GET_TOTAL:
          let total = 0;
          state.shopItems.forEach((item: ShopItem) => {
            const intValue = parseFloat(item.price as string);
            const newTotal = total + intValue;
            total = Number(newTotal.toFixed(2));
          });
          return {
            ...state, shopTotal: total,
          };
        default: return state;
    }
};

export default reducer;