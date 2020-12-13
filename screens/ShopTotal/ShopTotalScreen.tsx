import React, { useRef } from 'react';
import { FlatList, Platform, KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import randomString from 'random-string-simple';
import { addItem } from 'store/ShopItems/actions';
import * as selectors from 'store/ShopItems/selectors';
import { FontSize } from 'lib/variables';
import { Container, AddButton, TotalDisplay, ItemText } from './styled';
import ShopItemView from './ShopItemView';

export default function ShopTotalScreen() {
  const shopItems = useSelector(selectors.getShopItems);
  const shopTotal = useSelector(selectors.getShopTotal);
  const dispatch = useDispatch();
  let flatListRef = useRef();

  const handleAddItem = () => {
    const newItem = {
      id: randomString(25),
      name: 'New Item',
      price: 0.00,
    };

    dispatch(addItem(newItem));
  };

  const renderItem = ({ item }: any) => (
    <ShopItemView
      id={item.id}
      name={item.name}
      price={item.price} 
    />
  );

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={95}
      >
        <FlatList
          ref={ref => flatListRef = ref}
          data={shopItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onContentSizeChange={() => flatListRef.scrollToEnd({animated: true})}
        />
      </KeyboardAvoidingView>
      <TotalDisplay>
        <ItemText>${shopTotal.toFixed(2)}</ItemText>
      </TotalDisplay>
      <AddButton onPress={handleAddItem}>
        <AntDesign name="plus" size={FontSize.l} color="black" />
      </AddButton>
    </Container>
  );
}
