import React from 'react';

import {Container, Title} from './styles';

interface ButtonProps {
   text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
   return (
      <Container>
         <Title>{text}</Title>
      </Container>
   );
};

export default Button;
