import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, TextInput, KeyboardType } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from 'constants/Colors';
import { FontSize } from 'constants/Variables';
import useColorScheme from 'hooks/useColorScheme';
import { renderFloatValue } from 'utils';

import { ShopItem } from 'store/ShopItems/types';
import { showModal, closeModal } from 'store/ConfirmModal/actions';
import { updateItem, removeItem, getTotal } from 'store/ShopItems/actions';

import { ItemContainer, ItemSection, ItemText } from './styled';

export default function ShopItemView({ id, name, price }: ShopItem) {
    const theme = useColorScheme();
    const [editName, setEditName] = useState(false);
    const [editPrice, setEditPrice] = useState(false);
    const dispatch = useDispatch();

    const closeEdit = () => {
        setEditName(false);
        setEditPrice(false);
        dispatch(getTotal());
    }

    const handleNameChange = (text: string) =>
        dispatch(updateItem({ id, name: text, price, }));

    const handlePriceChange = (text: string) =>
        dispatch(updateItem({ id, name, price: text, }));
    
    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const handleDelete = () => {
        handleCloseModal();
        dispatch(removeItem(id));
        dispatch(getTotal());
    };

    const handleOpenModal = () => {
        dispatch(showModal({
            confirm: handleDelete as typeof Function,
            decline: handleCloseModal as typeof Function,
            headerText: 'Are you sure you want to delete this item?',
        }));
    }

    const renderInput = (
        value: String | Number,
        onChange: any,
        keyboard: KeyboardType,
        defaultValue: String
    ) => {
        return (            
            <TextInput
                value={value}
                style={{
                    color: Colors.Theme[theme].text,
                    height: 30,
                    borderColor: 'gray',
                    borderBottomWidth: 1,
                    fontSize: 18,
                }}
                onChangeText={onChange}
                autoFocus
                clearTextOnFocus
                keyboardType={keyboard}
                onFocus={() => {
                    if (value === 'New Item') {
                        onChange('');
                    }
                }}
                onBlur={() => {
                    if (value === '') {
                        onChange(defaultValue);
                    }
                    closeEdit();
                }}
            />
        );
    };

    return (
        <>
            <ItemContainer>
                <ItemSection flex={5}>
                    {editName ? renderInput(name!, handleNameChange, 'default', 'New Item') : (
                        <TouchableOpacity onPress={() => setEditName(true)}>
                            <ItemText>{name}</ItemText>
                        </TouchableOpacity>
                    )}
                </ItemSection>
                <ItemSection flex={4}>
                    {editPrice ? renderInput(price!, handlePriceChange, 'decimal-pad', '0') : (
                        <TouchableOpacity onPress={() => setEditPrice(true)}>
                            <ItemText>${renderFloatValue(price)}</ItemText>
                        </TouchableOpacity>
                    )}
                </ItemSection>
                <ItemSection flex={1}>
                    {!editName || !editPrice ? (
                        <TouchableOpacity onLongPress={handleDelete} onPress={handleOpenModal}>
                            <AntDesign name="delete" size={FontSize.m} color={Colors.red[100]} />
                        </TouchableOpacity>
                    ) : null}
                </ItemSection>
            </ItemContainer>
        </>
    );
}
