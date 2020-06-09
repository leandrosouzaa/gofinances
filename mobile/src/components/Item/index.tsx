import React from 'react';
import {Container, Title, Value, Details, DetailText} from './styles';

interface ItemProps {
   type: 'outcome' | 'income';
   value: number;
   category: string;
   date: string;
   title: string;
}

const Item: React.FC<ItemProps> = ({
   type,
   value,
   category,
   date,
   title,
   ...rest
}) => {
   return (
      <Container {...rest}>
         <Title>{title}</Title>
         <Value type={type}>
            {type === 'outcome' && '- '}R$ {value}
         </Value>
         <Details>
            <DetailText>{category}</DetailText>
            <DetailText>{date}</DetailText>
         </Details>
      </Container>
   );
};

export default Item;
