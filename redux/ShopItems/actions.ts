import {
    ADD_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
    GET_TOTAL,
    ShopItem,
} from './types';

export const addItem = (payload: ShopItem) => {
    return {
        type: ADD_ITEM,
        payload,
    };
};
export const removeItem = (payload: String) => {
    return {
       type: REMOVE_ITEM,
       payload,
    };
};
export const updateItem = (payload: ShopItem) => {
    return {
        type: UPDATE_ITEM,
        payload,
    };
}
export const getTotal = () => {
    return {
        type: GET_TOTAL,
    };
}