import React from 'react';

import {RectButtonProperties} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Title} from './styles';

interface ButtonProps extends RectButtonProperties {
   title: string;
}

const Button: React.FC<ButtonProps> = ({title, enabled, ...rest}) => {
   return (
      <Container enabled={enabled} {...rest}>
         {enabled ? (
            <Title>{title}</Title>
         ) : (
            <Icon color="#Fff" name="lock" size={18} />
         )}
      </Container>
   );
};

export default Button;
