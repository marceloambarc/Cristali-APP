import React from 'react';
import { Text, View, StatusBar  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { CristaliInput } from '../../components/CristaliInput';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';

export function SignIn(){
  const navigation = useNavigation();

  function handleEnterApp(){
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>

        <StatusBar
          barStyle='light-content'
          backgroundColor={theme.colors.primary}
          translucent={true}
        />

        <Logo />
        <Text style={styles.logoText}>CRISTALI</Text>

        <View style={styles.credentials}>
          <View style={styles.credentialsRow}>
            <Text style={styles.cristaliInputText}>USUÁRIO</Text>
            <CristaliInput />
          </View>
          <View style={styles.credentialsRow}>
            <Text style={styles.cristaliInputText}>SENHA</Text>
            <CristaliInput />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CristaliButton
            color={`${theme.colors.Continue}`}
            title='Entrar' 
            onPress={handleEnterApp} 
          />
        </View>

      </View>
    </Background>
  );
}
