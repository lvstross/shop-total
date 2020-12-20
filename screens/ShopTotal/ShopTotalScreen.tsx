import React, { useRef, useEffect, useState } from 'react';
import { FlatList, Platform, KeyboardAvoidingView } from 'react-native';
import randomString from 'random-string-simple';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { getModalState } from 'store/ConfirmModal/selectors';
import { getShopItems, getShopTotal } from 'store/ShopItems/selectors';
import { clearAllItems } from 'store/ShopItems/actions';
import { addItem, getTotal } from 'store/ShopItems/actions';
import { addList } from 'store/ShopLists/actions';
import { showModal, closeModal } from 'store/ConfirmModal/actions';

import Colors from 'constants/Colors';
import { FontSize } from 'constants/Variables';
import useColorScheme from 'hooks/useColorScheme';

import { Container } from 'components/UI/UI';
import ConfirmModal from 'components/UI/Modal/ConfirmModal';
import ActionModal from 'components/UI/Modal/ActionModal';
import InputModal from 'components/UI/Modal/InputModal';
import { HeaderButton } from 'components/UI/Buttons';

import ShopItemView from './ShopItemView';
import { AddButton, TotalDisplay, TotalText } from './styled';


export default function ShopTotalScreen({ navigation }: any) {
  const theme = useColorScheme();
  const shopItems = useSelector(getShopItems);
  const shopTotal = useSelector(getShopTotal);
  const modalState = useSelector(getModalState);
  const [showActions, setShowActions] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  let flatListRef = useRef();
  const hasShopTotalItems = shopItems.length > 0;

  const handleAddItem = () => {
    const newItem = {
      id: randomString(25),
      name: 'New Item',
      price: 0.00,
    };

    dispatch(addItem(newItem));
    flatListRef?.scrollToEnd({animated: true});
  };

  const handleSaveList = () => {
    const newList = {
      id: randomString(25),
      name: inputText || 'New List',
      list: [...shopItems],
    };

    dispatch(addList(newList));
    setShowActions(false);
    setShowInputModal(false);
    setInputText('');
    // @TODO: maybe ask if they want to delete the list after saving
    // dispatch(clearAllItems());
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
    setShowActions(false);
    dispatch(showModal({
        confirm: handleClearAll as typeof Function,
        decline: handleCloseModal as typeof Function,
        headerText: 'Are you sure you want to clear all items?',
    }));
  }

  const handleOpenInputModal = () => {
    setShowInputModal(true);
  };

  const handleCloseInputModal = () => {
    setShowInputModal(false);
    setInputText('');
  };

  const handleOnInputChange = (text: string) => {
    setInputText(text);
  };

  const modalActions = [
    {
      text: 'Save List',
      onPress: handleOpenInputModal,
    },
    {
      text: 'Clear All',
      onPress: handleOpenModal,
    },
  ];

  useEffect(() => {
    if (hasShopTotalItems) {
      navigation.setOptions({
        headerRight: () => (
          <HeaderButton onPress={() => setShowActions(!showActions)}>
            <MaterialCommunityIcons
              name="dots-horizontal-circle-outline"
              size={32}
              color={Colors.Theme[theme].btnText}
            />
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
      {hasShopTotalItems ? (
        <TotalDisplay>
          <TotalText>Total: ${shopTotal.toFixed(2)}</TotalText>
        </TotalDisplay>
      ) : null}
      <AddButton onPress={handleAddItem}>
        <MaterialCommunityIcons name="card-plus-outline" size={FontSize.l} color={Colors.Theme[theme].btnText} />
      </AddButton>
      <ConfirmModal
          isOpen={modalState.isOpen}
          confirm={() => modalState.confirm()}
          decline={() => modalState.decline()}
          headerText={modalState.headerText}
      />
      <ActionModal
        isOpen={showActions}
        onClose={() => setShowActions(false)}
        actionsItems={modalActions}
      />
      <InputModal
        isOpen={showInputModal}
        inputValue={inputText}
        onChange={handleOnInputChange}
        confirm={handleSaveList}
        confirmText="Save"
        decline={handleCloseInputModal}
        declineText="Cancel"
        headerText="What name would you like to give to your list?"
      />
    </Container>
  );
}
