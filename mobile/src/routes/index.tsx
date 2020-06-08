import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {Dashboard, NewTransaction} from '../pages';

const Route = createBottomTabNavigator();

const Routes: React.FC = () => {
   return (
      <Route.Navigator
         tabBarOptions={{
            activeTintColor: '#FF872C',
            style: {borderWidth: 0, height: 56},
         }}>
         <Route.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
               title: () => undefined,
               tabBarIcon: ({color}) => (
                  <View
                     style={{
                        ...styles.button,
                        borderBottomWidth: 2,
                        borderBottomColor: color,
                     }}>
                     <Icon name="list" color={color} size={21} />
                     <Text style={styles.text}>Listagem</Text>
                  </View>
               ),
            }}
         />
         <Route.Screen
            name="NewTransaction"
            component={NewTransaction}
            options={{
               title: () => undefined,
               tabBarIcon: ({color}) => (
                  <View
                     style={{
                        ...styles.button,
                        borderBottomWidth: 2,
                        borderBottomColor: color,
                     }}>
                     <Icon name="dollar-sign" color={color} size={21} />
                     <Text style={styles.text}>Cadastrar</Text>
                  </View>
               ),
            }}
         />
      </Route.Navigator>
   );
};

const styles = StyleSheet.create({
   button: {
      flex: 1,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
   },

   text: {
      marginLeft: 10,
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      color: '#969CB3',
   },
});

export default Routes;
