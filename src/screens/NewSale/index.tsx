import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StatusBar, KeyboardAvoidingView, Platform, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { OrderProps } from "../../components/Order";

import { Divider } from "../../components/Divider";
import { CristaliInput } from "../../components/CristaliInput";
import { TextArea } from "../../components/TextArea";
import { CristaliButton } from "../../components/CristaliButton";
import { Header } from "../../components/Header";
import { SearchButton } from "../../components/SearchButton";
import { InsertList } from "../../components/InsertList";
export function NewSale(){
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrderProps;

  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [price, setPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState(price);


  useEffect(() => {
    if(params){
      setClient(params.client);
      setTelephone(params.telephone);
      setEmail(params.email);
      setNotes(params.notes);
      setTotalPrice(params.price);
    }
    setLoading(false);
  },[params]);

  function handleContinue(){
    navigation.navigate('Checkout',{
      client,
      telephone,
      email,
      notes,
      price
    });
  }

  if(loading){
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      keyboardVerticalOffset={(Platform.OS === 'ios')? 7 : 0}
      contentContainerStyle={{backgroundColor: 'transparent'}}
      behavior={(Platform.OS === 'ios')? "padding" : undefined}
    >
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.input}
      />
      <Header
        title='Nova Venda'
        haveClose
      />
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
      <View
        style={styles.container}
      >
        <View style={styles.clientArea}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dados do cliente</Text>
            <SearchButton
              color={`${theme.colors.Config}`}
              onPress={() => navigation.navigate('Client')}
            />
          </View>
          <Divider />

          <View style={styles.clientData}>
            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Nome
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 50 caracteres
                  </Text>
                </View>
              </View>
              <CristaliInput 
                clientInput
                value={client}
              />
            </View>

            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Telefone
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 9 caracteres
                  </Text>
                </View>
              </View>
              <CristaliInput 
                clientInput
                value={telephone}
              />
            </View>

            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Email
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 50 caracteres
                  </Text>
                </View>
              </View>
              <CristaliInput 
                clientInput
                value={email}
              />
            </View>

            <View style={styles.clientInput}>
              <View style={styles.inputTextRow}>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputBannerText}>
                    Anotações
                  </Text>
                </View>
                <View style={styles.inputTextCol}>
                  <Text style={styles.inputLabel}>
                    Máximo de 100 caracteres
                  </Text>
                </View>
              </View>
              <TextArea 
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                autoCapitalize="none"
                value={notes}
              />
            </View>
          </View>



          <View style={[styles.titleContainer, {justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={styles.title}>Produtos</Text>
          </View>

          <Divider />

            <View style={[styles.titleContainer, {justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={styles.subtitle}>Total Pedido</Text>
          </View>

          <View style={styles.orderRow}>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Peças</Text>
              <CristaliInput 
                textAlign='center'
              />
            </View>
            <View style={styles.orderCol}>
              <Text style={styles.orderText}>Preço</Text>
              <CristaliInput 
                textAlign='center'
                value={totalPrice}
              />
            </View>
          </View>

          <Divider />

          <InsertList />

          <Divider />

          <View style={styles.footer}>
            <View>
              <CristaliButton 
                title="Continuar"
                color={`${theme.colors.Success}`}
                onPress={handleContinue}
              />
            </View>
          </View>

        </View>
      </View>
      
    </ScrollView>
    </KeyboardAvoidingView>
  );
}