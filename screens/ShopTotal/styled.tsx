import styled from 'styled-components/native';
import { Spacing } from 'constants/Variables';
import { Text, View, ForegroundView } from 'components/Themed';

export const AddButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 100px;
    height: 45px;
    border-radius: 8px;
`;

export const ItemContainer = styled(ForegroundView)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${Spacing.m}px;
    margin-bottom: ${Spacing.s}px;
    border-radius: 8px;
`;

interface ItemSectionProps {
    flex?: Number;
}

export const ItemSection = styled(ForegroundView)`
    ${({ flex }: ItemSectionProps) => flex && `
        flex: ${flex};
    `}
`;

export const ItemText = styled(Text)`
    font-size: 18px;
`;

export const TotalDisplay = styled(View)`
    position: absolute;
    left: 10px;
    bottom: 10px;
    padding: 10px;
    border-radius: 8px;
`;

export const TotalText = styled(Text)`
    font-size: 20px;
    font-weight: bold;
`;