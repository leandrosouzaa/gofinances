/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {ScrollView} from 'react-native';

import {Header, Card, Item} from '../../components';

import {Container, Background, CardView, ListTitle, ListView} from './styles';

const Dashboard: React.FC = () => {
   return (
      <>
         <Header />
         <Container>
            <Background />
            <CardView>
               <ScrollView
                  horizontal
                  contentContainerStyle={{
                     paddingHorizontal: 16,
                  }}
                  showsHorizontalScrollIndicator={false}>
                  <Card
                     title="Entradas"
                     icon="arrow-up-circle"
                     iconColor="#12A454"
                     value={12.0}
                  />

                  <Card
                     title="Saídas"
                     icon="arrow-down-circle"
                     iconColor="#E83F5B"
                     value={12.0}
                  />

                  <Card
                     title="Total"
                     icon="dollar-sign"
                     value={120000.0}
                     backgroundColor="#FF872C"
                  />
               </ScrollView>
            </CardView>
            <ListView>
               <ListTitle>Listagem</ListTitle>
               <ScrollView showsVerticalScrollIndicator={false}>
                  <Item
                     title="Desafio"
                     type="outcome"
                     value={12000000}
                     date="12/18/2020"
                     category="Alimentação"
                  />
               </ScrollView>
            </ListView>
         </Container>
      </>
   );
};

export default Dashboard;
