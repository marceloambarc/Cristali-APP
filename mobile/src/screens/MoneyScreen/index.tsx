import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { UserProps } from '../Home';

import { CristaliButton } from '../../components/CristaliButton';
import { CristaliInput } from '../../components/CristaliInput';

import { styles } from './styles';
import { theme } from '../../global/styles';

interface MoneyProps {
  isMoney?: boolean
}

export function MoneyScreen(){
  const navigation = useNavigation();
  const route = useRoute();
  const moneyParams = route.params as MoneyProps;
  const userParams = route.params as UserProps;

  const username = userParams.username;
  const isMoney = moneyParams.isMoney;

  function handleFinal(){
    navigation.setParams({moneyParams: null});
    navigation.navigate('Final',{
      username
    });
  }

  return (
      <View style={styles.container}>

        <View style={styles.banner}>
          <Text style={styles.title}>Atenção {username}</Text>
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
  );
}