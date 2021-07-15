import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { History } from '../screens/History';
import { SavedSale } from '../screens/SavedSale';
import { NewSale } from '../screens/NewSale';
import { Client } from '../screens/Client';
import { EditProduct } from '../screens/EditProduct';
import { Checkout } from '../screens/Checkout';
import { MoneyScreen } from '../screens/MoneyScreen';
import { PagSeguroScreen } from '../screens/PagSeguroScreen';
import { Final } from '../screens/Final';

import { TelaTeste } from '../screens/TelaTeste';

const AppStack = createStackNavigator();

export function AppRoutes(){
  return(
    <AppStack.Navigator
      headerMode="none"
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="History" component={History} />
      <AppStack.Screen name="SavedSale" component={SavedSale} />
      <AppStack.Screen name="NewSale" component={NewSale} />
      <AppStack.Screen name="Client" component={Client} />
      <AppStack.Screen name="EditProduct" component={EditProduct} />
      <AppStack.Screen name="Checkout" component={Checkout} />
      <AppStack.Screen name="Money" component={MoneyScreen} />
      <AppStack.Screen name="PagSeguro" component={PagSeguroScreen} />
      <AppStack.Screen name="TelaTeste" component={TelaTeste} />
      <AppStack.Screen name="Final" component={Final} />
    </AppStack.Navigator>
  );
}