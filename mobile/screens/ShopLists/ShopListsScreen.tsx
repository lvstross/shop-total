import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getShopLists } from 'shared/store/ShopLists/selectors';
import { ShopList } from 'shared/store/ShopLists/types';
import { Text, ScrollView } from 'components/Themed';
import { GridView, GridOuterItem, GridInnerItem } from 'components/UI/GridView';
import { GridItemHeader } from './styled';


export default function ShopListsScreen({ navigation }: any) {
    const lists = useSelector(getShopLists);
    return(
        <ScrollView>
            <GridView>
                {lists.map((list: ShopList) => {
                    let total = 0;
                    list.list.forEach((item: any) => {
                        const intValue = parseFloat(item.price);
                        const newTotal = total + intValue;
                        total = Number(newTotal.toFixed(2));
                    });
                    return (
                        <GridOuterItem key={list.id}>
                            <TouchableOpacity onPress={() => navigation.navigate('ShopListModal', { listId: list.id })}>
                                <GridInnerItem>
                                    <GridItemHeader>{list.name}</GridItemHeader>
                                    <Text>Total Items: {list.list.length}</Text>
                                    <Text>Total Cost: ${total.toFixed(2)}</Text>
                                </GridInnerItem>
                            </TouchableOpacity>
                        </GridOuterItem>
                    );
                })}
            </GridView>
        </ScrollView>
    );
}