import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {Container, Type, Value, Info, Last} from './styles';

interface CardProps {
   value: number;
   icon: string;
   backgroundColor?: string;
   iconColor?: string;
   title: string;
   last: string;
}

const Card: React.FC<CardProps> = ({
   value,
   icon,
   iconColor = '#fff',
   backgroundColor = '#fff',
   title,
   last,
   ...rest
}) => {
   return (
      <Container {...rest} backgroundColor={backgroundColor}>
         <Info>
            <Type colorTheme={backgroundColor}>{title}</Type>
            <Value colorTheme={backgroundColor}>R$ {value}</Value>
            <Last colorTheme={backgroundColor}>{last}</Last>
         </Info>
         <Icon name={icon} size={35} color={iconColor} />
      </Container>
   );
};

export default Card;
