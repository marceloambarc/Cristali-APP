import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { History } from '../screens/History';
import { NewSale } from '../screens/NewSale';
import { InsertProduct } from '../screens/InsertProduct';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
  return(
    <Navigator
      headerMode="none"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="History" component={History} />
      <Screen name="NewSale" component={NewSale} />
      <Screen name="InsertProduct" component={InsertProduct} />
    </Navigator>
  );
}