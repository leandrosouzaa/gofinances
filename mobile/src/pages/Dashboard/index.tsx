import React from 'react';

import {Text} from 'react-native';

import Menu from '../../components/Menu';

import {Container} from './styles';

const Dashboard: React.FC = () => {
   return (
      <Container>
         <Text>Dashboard</Text>
         <Menu />
      </Container>
   );
};

export default Dashboard;
