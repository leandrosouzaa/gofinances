import React from 'react';
import {Text} from 'react-native';

import Menu from '../../components/Menu';

import {Container} from './styles';

const NewTransaction: React.FC = () => {
   return (
      <Container>
         <Text>NewTransaction</Text>
         <Menu />
      </Container>
   );
};

export default NewTransaction;
