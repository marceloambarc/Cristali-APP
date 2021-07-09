import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles';

import { OrderProps } from '../../components/Order';

import { Header } from '../../components/Header';
import { CristaliInput } from '../../components/CristaliInput';
import { Divider } from '../../components/Divider';
import { CristaliButton } from '../../components/CristaliButton';
import { Banner } from '../../components/Banner';

export function PagSeguroScreen(){
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrderProps;

  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [notes, setNotes] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [email, setEmail] = useState('');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirate, setExpirate] = useState('');
  const [code, setCode] = useState('');

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

  function Validate(){
    if(cardName!= '' && cardName != undefined){
      if(cardNumber != '' && cardNumber != undefined){
        if(expirate != '' && expirate != undefined){
          if(code != '' && code != undefined){
            handleConcludeSale();
          }else{
            alert('Insira do Código de Verificação do Cartão de Crédito');
          }
        }else{
          alert('Insira a Data de Validade do Cartão de Crédito');
        }
      }else{
        alert('Insira o Número do Cartão de Crédito');
      }
    }else{
      alert('Insira o Nome Impresso no Cartão');
    }
  }

  function handleConcludeSale(){
    navigation.navigate('Final');
  }

  return (
    <ScrollView>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.input}
      />
      <Header
        title='Pagamento'
        haveBack
      />
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Image 
            source={require('../../assets/pagseguro.png')}
            style={styles.pagseguroImage}
            resizeMode='contain'
          />
        </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email do(a) Cliente</Text>
            <CristaliInput 
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Celular do(a) Cliente</Text>
            <CristaliInput 
              value={telephone}
              onChangeText={setTelephone}
            />
          </View>

        <View style={styles.banner}>
          <Banner />
        </View>

        <Divider />

        <View style={styles.payment}>

          <View style={styles.titleContainer}>
            <Text style={[styles.title, {fontSize: 18}]}>Informações no cartão de Crédito</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Número do Cartão</Text>
              <CristaliInput 
                value={cardNumber}
                onChangeText={setCardNumber}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Nome Impresso no Cartão</Text>
              <CristaliInput 
                value={cardName}
                onChangeText={setCardName}
              />
            </View>

            <View style={styles.code}>
              <View style={styles.codeRow}>
                <View style={styles.codeCol}>
                  <Text style={styles.inputText}>Validade</Text>
                  <CristaliInput
                    textAlign='center'
                    maxLength={5}
                    value={expirate}
                    onChangeText={setExpirate}
                  />
                </View>
                <View style={styles.codeCol}>
                  <Text style={styles.inputText}>Cód. de Verificação</Text>
                  <CristaliInput 
                    textAlign='center'
                    keyboardType='number-pad'
                    maxLength={3}
                    value={code}
                    onChangeText={setCode}
                  />
                </View>
              </View> 
            </View>
            
          </View>
        </View>

        <View style={styles.footer}>
          <CristaliButton 
            title="Finalizar"
            color={`${theme.colors.Success}`}
            onPress={Validate}
          />
        </View>   
      </View>
    </ScrollView>
  );
}