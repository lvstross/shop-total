import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ShopItem, REMOVE_ITEM, UPDATE_ITEM } from '../../redux/ShopItems/types';
import { FontSize } from '../../lib/variables';
import Colors from '../../lib/Colors';
import { ItemContainer, ItemSection, ItemText } from './styled';

export default function ShopItemView({ id, name, price }: ShopItem) {
    const dispatch = useDispatch();
    const [editName, setEditName] = useState(false);
    const [editPrice, setEditPrice] = useState(false);

    const closeEdit = () => {
        setEditName(false);
        setEditPrice(false);
    }

    return (
        <ItemContainer>
            <ItemSection flex={5}>
                {editName ? (
                    <TextInput
                        style={{ height: 30, borderColor: 'gray', borderBottomWidth: 1 }}
                        onChangeText={text => dispatch({ type: UPDATE_ITEM, payload: { id, name: text, price, } })}
                        value={name}
                    />
                ) : (
                    <TouchableOpacity onPress={() => setEditName(true)}>
                        <ItemText>{name}</ItemText>
                    </TouchableOpacity>
                )}
            </ItemSection>
            <ItemSection flex={4}>
                {editPrice ? (
                    <TextInput
                        style={{ height: 30, borderColor: 'gray', borderBottomWidth: 1 }}
                        onChangeText={text => dispatch({ type: UPDATE_ITEM, payload: { id, name, price: text, } })}
                        value={price}
                    />
                ) : (
                    <TouchableOpacity onPress={() => setEditPrice(true)}>
                        <ItemText>${price}</ItemText>
                    </TouchableOpacity>
                )}
            </ItemSection>
            <ItemSection flex={1}>
                {editName || editPrice ? (
                    <TouchableOpacity onPress={closeEdit}>
                        <AntDesign name="check" size={FontSize.m} color={Colors.red[100]} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => dispatch({ type: REMOVE_ITEM, payload: id })}>
                        <AntDesign name="delete" size={FontSize.m} color={Colors.red[100]} />
                    </TouchableOpacity>
                )}
            </ItemSection>
        </ItemContainer>
    );
}