import styled from 'styled-components';
import { View, ForegroundView } from 'components/Themed';

export const GridView = styled(View)`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const GridOuterItem = styled(View)`
    width: 50%;
`;

export const GridInnerItem = styled(ForegroundView)`
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
`;