import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, StackActions, useRoute } from '@react-navigation/native';

import { UserProps } from '../Home';

import { Logo } from '../../components/Logo';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';

interface Props {
  res: string;
}

export function Final({res} : Props){
  const navigation = useNavigation();
  const route = useRoute();
  const userParams = route.params as UserProps;
  const responseParams = route.params as Props;

  const username = userParams.username;

  function handleBeggining(){
    navigation.dispatch(StackActions.push('Home',{
      username
    }));
  }

  return (
      <View style={styles.container}>
        <Logo />

        <View style={styles.banner}>
          <Text style={styles.title}>Venda Concluída</Text>
          <Text style={styles.title}>{responseParams.res}</Text>
        </View>

        <View style={styles.footer}>
          <CristaliButton 
            color={`${theme.colors.Success}`} 
            title="Início"
            onPress={handleBeggining}
          />
        </View>
       
      </View>
  );
}