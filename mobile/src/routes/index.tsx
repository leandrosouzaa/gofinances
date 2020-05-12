import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, NewTransaction} from '../pages';

const Route = createStackNavigator();

const Routes: React.FC = () => {
   return (
      <Route.Navigator screenOptions={{headerShown: false}}>
         <Route.Screen name="Dashboard" component={Dashboard} />
         <Route.Screen name="NewTransaction" component={NewTransaction} />
      </Route.Navigator>
   );
};

export default Routes;
