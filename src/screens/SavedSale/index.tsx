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
    <>
    <StatusBar
      barStyle='dark-content'
      backgroundColor={theme.colors.input}
    />
    <Header
      title='Vendas Abertas'
      haveClose
    />
    <View style={styles.container}>


      <View style={styles.searchContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Número da Venda</Text>
        </View>
        <View style={styles.inputContainer}>
          <CristaliInput 
            onChangeText={setSearchNumber}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CristaliButton 
            title='Carregar'
            color={`${theme.colors.Continue}`}
            onPress={handleLoadSale}
          />
        </View>
      </View>

      <Divider />

      <CristaliList
        handleOrderSelect={handleOrderSelect}
      />
    </View>
    </>
  );
}