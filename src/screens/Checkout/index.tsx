import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles';

import { Header } from '../../components/Header';
import { Divider } from '../../components/Divider';
import { CristaliButton } from '../../components/CristaliButton';
import { CristaliInput } from '../../components/CristaliInput';
import { CheckoutButton } from '../../components/CheckoutButton';

export function Checkout(){
  const [creditPressed, setCreditPressed] = useState(false);
  const [debitPressed, setDebitPressed] = useState(false);
  const [pixPressed, setPixPressed] = useState(false);
  const [moneyPressed, setMoneyPressed] = useState(false);

  const navigation = useNavigation()

  function handlePagSeguroNavigate(){
    navigation.navigate('PagSeguro');
  }

  async function handleCreditPressed(){
    setCreditPressed(true);
    setDebitPressed(false);
    setPixPressed(false);
    setMoneyPressed(false);
    if(creditPressed === true){
      setCreditPressed(false);
    }
  }

  async function handleDebitPressed(){
    setDebitPressed(true);
    setCreditPressed(false);
    setPixPressed(false);
    setMoneyPressed(false);
    if(debitPressed === true){
      setDebitPressed(false);
    }
  }

  async function handlePixPressed(){
    setPixPressed(true);
    setDebitPressed(false);
    setCreditPressed(false);
    setMoneyPressed(false);
    if(pixPressed === true){
      setPixPressed(false);
    }
  }

  async function handleMoneyPressed(){
    setMoneyPressed(true);
    setPixPressed(false);
    setDebitPressed(false);
    setCreditPressed(false);
    if(moneyPressed === true){
      setMoneyPressed(false);
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
                title={`Receber com ${'\n'} Cartão de Crédito`}
                onPress={handleCreditPressed}
                path={require('../../assets/credit.png')}
                pressed={creditPressed}
              />
            </View >
            <View style={styles.checkoutButtonCol}>
              <CheckoutButton
                bcolor={`${theme.colors.debitBorder}`}
                tcolor={`${theme.colors.debit}`}
                title={`Receber com ${'\n'} Cartão de Débito`}
                onPress={handleDebitPressed}
                path={require('../../assets/debit.png')}
                pressed={debitPressed}
              />
            </View>
          </View>
          <View style={styles.checkoutButtonRow}>
            <View style={styles.checkoutButtonCol}>
              <CheckoutButton
                bcolor={`${theme.colors.text}`}
                tcolor={`${theme.colors.pix}`}
                title={`Receber com ${'\n'} PIX`}
                onPress={handlePixPressed}
                path={require('../../assets/pix.png')}
                pressed={pixPressed}
              />
            </View>
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
        </View>

        <View style={styles.footer}>
          <CristaliButton 
            color={`${theme.colors.Success}`}
            title="Continuar"
            onPress={handlePagSeguroNavigate}
          />
        </View>

      </View>
    </ScrollView>
  );
}