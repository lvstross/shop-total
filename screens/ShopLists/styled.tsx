import React from 'react';
import { Text } from 'components/Themed';
import styled from 'styled-components/native';
import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';

const DragContainer = styled.View`
    width: 100%;
    height: 10px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
`;

export const DragLine = () => {
    const theme = useColorScheme();
    const DragIndicator = styled.View`
        border: 3px solid ${Colors.Theme[theme].text};
        width: 40%;
        border-radius: 5px;
    `;
    return (
        <DragContainer>
            <DragIndicator />
        </DragContainer>
    );
}

export const GridItemHeader = styled(Text)`
    font-size: 24px;
    font-weight: bold;
`;