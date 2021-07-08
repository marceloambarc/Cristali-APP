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
  const [pagSeguroPressed, setPagSeguroPressed] = useState(false);
  const [moneyPressed, setMoneyPressed] = useState(false);

  const navigation = useNavigation()

  function Validate(){
    if(!pagSeguroPressed && !moneyPressed){
      alert('Selecione um modo de pagamento!');
    }else{
      handlePagSeguroNavigate();
    }
  }

  function handlePagSeguroNavigate(){
    navigation.navigate('PagSeguro');
  }

  async function handlePagSeguroPressed(){
    setMoneyPressed(false);
    setPagSeguroPressed(true);
    if(pagSeguroPressed){
      setPagSeguroPressed(false);
    }
  }

  async function handleMoneyPressed(){
    setPagSeguroPressed(false);
    setMoneyPressed(true);
    if(moneyPressed){
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