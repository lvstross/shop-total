export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const GET_TOTAL = 'GET_TOTAL';

export interface ShopItem {
    id: String;
    name?: String;
    price?: String | Number;
}
export interface InitialState {
    shopItems: Array<ShopItem>;
    shopTotal: Number;
}