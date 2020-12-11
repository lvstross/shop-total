import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import randomString from 'random-string-simple';
import { ADD_ITEM } from '../../redux/ShopItems/types';
import { FontSize } from '../../lib/variables';
import { Container, AddButton } from './styled';
import ShopItemView from './ShopItemView';

export default function ShopTotalScreen() {
  const shopItems = useSelector((state: any) => state.shopItems.shopItems);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id: randomString(25),
      name: 'New Item',
      price: 0.00,
    };

    dispatch({ type: ADD_ITEM, payload: newItem })
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
      <FlatList
        data={shopItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AddButton onPress={handleAddItem} style={{ borderRadius: 100 }}>
        <AntDesign name="plus" size={FontSize.l} color="black" />
      </AddButton>
    </Container>
  );
}
