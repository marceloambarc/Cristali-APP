import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles';

import { OrderProps } from "../../components/Order";

import { Header } from '../../components/Header';
import { Divider } from '../../components/Divider';
import { CristaliButton } from '../../components/CristaliButton';
import { CristaliInput } from '../../components/CristaliInput';
import { CheckoutButton } from '../../components/CheckoutButton';

export function Checkout(){
  const [pagSeguroPressed, setPagSeguroPressed] = useState(false);
  const [moneyPressed, setMoneyPressed] = useState(false);
  const [alterPressed, setAlterPressed] = useState(false);

  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const navigation = useNavigation()
  const route = useRoute();
  const params = route.params as OrderProps;

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
    if(!pagSeguroPressed && !moneyPressed && !alterPressed){
      alert('Selecione um modo de pagamento!');
    }else{
      if(pagSeguroPressed){
        navigation.navigate('PagSeguro',{
          client,
          telephone,
          email,
          notes,
          price: totalPrice
        });
      }else if(moneyPressed){
        navigation.navigate('Money',{
          isMoney: false
        });
      }else{
        navigation.navigate('Money',{
          isMoney: true
        })
      }
    }
  }

  async function handlePagSeguroPressed(){
    setMoneyPressed(false);
    setAlterPressed(false);
    setPagSeguroPressed(true);
    if(pagSeguroPressed){
      setPagSeguroPressed(false);
    }
  }

  async function handleMoneyPressed(){
    setPagSeguroPressed(false);
    setMoneyPressed(true);
    setAlterPressed(false);
    if(moneyPressed){
      setMoneyPressed(false);
    }
  }

  async function handleAlterPressed(){
    setMoneyPressed(false);
    setPagSeguroPressed(false);
    setAlterPressed(true);
    if(alterPressed){
      setAlterPressed(false);
    }
  }

  return (
    <ScrollView>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={theme.colors.input}
      />
      <Header
        title='Checkout'
        haveBack
      />
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={[styles.title, {fontSize: 18}]}>Total Pedido</Text>
          <CristaliInput 
            textAlign='center'
            value={totalPrice}
            editable={false}
          />
        </View>

        <Divider />

        <View style={styles.payment}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {fontSize: 24}]}>Instruções para Pagamento</Text>
            <Text style={styles.text}>Selecione uma das formas de pagamento {'\n'}
                  abaixo, e aperte Continuar para prosseguir {'\n'}
                  com a venda.
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.checkoutButtonRow}>
            <View style={styles.checkoutButtonCol}>
              <CheckoutButton
                bcolor={`${theme.colors.text}`}
                tcolor={`${theme.colors.credit}`}
                title={`Receber com PagSeguro`}
                onPress={handlePagSeguroPressed}
                path={require('../../assets/pagseguro.png')}
                pressed={pagSeguroPressed}
              />
            </View >
          </View>
          <View style={styles.checkoutButtonRow}>
            <View style={styles.checkoutButtonCol}>
              <CheckoutButton
                bcolor={`${theme.colors.Success}`}
                tcolor={`${theme.colors.Success}`}
                title="Receber com Dinheiro"
                onPress={handleMoneyPressed}
                path={require('../../assets/money.png')}
                pressed={moneyPressed}
                />
            </View>
          </View>
          <View style={styles.checkoutButtonRow}>
            <View style={styles.checkoutButtonCol}>
              <CheckoutButton
                bcolor={`${theme.colors.Success}`}
                tcolor={`${theme.colors.credit}`}
                title="Outra forma de Pagamento"
                onPress={handleAlterPressed}
                path={require('../../assets/payment.png')}
                pressed={alterPressed}
                />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <CristaliButton 
            color={`${theme.colors.Success}`}
            title="Continuar"
            onPress={Validate}
          />
        </View>

      </View>
    </ScrollView>
  );
}