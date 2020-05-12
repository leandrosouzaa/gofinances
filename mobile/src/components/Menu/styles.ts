import styled from 'styled-components/native';

export const Container = styled.View`
   height: 55px;
   background-color: #fff;
   flex-direction: row;
   justify-content: space-around;
`;

export const Item = styled.TouchableOpacity`
   flex-direction: row;
   height: 55px;
   align-items: center;
`;

export const ItemText = styled.Text`
   color: #363f5f;
   font-size: 16px;
   margin-left: 10px;
   font-family: Poppins-Regular;
`;
