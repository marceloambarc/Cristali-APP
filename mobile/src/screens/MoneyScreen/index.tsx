import React, { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from '../../hooks/auth';
import uuid from 'react-native-uuid';

import { CristaliButton } from '../../components/CristaliButton';
import { CristaliInput } from '../../components/CristaliInput';

import { COLLECTION_ITEMS } from '../../config/storage';
import { CheckoutProps } from '../Checkout';
import { ItemProps } from '../NewSale';

import { styles } from './styles';
import { theme } from '../../global/styles';
import { api } from '../../services/api';


interface MoneyProps {
  isMoney?: boolean
}

export function MoneyScreen(){
  const { user, token } = useAuth();
  const navigation = useNavigation();

  const route = useRoute();
  const orderParams = route.params as CheckoutProps;
  const [loading, setLoading] = useState(true);
  const [items, setItems] =  useState<ItemProps[]>([]);

  const moneyParams = route.params as MoneyProps;
  const isMoney = moneyParams.isMoney;

  const [paymentMethod, setPaymentMethod] = useState('');

  async function loadItems(){
    const response = await AsyncStorage.getItem(COLLECTION_ITEMS);
    const storage: ItemProps[] = response ? JSON.parse(response) : [];

    setItems(storage);
    setLoading(false);
  }

  useEffect(() => {
    if(!loading)
      return;
    loadItems();
  },[]);

  var generatedId = 0;

  async function generateId(){
    generatedId++;
  }

  function handleFinal(){
    const notes = paymentMethod + ' '+ orderParams.notes;
    if(isMoney){
      api.post('order',{
        userId: user.id?.toString(),
        token: token,
        code: "ex_00001",
        totalprice: orderParams.price,
        notes: notes,
        items,
        client: {
          nomefinalcli: orderParams.client,
          phone: orderParams.telephone,
          email: orderParams.email,
          notes: "Nota do cliente"
        }
      }).then(() => {
        navigation.setParams({moneyParams: null});
        navigation.navigate('Final');
      }).catch(err => {
        alert(err.message);
      });

    }else{
      api.post('order',{
        userId: user.id,
        token: token,
        code: "ex_00001",
        totalprice: orderParams.price,
        notes: orderParams.notes,
        items,
        client: {
          nomefinalcli: orderParams.client,
          phone: orderParams.telephone,
          email: orderParams.email,
          notes: "Nota do cliente"
        }
      }).then(() => {
        navigation.setParams({moneyParams: null});
        navigation.navigate('Final');
      }).catch(err => {
        alert(err.message);
      });

    }
  }

  return (
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        keyboardVerticalOffset={(Platform.OS === 'ios')? 0 : 0}
        contentContainerStyle={{backgroundColor: 'transparent'}}
        behavior={ Platform.OS === 'ios'? 'padding' : undefined }
      >
        <View style={styles.container}>

          <View style={styles.banner}>
            <Text style={styles.title}>Atenção {user?.nomecli}</Text>
            <Text style={styles.text}>
              Você está recebendo com outra forma de 
              pagamento sem ser pelo PAGSEGURO, ao 
              confirmar esta transação, não significa que a
              empresa irá receber o valor,

              O valor deve ser acertado posteriormente 
              com o departamento financeiro da Cristali.
            </Text>
          </View>

          {
            isMoney?
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Digite a forma de pagamento.</Text>
              <CristaliInput 
                clientInput
                value={paymentMethod}
                onChangeText={setPaymentMethod}
              />
            </View>
            
            :
            <View />
          }

          {
            items.map(item => {
              generateId();
              return (
                <Text key={generatedId}>{item.title}</Text>
              )
            })
          }

          {
            loading?
              <ActivityIndicator color={`${theme.colors.primary}`} size='large' style={{marginTop: 70}} />
            :

            <View style={styles.footer}>
              <CristaliButton 
                color={`${theme.colors.Success}`}
                title="Finalizar"
                onPress={handleFinal}
              />
            </View>
          }
        
        </View>
      </KeyboardAvoidingView>
  );
}