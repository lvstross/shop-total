import {
  ADD_LIST,
  REMOVE_LIST,
  UPDATE_LIST,
  CLEAR_ALL_LISTS,
  InitialState,
} from './types';

const INITIAL_STATE: InitialState = {
    shopLists: [],
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ADD_LIST:
          return {
            ...state, shopLists: [...state.shopLists, action.payload],
          };
        case REMOVE_LIST:
          const filteredLists = state.shopLists.filter(
            list => list.id != action.payload
          );
          return {
            ...state, shopLists: filteredLists,
          };
        case UPDATE_LIST:
          const updatedLists = state.shopLists.map(list => {
            if (list.id === action.payload.id) {
              return { ...list, ...action.payload };
            }
            return list;
          });
          return {
            ...state, shopLists: updatedLists,
          };
        case CLEAR_ALL_LISTS:
          return {
            ...state, shopLists: [],
          };
        default: return state;
    }
};

export default reducer;