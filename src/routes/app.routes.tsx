import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
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
      <Screen name="Client" component={Client} />
      <Screen name="EditProduct" component={EditProduct} />
      <Screen name="Checkout" component={Checkout} />
      <Screen name="Money" component={MoneyScreen} />
      <Screen name="PagSeguro" component={PagSeguroScreen} />
      <Screen name="TelaTeste" component={TelaTeste} />
      <Screen name="Final" component={Final} />
    </Navigator>
  );
}