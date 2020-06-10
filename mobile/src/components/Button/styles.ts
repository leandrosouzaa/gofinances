import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   width: 100%;
   background-color: ${(props) => (props.enabled ? '#ff872c' : '#ff8b33')};
   justify-content: center;
   align-items: center;
   height: 50px;
   border-radius: 5px;
`;

export const Title = styled.Text`
   font-size: 14px;
   color: #fff;
   font-family: 'Poppins-Regular';
`;
