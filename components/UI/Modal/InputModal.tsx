import React from 'react';
import { Modal, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
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

export interface InputModalProps {
    isOpen: Boolean;
    inputValue: String;
    onChange: (text: string) => void;
    confirm: () => void;
    confirmText: String;
    decline: () => void;
    declineText: String;
    headerText?: String;
}

export default function InputModal({
    isOpen,
    inputValue,
    onChange,
    confirm,
    confirmText,
    decline,
    declineText,
    headerText,
}: InputModalProps) {
    const theme = useColorScheme();
    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <CenteredView>
                <ModalView backgroundColor={Colors.Theme[theme].foreground}>
                    {headerText ? <ModalHeaderText>{headerText}</ModalHeaderText> : null}
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={95}
                    >
                        <TextInput
                            value={inputValue}
                            style={{
                                color: Colors.Theme[theme].text,
                                width: 200,
                                height: 40,
                                margin: 10,
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 5,
                                fontSize: 18,
                            }}
                            onChangeText={onChange}
                            onBlur={() => Keyboard.dismiss()}
                            // autoFocus
                        />
                    </KeyboardAvoidingView>
                    <FlexRow backgroundColor={Colors.Theme[theme].foreground}>
                        <ModalButton
                            backgroundColor={Colors.red[100]}
                            onPress={confirm}
                        >
                            <ModalButtonText>{confirmText}</ModalButtonText>
                        </ModalButton>
                        <ModalButton
                            backgroundColor={Colors.grey[400]}
                            onPress={decline}
                        >
                            <ModalButtonText>{declineText}</ModalButtonText>
                        </ModalButton>
                    </FlexRow>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}