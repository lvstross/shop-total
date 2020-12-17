import React, { useRef, useEffect } from 'react';
import { FlatList, Platform, KeyboardAvoidingView } from 'react-native';
import randomString from 'random-string-simple';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { getModalState } from 'store/ConfirmModal/selectors';
import { getShopItems, getShopTotal } from 'store/ShopItems/selectors';
import { clearAllItems } from 'store/ShopItems/actions';
import { addItem, getTotal } from 'store/ShopItems/actions';
import { showModal, closeModal } from 'store/ConfirmModal/actions';

import Colors from 'constants/Colors';
import { FontSize } from 'constants/Variables';
import useColorScheme from 'hooks/useColorScheme';

import { ButtonText } from 'components/Typography';
import { Container } from 'components/UI/UI';
import ConfirmModal from 'components/UI/Modal/ConfirmModal';
import { HeaderButton } from 'components/UI/Buttons';

import ShopItemView from './ShopItemView';
import { AddButton, TotalDisplay, TotalText } from './styled';


export default function ShopTotalScreen({ navigation }: any) {
  const theme = useColorScheme();
  const shopItems = useSelector(getShopItems);
  const shopTotal = useSelector(getShopTotal);
  const modalState = useSelector(getModalState);
  const dispatch = useDispatch();
  let flatListRef = useRef();

  const handleAddItem = () => {
    const newItem = {
      id: randomString(25),
      name: 'New Item',
      price: 0.00,
    };

    dispatch(addItem(newItem));
    flatListRef?.scrollToEnd({animated: true});
  };

  const handleCloseModal = () => {
      dispatch(closeModal());
  };

  const handleClearAll = () => {
    handleCloseModal();
    dispatch(clearAllItems());
    dispatch(getTotal());
  };

  const handleOpenModal = () => {
    dispatch(showModal({
        confirm: handleClearAll as typeof Function,
        decline: handleCloseModal as typeof Function,
        headerText: 'Are you sure you want to clear all items?',
    }));
  }

  useEffect(() => {
    if (shopItems.length > 0) {
      navigation.setOptions({
        headerRight: () => (
          <HeaderButton onPress={handleOpenModal}>
            <ButtonText color={Colors.Theme[theme].btnText}>Clear All</ButtonText>
          </HeaderButton>
        ),
      });
    } else {
      navigation.setOptions({
        headerRight: () => null,
      });
    }
  }, [shopItems]);

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
      <ConfirmModal
          isOpen={modalState.isOpen}
          confirm={() => modalState.confirm()}
          decline={() => modalState.decline()}
          headerText={modalState.headerText}
      />
    </Container>
  );
}
