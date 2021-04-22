import styled from 'styled-components/native';
import { View, getThemedBackground } from '../Themed';

const FlexColumn = styled(View)`
    flex-direction: column;
    ${getThemedBackground}
`;

export default FlexColumn;