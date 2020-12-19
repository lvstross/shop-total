import React from 'react';
import { Text, View } from 'components/Themed';
import { FlatList } from 'react-native';
import { Container } from 'components/UI/UI';
import { ItemContainer, ItemSection, ItemText } from '../ShopTotal/styled';

function ShopListModal({ navigation }: any) {
    const handleGoBack = () => navigation.goBack();
    return (
        <Container style={{ marginTop: 60 }}>
            <View style={{ borderColor: 'white', borderWidth: 3, marginBottom: 20, borderRadius: 5 }}></View>
            <FlatList
                data={[{ text: 'hello' }, { text: 'world' }]}
                renderItem={(data: any) => (
                    <ItemContainer>
                        <ItemSection flex={2}>
                            <ItemText>Hello</ItemText>
                        </ItemSection>
                        <ItemSection flex={1}>
                            <ItemText>World</ItemText>
                        </ItemSection>
                    </ItemContainer>
                )}
                keyExtractor={item => item.text}
            />
        </Container>
    );
}

export default ShopListModal;