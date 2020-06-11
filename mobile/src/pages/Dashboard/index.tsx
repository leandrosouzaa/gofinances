/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {} from '@react-navigation/native';

import {ScrollView, Alert} from 'react-native';
import {format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../services/api';
import {Header, Card, Item} from '../../components';
import {CardLoader, ItemLoader} from '../../components/Loaders';

import {Container, Background, CardView, ListTitle, ListView} from './styles';

interface TransactionsProps {
   id: string;
   title: string;
   value: number;
   type: 'outcome' | 'income';
   created_at: string;
   formattedDate: string;
   category: {
      title: string;
   };
}

interface BalanceProps {
   income: number;
   outcome: number;
   total: number;
}

interface Props {
   navigation: any;
}

const Dashboard: React.FC<Props> = ({navigation}) => {
   const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
   const [balance, setBalance] = useState<BalanceProps>({} as BalanceProps);
   const [isLoading, setIsLoading] = useState(true);

   const loadTransactions = useCallback(async () => {
      try {
         setIsLoading(true);
         const res = await api.get('transactions');

         const formattedTransactions = res.data.transactions.map(
            (t: TransactionsProps) => {
               return {
                  ...t,
                  formattedDate: format(
                     parseISO(t.created_at),
                     "dd'/'MM'/'yyyy",
                     {
                        locale: ptBR,
                     },
                  ),
               };
            },
         );

         setTransactions(formattedTransactions.reverse());
         setBalance(res.data.balance);
         setIsLoading(false);
      } catch (err) {
         console.log(err);
         Alert.alert(
            'Erro :(',
            'Não foi possível carregar suas transações, verifique sua conexão e tente novamente',
         );
      }
   }, []);

   useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
         console.log('chamou');
         loadTransactions();
      });

      return unsubscribe;
   }, [navigation, loadTransactions]);

   useEffect(() => {
      loadTransactions();
   }, [loadTransactions]);

   const lastIncome = useMemo(() => {
      const income = transactions.find((t) => t.type === 'income');

      if (income === undefined) {
         return 'Você não tem uma ultima transação';
      }
      return format(
         parseISO(income.created_at),
         "'Última entrada' dd 'de' MMMM",
         {
            locale: ptBR,
         },
      );
   }, [transactions]);

   const lastOutcome = useMemo(() => {
      const outcome = transactions.find((t) => t.type === 'outcome');

      if (outcome === undefined) {
         return 'Você não tem uma última transação';
      }
      return format(
         parseISO(outcome.created_at),
         "'Última saída' dd 'de' MMMM",
         {
            locale: ptBR,
         },
      );
   }, [transactions]);

   const lastTransaction = useMemo(() => {
      const transaction = transactions.find((t) => t.type);

      if (transaction === undefined) {
         return 'Você não tem uma última transação';
      }
      return format(
         parseISO(transaction.created_at),
         "'Última movimentação' dd 'de' MMMM",
         {
            locale: ptBR,
         },
      );
   }, [transactions]);

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
                  {isLoading && (
                     <>
                        <CardLoader />
                        <CardLoader />
                        <CardLoader />
                     </>
                  )}

                  {balance && !isLoading && (
                     <>
                        <Card
                           title="Saldo disponível"
                           icon="dollar-sign"
                           value={balance.total}
                           backgroundColor="#FF872C"
                           last={lastTransaction}
                        />

                        <Card
                           title="Entradas"
                           icon="arrow-up-circle"
                           iconColor="#12A454"
                           value={balance.income}
                           last={lastIncome}
                        />

                        <Card
                           title="Saídas"
                           icon="arrow-down-circle"
                           iconColor="#E83F5B"
                           value={balance.outcome}
                           last={lastOutcome}
                        />
                     </>
                  )}
               </ScrollView>
            </CardView>
            <ListView>
               <ListTitle>Listagem</ListTitle>
               <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{marginBottom: 150}}>
                  {isLoading && (
                     <>
                        <ItemLoader />
                        <ItemLoader />
                        <ItemLoader />
                        <ItemLoader />
                     </>
                  )}
                  {transactions && !isLoading && (
                     <>
                        {transactions.map((t) => (
                           <Item
                              key={t.id}
                              title={t.title}
                              type={t.type}
                              value={t.value}
                              date={t.formattedDate}
                              category={t.category.title}
                           />
                        ))}
                     </>
                  )}
               </ScrollView>
            </ListView>
         </Container>
      </>
   );
};

export default Dashboard;
