/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Header, Card, Item} from '../../components';

import {ScrollView} from 'react-native';

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
                     value={'12.000,00'}
                  />

                  <Card
                     title="Saídas"
                     icon="arrow-down-circle"
                     iconColor="#E83F5B"
                     value={'12.000,00'}
                  />

                  <Card
                     title="Total"
                     icon="dollar-sign"
                     value={'12.000,00'}
                     backgroundColor="#FF872C"
                  />
               </ScrollView>
            </CardView>
            <ListView>
               <ListTitle>Listagem</ListTitle>
               <ScrollView showsVerticalScrollIndicator={false}>
                  <Item type="outcome" />
               </ScrollView>
            </ListView>
         </Container>
      </>
   );
};

export default Dashboard;
