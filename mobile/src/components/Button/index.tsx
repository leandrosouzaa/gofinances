import React from 'react';

import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, Title} from './styles';

interface ButtonProps extends RectButtonProperties {
   title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
   return (
      <Container {...rest}>
         <Title>{title}</Title>
      </Container>
   );
};

export default Button;
