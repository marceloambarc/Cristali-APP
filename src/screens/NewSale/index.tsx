import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../global/styles";

import { OrderProps } from "../../components/Order";

import { Divider } from "../../components/Divider";
import { CristaliInput } from "../../components/CristaliInput";
import { TextArea } from "../../components/TextArea";
import { CristaliButton } from "../../components/CristaliButton";
import { Header } from "../../components/Header";

export function NewSale(){
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrderProps;

  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if(params){
      setClient(params.client);
      setTelephone(params.telephone);
      setEmail(params.email);
      setNotes(params.notes);
    }
    setLoading(false);
  },[params]);

  function handleGoBack(){
    navigation.navigate('Home');
  }

  function handleInsertNewProduct(){
    navigation.navigate('InsertProduct');
  }

  function handleContinue(){
    navigation.navigate('Checkout');
  }

  if(loading){
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.input}
      />
      <Header
        title='Nova Venda'
        haveBack
        haveClose
      />
      <View style={styles.container}>
        <View style={styles.clientArea}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dados do cliente</Text>
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
              />
            </View>
          </View>

          <Divider />

          <View style={styles.insertProduct}>
            <CristaliButton 
              title="Inserir Novo Produto"
              color={`${theme.colors.Continue}`}
              onPress={handleInsertNewProduct}
            />
          </View>

          <Divider />

          <View style={styles.footer}>
            <View style={styles.footerContainer}>
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
  );
}