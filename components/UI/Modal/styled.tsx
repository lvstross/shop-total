import styled from 'styled-components/native';
import { Text } from 'components/Themed';

export const ModalView = styled.View`
    margin: 20px;
    padding: 35px;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    box-shadow: 0px 0px 2px #000;
`;

export const ModalHeaderText = styled(Text)`
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
`;

interface ModalButtonProps {
    backgroundColor: String;
}

export const ModalButton = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 30%;
    height: 45px;
    border-radius: 8px;
    ${({ backgroundColor }: ModalButtonProps) => backgroundColor && `
        background-color: ${backgroundColor};
    `}
`;

export const ModalButtonText = styled(Text)`
    color: white;
    font-weight: bold;
    text-align: center;
`;