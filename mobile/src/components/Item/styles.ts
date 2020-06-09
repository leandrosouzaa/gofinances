import styled from 'styled-components/native';

interface ValueProps {
   type: 'income' | 'outcome';
}

export const Container = styled.View`
   width: 100%;
   background-color: #fff;
   padding: 16px 24px;
   margin-bottom: 16px;
`;

export const Title = styled.Text`
   font-size: 14px;
   line-height: 21px;
   color: #363f5f;
   font-family: 'Poppins-Regular';
`;

export const Value = styled.Text<ValueProps>`
   font-size: 20px;
   line-height: 30px;
   color: ${(props) => (props.type === 'outcome' ? '#e83f5b' : '#12A454')};
   font-family: 'Poppins-Regular';
   margin-bottom: 24px;
`;

export const Details = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const DetailText = styled.Text`
   font-size: 14px;
   line-height: 21px;

   color: #969cb3;
`;
