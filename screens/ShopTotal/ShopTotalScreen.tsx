import React, { useRef } from 'react';
import { FlatList, Platform, KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import randomString from 'random-string-simple';
import { addItem } from 'store/ShopItems/actions';
import * as selectors from 'store/ShopItems/selectors';
import { FontSize } from 'constants/Variables';
import { Container } from 'components/UI/UI';
import useColorScheme from 'hooks/useColorScheme';
import Colors from 'constants/Colors';
import { AddButton, TotalDisplay, TotalText } from './styled';
import ShopItemView from './ShopItemView';


export default function ShopTotalScreen() {
  const shopItems = useSelector(selectors.getShopItems);
  const shopTotal = useSelector(selectors.getShopTotal);
  const dispatch = useDispatch();
  let flatListRef = useRef();
  const theme = useColorScheme();

  const handleAddItem = () => {
    const newItem = {
      id: randomString(25),
      name: 'New Item',
      price: 0.00,
    };

    dispatch(addItem(newItem));
    flatListRef?.scrollToEnd({animated: true});
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
        />
      </KeyboardAvoidingView>
      <TotalDisplay>
        <TotalText>${shopTotal.toFixed(2)}</TotalText>
      </TotalDisplay>
      <AddButton onPress={handleAddItem}>
        <MaterialCommunityIcons name="card-plus-outline" size={FontSize.l} color={Colors.Theme[theme].text} />
      </AddButton>
    </Container>
  );
}
