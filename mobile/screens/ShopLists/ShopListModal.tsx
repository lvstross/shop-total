import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { getShopLists } from 'shared/store/ShopLists/selectors';
import { Container } from 'components/UI/UI';
import Spacer from 'components/UI/Spacer';
import { renderFloatValue } from 'utils';
import { ItemContainer, ItemSection, ItemText, TotalDisplay, TotalText } from '../ShopTotal/styled';
import { DragLine, ScreenHeader } from './styled';

function ShopListModal({ route }: any) {
    const shopLists = useSelector(getShopLists);
    const listId = route?.params?.listId;
    const filteredList = shopLists.filter((list: any) => list.id === listId);
    const listName = filteredList[0].name;
    const selectedList = filteredList[0].list;
    let total = 0;
    selectedList.forEach((item: any) => {
      const intValue = parseFloat(item.price);
      const newTotal = total + intValue;
      total = Number(newTotal.toFixed(2));
    });
    return (
        <Container style={{ paddingTop: 70 }}>
            <DragLine />
            <ScreenHeader>{listName}</ScreenHeader>
            <Spacer />
            <FlatList
                data={selectedList}
                renderItem={({ item }) => {
                    return (
                        <ItemContainer key={item.id}>
                            <ItemSection flex={2}>
                                <ItemText>{item.name}</ItemText>
                            </ItemSection>
                            <ItemSection flex={1}>
                                <ItemText>${item.price}</ItemText>
                            </ItemSection>
                        </ItemContainer>
                    );
                }}
                keyExtractor={item => item.text}
            />
            <TotalDisplay>
                <TotalText>Total: ${renderFloatValue(total)}</TotalText>
            </TotalDisplay>
        </Container>
    );
}

export default ShopListModal;