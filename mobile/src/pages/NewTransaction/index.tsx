import React from 'react';
import {Text} from 'react-native';

import {Header} from '../../components';

import {Container} from './styles';

const NewTransaction: React.FC = () => {
   return (
      <>
         <Header />
         <Container>
            <Text>NewTransaction</Text>
         </Container>
      </>
   );
};

export default NewTransaction;
