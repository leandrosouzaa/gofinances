import styled from 'styled-components/native';

interface SelectItemProps {
   isSelected: boolean;
   value: 'income' | 'outcome';
}

export const Container = styled.View`
   flex: 1;
   background-color: #f0f2f5;
   padding: 24px 24px 0px 24px;
`;

export const Title = styled.Text`
   font-size: 20px;
   line-height: 30px;
   font-family: 'Poppins-Regular';
   margin-bottom: 24px;
`;

export const SelectView = styled.View`
   width: 100%;
   justify-content: space-between;
   flex-direction: row;
   height: 50px;
   margin-bottom: 16px;
`;

export const SelectItem = styled.View<SelectItemProps>`
   border: ${(props) => (props.isSelected ? 0 : '1.5px solid #969cb3')};
   width: 49%;
   border-radius: 5px;
   background-color: ${(props) =>
      props.value === 'income' && props.isSelected
         ? 'rgba(18, 164, 84, 0.1)'
         : props.value === 'outcome' && props.isSelected
         ? 'rgba(232, 63, 91, 0.1)'
         : 0};
`;

export const SelectItemButton = styled.TouchableOpacity`
   justify-content: center;
   align-items: center;
   flex-direction: row;
   flex: 1;
   background-color: transparent;
`;

export const SelectItemText = styled.Text`
   color: #363f5f;
   font-family: 'Poppins-Regular';
   font-size: 14px;
   margin-left: 16px;
`;
