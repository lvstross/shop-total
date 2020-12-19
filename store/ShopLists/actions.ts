import {
    ADD_LIST,
    REMOVE_LIST,
    UPDATE_LIST,
    CLEAR_ALL_LISTS,
    ShopList
} from './types';

export const addList = (payload: ShopList) => {
    return {
        type: ADD_LIST,
        payload,
    };
};
export const removeList = (payload: String) => {
    return {
       type: REMOVE_LIST,
       payload,
    };
};
export const updateList = (payload: ShopList) => {
    return {
        type: UPDATE_LIST,
        payload,
    };
}
export const clearAllLists = () => ({ type: CLEAR_ALL_LISTS });