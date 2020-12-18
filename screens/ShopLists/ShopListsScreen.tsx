import React from 'react';
import { Text, ScrollView } from 'components/Themed';
import { GridView, GridOuterItem, GridInnerItem } from 'components/UI/GridView';


export default function ShopListsScreen() {
    const items = Array(19).fill({});
    return(
        <ScrollView>
            <GridView>
                {items.map(() => (
                <GridOuterItem>
                    <GridInnerItem>
                        <Text>test</Text>
                    </GridInnerItem>
                </GridOuterItem>
                ))}
            </GridView>
        </ScrollView>
    );
}