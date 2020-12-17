import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, TextInput, KeyboardType } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ShopItem } from 'store/ShopItems/types';
import { updateItem, removeItem, getTotal } from 'store/ShopItems/actions';
import { FontSize } from 'constants/Variables';
import useColorScheme from 'hooks/useColorScheme';
import Colors from 'constants/Colors';
import ConfirmModal from 'components/UI/Modal/ConfirmModal';
import { ItemContainer, ItemSection, ItemText } from './styled';

export default function ShopItemView({ id, name, price }: ShopItem) {
    const dispatch = useDispatch();
    const [editName, setEditName] = useState(false);
    const [editPrice, setEditPrice] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const theme = useColorScheme();

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
                onBlur={closeEdit}
            />
        );
    };

    return (
        <>
            <ItemContainer style={{ backgroundColor: Colors.Theme[theme].foreground }}>
                <ItemSection flex={5} backgroundColor={Colors.Theme[theme].foreground}>
                    {editName ? renderInput(name!, handleNameChange, 'default') : (
                        <TouchableOpacity onPress={() => setEditName(true)}>
                            <ItemText>{name}</ItemText>
                        </TouchableOpacity>
                    )}
                </ItemSection>
                <ItemSection flex={4} backgroundColor={Colors.Theme[theme].foreground}>
                    {editPrice ? renderInput(price!, handlePriceChange, 'decimal-pad') : (
                        <TouchableOpacity onPress={() => setEditPrice(true)}>
                            <ItemText>${price}</ItemText>
                        </TouchableOpacity>
                    )}
                </ItemSection>
                <ItemSection flex={1} backgroundColor={Colors.Theme[theme].foreground}>
                    {!editName || !editPrice ? (
                        <TouchableOpacity onLongPress={handleDelete} onPress={() => setModalVisible(true)}>
                            <AntDesign name="delete" size={FontSize.m} color={Colors.red[100]} />
                        </TouchableOpacity>
                    ) : null}
                </ItemSection>
            </ItemContainer>
            <ConfirmModal
                isOpen={modalVisible}
                confirm={handleDelete}
                decline={() => setModalVisible(!modalVisible)}
                headerText="Are you sure you want to delete this item?"
            />
        </>
    );
}
