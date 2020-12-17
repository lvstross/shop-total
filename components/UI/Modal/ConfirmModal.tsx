import React from 'react';
import { Modal } from 'react-native';
import { CenteredView } from 'components/UI/UI';
import FlexRow from 'components/UI/FlexRow';
import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';
import {
    ModalButton,
    ModalButtonText,
    ModalHeaderText,
    ModalView,
} from './styled';

export interface ConfirmModalProps {
    isOpen: Boolean;
    confirm: () => void;
    decline: () => void;
    headerText?: String;
}

export default function ConfirmModal({ isOpen, confirm, decline, headerText }: ConfirmModalProps) {
    const theme = useColorScheme();
    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <CenteredView>
                <ModalView backgroundColor={Colors.Theme[theme].foreground}>
                    {headerText ? <ModalHeaderText>{headerText}</ModalHeaderText> : null}
                    <FlexRow backgroundColor={Colors.Theme[theme].foreground}>
                        <ModalButton
                            backgroundColor={Colors.red[100]}
                            onPress={confirm}
                        >
                            <ModalButtonText>Yes</ModalButtonText>
                        </ModalButton>
                        <ModalButton
                            backgroundColor={Colors.grey[400]}
                            onPress={decline}
                        >
                            <ModalButtonText>No</ModalButtonText>
                        </ModalButton>
                    </FlexRow>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}