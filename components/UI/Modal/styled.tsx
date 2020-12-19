import styled from 'styled-components/native';
import { View, Text, getThemedBackground } from 'components/Themed';


export const ModalView = styled(View)`
    margin: 20px;
    padding: 35px;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    box-shadow: 0px 0px 2px #000;
    ${getThemedBackground}
`;

export const ModalHeaderText = styled(Text)`
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
`;

export const ModalButton = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 30%;
    height: 45px;
    border-radius: 8px;
    ${getThemedBackground}
`;

export const ModalButtonText = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;

export const ActionButtonText = styled(Text)`
    font-weight: bold;
    text-align: center;
`;

export const ActionModalBackdrop = styled.View`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
`;

export const ActionModalView = styled(View)`
    position: absolute;
    top: 5px;
    right: 10px;
    width: 150px;
    align-items: stretch;
    flex-direction: column;
    box-shadow: 0px 0px 2px #000;
    ${getThemedBackground}
`;

export const ActionButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 50px;
    border: 1px solid #bbb;
`;