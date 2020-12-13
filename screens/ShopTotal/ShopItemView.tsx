import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, TextInput, KeyboardType } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ShopItem } from 'store/ShopItems/types';
import { updateItem, removeItem, getTotal } from 'store/ShopItems/actions';
import { FontSize } from 'constants/Variables';
import Colors from 'constants/Colors';
import { ItemContainer, ItemSection, ItemText } from './styled';

export default function ShopItemView({ id, name, price }: ShopItem) {
    const dispatch = useDispatch();
    const [editName, setEditName] = useState(false);
    const [editPrice, setEditPrice] = useState(false);

    const closeEdit = () => {
        setEditName(false);
        setEditPrice(false);
        dispatch(getTotal());
    }

    const handleNameChange = (text: string) =>
        dispatch(updateItem({ id, name: text, price, }));

    const handlePriceChange = (text: string) =>
        dispatch(updateItem({ id, name, price: text, }));

    const handleDelete = () => {
        dispatch(removeItem(id));
        dispatch(getTotal());
    }

    const renderInput = (value: String | Number, onChange: any, keyboard: KeyboardType) => {
        return (            
            <TextInput
                value={value}
                style={{ height: 30, borderColor: 'gray', borderBottomWidth: 1, fontSize: 18 }}
                onChangeText={onChange}
                autoFocus
                clearTextOnFocus
                keyboardType={keyboard}
                onFocus={() => {
                    if (value === 'New Item') {
                        onChange('');
                    }
                }}
                onBlur={closeEdit}
            />
        );
    };

    return (
        <ItemContainer>
            <ItemSection flex={5}>
                {editName ? renderInput(name!, handleNameChange, 'default') : (
                    <TouchableOpacity onPress={() => setEditName(true)}>
                        <ItemText>{name}</ItemText>
                    </TouchableOpacity>
                )}
            </ItemSection>
            <ItemSection flex={4}>
                {editPrice ? renderInput(price!, handlePriceChange, 'decimal-pad') : (
                    <TouchableOpacity onPress={() => setEditPrice(true)}>
                        <ItemText>${price}</ItemText>
                    </TouchableOpacity>
                )}
            </ItemSection>
            <ItemSection flex={1}>
                {!editName || !editPrice ? (
                    <TouchableOpacity onPress={handleDelete}>
                        <AntDesign name="delete" size={FontSize.m} color={Colors.red[100]} />
                    </TouchableOpacity>
                ) : null}
            </ItemSection>
        </ItemContainer>
    );
}