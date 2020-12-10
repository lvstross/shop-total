import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import randomString from 'random-string-simple';
import { FontSize } from '../../lib/variables';
import Colors from '../../lib/Colors';
import { Container, ItemContainer, ItemSection, ItemText, AddButton } from './styled';

interface ItemProps {
  id: String;
  name: String;
}

export default function ShopTotalScreen() {
  const [items, setItems] = useState<ItemProps[]>([]);

  const handleAddItem = () => {
    const newItem = { id: randomString(25), name: 'New Item' };
    console.log(newItem);
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: String) => {
    const filteredItems = items.filter(item => item.id != id);
    setItems([...filteredItems]);
  };

  const renderItem = ({ item }) => (
    <ItemContainer>
      <ItemSection flex={10}>
        <ItemText>{item.name}</ItemText>
      </ItemSection>
      <ItemSection flex={2}>
        <AntDesign name="edit" size={FontSize.m} color={Colors.black[900]} />
      </ItemSection>
      <ItemSection flex={1}>
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
          <AntDesign name="delete" size={FontSize.m} color={Colors.red[100]} />
        </TouchableOpacity>
      </ItemSection>
    </ItemContainer>
  );

  return (
    <Container>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AddButton onPress={handleAddItem} style={{ borderRadius: 100 }}>
        <AntDesign name="plus" size={FontSize.l} color="black" />
      </AddButton>
    </Container>
  );
}
