import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
   isFocused: boolean;
   isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
   width: 100%;
   height: 60px;
   padding: 0 16px;
   background: #ffffff;
   border-radius: 10px;
   margin-bottom: 8px;

   border-radius: 5px;
   flex-direction: row;
   align-items: center;
   ${(props) =>
      props.isErrored &&
      css`
         border: 2px solid #c53030;
      `}
   ${(props) =>
      props.isFocused &&
      css`
         border: 2px solid #5636d3;
      `}
`;

export const TextInput = styled.TextInput`
   flex: 1;
   color: #363f5f;
   font-size: 16px;
   font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
   margin-right: 16px;
`;

export const Error = styled.View`
   margin-left: 16px;
   height: 20px;
`;
