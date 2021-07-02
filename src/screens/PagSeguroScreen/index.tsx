import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles';

import { Header } from '../../components/Header';
import { CristaliInput } from '../../components/CristaliInput';
import { Divider } from '../../components/Divider';
import { CristaliButton } from '../../components/CristaliButton';
import { Banner } from '../../components/Banner';

export function PagSeguroScreen(){
  const navigation = useNavigation();

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
        title='Checkout'
        haveBack
      />
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={[styles.title, {fontSize: 30}]}>PagSeguro</Text>
        </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <CristaliInput />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Celular</Text>
            <CristaliInput />
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
              <CristaliInput />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Celular</Text>
              <CristaliInput />
            </View>

            <View style={styles.code}>
              <View style={styles.codeRow}>
                <View style={styles.codeCol}>
                  <Text style={styles.inputText}>Validade</Text>
                  <CristaliInput 
                    textAlign='center'
                    maxLength={5}
                  />
                </View>
                <View style={styles.codeCol}>
                  <Text style={styles.inputText}>Cód. de Verificação</Text>
                  <CristaliInput 
                    textAlign='center'
                    maxLength={3}
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
            onPress={handleConcludeSale}
          />
        </View>   
      </View>
    </ScrollView>
  );
}