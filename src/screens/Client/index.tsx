import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Divider } from "../../components/Divider";
import { CristaliList } from "../../components/CristaliList";
import { OrderProps } from "../../components/Order";

import { CristaliInput } from "../../components/CristaliInput";
import { CristaliButton } from "../../components/CristaliButton";

import { styles } from "./styles";
import { theme } from "../../global/styles";

export function Client(){
  const [searchNumber, setSearchNumber] = useState('0');
  const [searchName, setSearchName] = useState('');
  const [searchTelephone, setSearchTelephone] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchNotes, setSearchNotes] = useState('');

  const [allowPress, setAllowPress] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if(searchName != '' && searchName != undefined){
      setAllowPress(true);
    }else{
      setAllowPress(false);
    }
  },[searchName]);

  function handleOrderSelect(orderSelect: OrderProps){
    setSearchNumber(orderSelect.number);
    setSearchName(orderSelect.client);
    setSearchTelephone(orderSelect.telephone);
    setSearchEmail(orderSelect.email);
    setSearchNotes(orderSelect.notes);
  }

  function Validate(){
    if(searchName != '' && searchName != undefined){
      handleSelect();
    }else{
      alert('Selecione um Cliente');
    }
  }
  function handleSelect(){
    navigation.navigate('NewSale',{
      client: searchName,
      telephone: searchTelephone,
      email: searchEmail,
      notes: searchNotes
    });
  }

  return (
    <>
    <StatusBar
      barStyle='dark-content'
      backgroundColor={theme.colors.input}
    />
    <Header
      title='Clientes'
      haveBack
    />
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selecione o Cliente</Text>
        </View>
      </View>

      <Divider />

      <View style={styles.clientList}>
        <CristaliList
          handleOrderSelect={handleOrderSelect}
        />
      </View>

      <View style={styles.inputContainer}>
        <CristaliInput 
          value={searchName}
          textAlign='center'
        />
      </View>

      {
        allowPress?
        <CristaliButton 
          title="Selecionar"
          color={theme.colors.Config}
          onPress={Validate}
        />
        :      
        <CristaliButton 
          title="Selecionar"
          color={theme.colors.ContinueDesactivated}
          onPress={Validate}
        />
      }
    </View>
    </>
  );
}