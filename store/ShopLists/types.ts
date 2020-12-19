import { ShopItem } from '../ShopItems/types';

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const CLEAR_ALL_LISTS = 'CLEAR_ALL_LISTS';

export interface ShopList {
    id: String;
    name: String;
    list: Array<ShopItem>;
}
export interface InitialState {
    shopLists: Array<ShopList>
}