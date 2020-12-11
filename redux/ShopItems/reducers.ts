import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, InitialState } from './types';

const INITIAL_STATE: InitialState = {
    shopItems: [],
    shopTotal: 0,
};

const reducer = (state = INITIAL_STATE, action: any) => {
    console.log('state: ', state);
    console.log('action', action);
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
         default: return state;
    }
};

export default reducer;