import React from 'react';
import {Container, Title, Value, Details, DetailText} from './styles';

interface ItemProps {
   type: 'outcome' | 'income';
}

const Item: React.FC<ItemProps> = ({type, ...rest}) => {
   return (
      <Container {...rest}>
         <Title>Desenvolvimento de Site</Title>
         <Value type={type}>{type === 'outcome' && '- '}R$ 12.000,00</Value>
         <Details>
            <DetailText>Vendas</DetailText>
            <DetailText>12/04/2020</DetailText>
         </Details>
      </Container>
   );
};

export default Item;
