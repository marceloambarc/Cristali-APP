import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { CristaliButton } from "../../components/CristaliButton";
import { CristaliInput } from "../../components/CristaliInput";
import { Divider } from "../../components/Divider";
import { CristaliList } from "../../components/CristaliList";
import { OrderProps } from "../../components/Order";

import { styles } from "./styles";
import { theme } from "../../global/styles";

export function SavedSale(){
  const [searchNumber, setSearchNumber] = useState('0');

  const navigation = useNavigation();

  function handleOrderSelect(orderSelect: OrderProps){
    alert('Hello World!');
  }

  function handleLoadSale(){
    navigation.navigate('NewSale');
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.input}
      />
      <Header
        title='Vendas Abertas'
        haveClose
      />

      <View style={styles.searchContainer}>
        <Text>Número da Venda</Text>
        <CristaliInput 
          onChangeText={setSearchNumber}
        />
        <CristaliButton 
          title='Carregar'
          color={`${theme.colors.Config}`}
          onPress={handleLoadSale}
        />
      </View>

      <Divider />

      <CristaliList
        handleOrderSelect={handleOrderSelect}
      />
    </View>
  );
}