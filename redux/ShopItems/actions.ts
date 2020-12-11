import {
    ADD_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
    ShopItem,
    RemoveItemPayload,
} from './types';

export const addItem = (payload: ShopItem) => {
    return {
        type: ADD_ITEM,
        payload,
    };
};
export const removeItem = (payload: RemoveItemPayload) => {
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