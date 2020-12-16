import React from 'react';
import { Modal } from 'react-native';
import { CenteredView } from 'components/UI/UI';
import FlexRow from 'components/UI/FlexRow';
import Colors from 'constants/Colors';
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

function ConfirmModal({ isOpen, confirm, decline, headerText }: ConfirmModalProps) {
    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <CenteredView>
                <ModalView>
                    {headerText ? <ModalHeaderText>{headerText}</ModalHeaderText> : null}
                    <FlexRow>
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

export default ConfirmModal;