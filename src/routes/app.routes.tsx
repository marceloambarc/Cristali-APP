import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { History } from '../screens/History';
import { SavedSale } from '../screens/SavedSale';
import { NewSale } from '../screens/NewSale';
import { InsertProduct } from '../screens/InsertProduct';
import { Checkout } from '../screens/Checkout';
import { PagSeguroScreen } from '../screens/PagSeguroScreen';
import { Final } from '../screens/Final';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
  return(
    <Navigator
      headerMode="none"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="History" component={History} />
      <Screen name="SavedSale" component={SavedSale} />
      <Screen name="NewSale" component={NewSale} />
      <Screen name="InsertProduct" component={InsertProduct} />
      <Screen name="Checkout" component={Checkout} />
      <Screen name="PagSeguro" component={PagSeguroScreen} />
      <Screen name="Final" component={Final} />
    </Navigator>
  );
}