import React from 'react';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Item, ItemText} from './styles';

const Menu: React.FC = ({screen}) => {
   const navigation = useNavigation();

   return (
      <Container>
         <Item
            style={{backgroundColor: '#ff9000'}}
            onPress={() => navigation.navigate('Dashboard')}>
            <Icon size={21} name="list" />
            <ItemText>Listagem</ItemText>
         </Item>

         <Item onPress={() => navigation.navigate('NewTransaction')}>
            <Icon size={21} name="dollar-sign" />
            <ItemText>Cadastrar</ItemText>
         </Item>
      </Container>
   );
};

export default Menu;
