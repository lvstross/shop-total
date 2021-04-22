import styled from 'styled-components/native';
import { View } from 'components/Themed';

export const StyledScrollView = styled.ScrollView`
    background-color: #fff;
`;

export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

export const Container = styled(View)`
    flex: 1;
    padding: 12px;
    padding-bottom: 60px;
    align-items: stretch;
    justify-content: flex-start;
`;