import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../lib/Colors';
import { Spacing } from '../../lib/variables';
import { Text, View } from '../../components/Themed';

export const StyledScrollView = styled(ScrollView)`
    background-color: #fff;
`;

export const Container = styled(View)`
    flex: 1;
    padding: 12px;
    align-items: stretch;
    justify-content: flex-start;
`;

export const ItemContainer = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${Colors.grey[100]};
    padding: ${Spacing.m}px;
    margin-bottom: ${Spacing.s}px;
    border-radius: 8px;
`;

interface ItemSectionProps {
    flex: Number;
}

export const ItemSection = styled(View)`
    background-color: ${Colors.grey[100]};
    ${({ flex }: ItemSectionProps) => flex && `
        flex: ${flex};
    `}
`;

export const ItemText = styled(Text)`
    font-size: 18px;
`;

export const AddButton = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 70px;
    height: 70px;
    background-color: ${Colors.lightBlue[100]};
    box-shadow: 0px 0px 2px ${Colors.black[900]}
`;