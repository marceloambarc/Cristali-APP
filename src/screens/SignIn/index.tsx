import React, { useState, } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { CristaliInput } from '../../components/CristaliInput';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';

export function SignIn(){
  const { signIn } = useAuth();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(){
    signIn();
  }
  
    return (
      <Background>
        <View style={styles.container}>
  
          <StatusBar
            backgroundColor={theme.colors.input}
            translucent={true}
          />
  
          <Logo 
            subtext
          />
  
          <View style={styles.credentials}>
            <View style={styles.credentialsRow}>
              <Text style={styles.cristaliInputText}>USUÁRIO</Text>
              <CristaliInput 
                textAlign='center'
                value={'hhhh'}
                peachpuff
                onChangeText={setLogin}
              />
            </View>
            <View style={styles.credentialsRow}>
              <Text style={styles.cristaliInputText}>SENHA</Text>
              <CristaliInput 
                textAlign='center'
                peachpuff
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
          </View>

            <View style={styles.buttonContainer}>
              <CristaliButton
              color={`${theme.colors.Success}`}
              title='Entrar'
              onPress={handleSignIn}
              />
            </View>
  
        </View>
      </Background>
    );
  }
