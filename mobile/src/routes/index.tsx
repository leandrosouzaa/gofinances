import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, NewTransaction} from '../pages';

const Route = createBottomTabNavigator();

const Routes: React.FC = () => {
   return (
      <Route.Navigator tabBarOptions={{style: {flexDirection: 'row'}}}>
         <Route.Screen name="Dashboard" component={Dashboard} />
         <Route.Screen name="NewTransaction" component={NewTransaction} />
      </Route.Navigator>
   );
};

export default Routes;
