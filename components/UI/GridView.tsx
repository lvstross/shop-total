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
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 150px;
    margin: 10px;
    border-radius: 10;
`;