import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar, Image, Alert } from 'react-native';
import { useNavigation, useRoute, StackActions } from '@react-navigation/native';

import { pgapi } from '../../services/pgapi';

import { styles } from './styles';
import { theme } from '../../global/styles';

import { CheckoutProps } from '../Checkout';

import { Header } from '../../components/Header';
import { CristaliInput } from '../../components/CristaliInput';
import { Divider } from '../../components/Divider';
import { CristaliButton } from '../../components/CristaliButton';
import { Banner } from '../../components/Banner';
import { api } from '../../services/api';

export function PagSeguroScreen(){
  const navigation = useNavigation();
  const route = useRoute();
  const orderParams = route.params as CheckoutProps;

  const [loading, setLoading] = useState(true);

  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [notes, setNotes] = useState('');
  const [email, setEmail] = useState('');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const [expirate, setExpirate] = useState('');
  const [expirateMonth, setExpirateMonth] = useState('');
  const [expirateYear, setExpirateYear] = useState('');

  const [code, setCode] = useState('');

  useEffect(() => {
    if(orderParams){
      setClient(orderParams.client);
      setTelephone(orderParams.telephone);
      setEmail(orderParams.email);
      setNotes(orderParams.notes);
    }
    setLoading(false);
  },[orderParams]);

  async function createCode(){
    return;
  }

  function Validate(){
    if(cardName!= '' && cardName != undefined){
      if(cardNumber != '' && cardNumber != undefined){
        if(expirate != '' && expirate != undefined){
          setExpirateMonth(expirate.split('/')[0]);
          setExpirateYear(expirate.split('/')[1]);
          if(code != '' && code != undefined){
            handleConcludeSale();
            //handleVerify()
          }else{
            alert('Insira do C??digo de Verifica????o do Cart??o de Cr??dito');
          }
        }else{
          alert('Insira a Data de Validade do Cart??o de Cr??dito');
        }
      }else{
        alert('Insira o N??mero do Cart??o de Cr??dito');
      }
    }else{
      alert('Insira o Nome Impresso no Cart??o');
    }
  }

  function handleConcludeSale(){
    api.post('order',{
      userId: "3944",
      token: "18IJ2B19H2JB188H82HLK1N2",
      code: "ex-00001",
      totalprice: orderParams.price,
      notes: orderParams.notes,
      items: [
        {
          itemname: "Produto1",
          price: "450,00",
          quantity: 1
        }
      ],
      client:{
          nomefinalcli: client,
          phone: telephone,
          email: email,
          notes: notes
      }
    }).then(() => {
      pgapi.post('charges',{
        reference_id: 'ex-00001',
        description: orderParams.notes,
        amount: {
          value: orderParams.price,
          currency: 'BRL'
        },
        payment_method: {
          type: 'CREDIT_CARD',
          installments: 1,
          capture: false,
          card: {
            number: cardNumber,
            exp_month: expirateMonth,
            exp_year: expirateYear,
            security_code: code,
            holder: {
              name: cardName
            }
          }
        },
        notification_urls: [
          "https://yourserver.com/nas_ecommerce/277be731-3b7c-4dac-8c4e-4c3f4a1fdc46/"
        ]
      }).then(res => {
        console.warn([res.status, res.data]);
      }).catch(err => {
        console.warn(err);
      });
    }).catch(err => {
      console.warn(err);
    })

    /*navigation.setParams({orderParams: null});
    navigation.navigate('Final',{
      username
    });*/
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
              autoCapitalize='none'
              autoCompleteType='off'
              autoCorrect={false}
              keyboardType='email-address'
            />            
            <CristaliInput 
            value={expirateMonth}
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            keyboardType='email-address'
            />
            <CristaliInput 
            value={expirateYear}
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            keyboardType='email-address'
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Celular do(a) Cliente</Text>
            <CristaliInput 
              value={telephone}
              onChangeText={setTelephone}
              keyboardType='phone-pad'
            />
          </View>

        <View style={styles.banner}>
          <Banner />
        </View>

        <Divider />

        <View style={styles.payment}>

          <View style={styles.titleContainer}>
            <Text style={[styles.title, {fontSize: 18}]}>Informa????es no cart??o de Cr??dito</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>N??mero do Cart??o</Text>
              <CristaliInput 
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType='number-pad'
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Nome Impresso no Cart??o</Text>
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
                    maxLength={7}
                    value={expirate}
                    onChangeText={setExpirate}
                    keyboardType='numbers-and-punctuation'
                  />
                </View>
                <View style={styles.codeCol}>
                  <Text style={styles.inputText}>C??d. de Verifica????o</Text>
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