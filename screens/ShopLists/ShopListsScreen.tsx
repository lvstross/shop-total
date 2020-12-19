import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getShopLists } from 'store/ShopLists/selectors';
import { ShopList } from 'store/ShopLists/types';
import { Text, ScrollView } from 'components/Themed';
import { GridView, GridOuterItem, GridInnerItem } from 'components/UI/GridView';


export default function ShopListsScreen({ navigation }: any) {
    const lists = useSelector(getShopLists);
    return(
        <ScrollView>
            <GridView>
                {lists.map((list: ShopList) => (
                    <GridOuterItem key={list.id}>
                        <TouchableOpacity onPress={() => navigation.navigate('ShopListModal')}>
                            <GridInnerItem>
                                <Text>List with {list.list.length}</Text>
                            </GridInnerItem>
                        </TouchableOpacity>
                    </GridOuterItem>
                ))}
            </GridView>
        </ScrollView>
    );
}