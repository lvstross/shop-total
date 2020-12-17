import styled from 'styled-components/native';
import { View, getThemedBackground } from '../Themed';

const FlexRow = styled(View)`
    flex-direction: row;
    ${getThemedBackground}
`;

export default FlexRow;