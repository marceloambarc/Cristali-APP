import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import { CristaliButton } from '../../components/CristaliButton';
import { CristaliInput } from '../../components/CristaliInput';

import { styles } from './styles';
import { theme } from '../../global/styles';

interface MoneyProps {
  isMoney?: boolean
}

export function MoneyScreen(){
  const { user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();

  const moneyParams = route.params as MoneyProps;
  const isMoney = moneyParams.isMoney;

  const [paymentMethod, setPaymentMethod] = useState('');

  function handleFinal(){
    if(isMoney){

    }else{
      navigation.setParams({moneyParams: null});
      navigation.navigate('Final');
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

          <View style={styles.footer}>
            <CristaliButton 
              color={`${theme.colors.Success}`}
              title="Finalizar"
              onPress={handleFinal}
            />
          </View>
        
        </View>
      </KeyboardAvoidingView>
  );
}