import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';
import {
    ActionButton,
    ActionButtonText,
    ActionModalView,
    ActionModalBackdrop,
} from './styled';

export interface ActionModalItem {
    text: String;
    onPress: () => void;
}

export interface ActionModalProps {
    isOpen: Boolean;
    actionsItems: Array<ActionModalItem>;
    onClose: () => void;
}

export default function ActionModal({ isOpen, actionsItems, onClose }: ActionModalProps) {
    const theme = useColorScheme();
    if (isOpen) {
        return (
            <TouchableWithoutFeedback onPress={onClose}>
                <ActionModalBackdrop>
                    <ActionModalView backgroundColor={Colors.Theme[theme].foreground}>
                        {actionsItems.map((item: ActionModalItem) => (
                            <ActionButton key={item.text} onPress={item.onPress}>
                                <ActionButtonText>{item.text}</ActionButtonText>
                            </ActionButton>
                        ))}
                    </ActionModalView>
                </ActionModalBackdrop>
            </TouchableWithoutFeedback>
        );
    }
    return null;
}