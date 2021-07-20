import React, { useState, } from 'react';
import { Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { CristaliInput } from '../../components/CristaliInput';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';

export function SignIn(){
  const { loading, signIn } = useAuth();
  const [cgce, setCgce] = useState('');
  const [senha, setPassword] = useState('');

  function handleSignIn(){
    signIn({cgce, senha});
  }
  
  if(loading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={`${theme.colors.primary}`} />
      </View>
    );
  }else{
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
                value={cgce}
                peachpuff
                onChangeText={setCgce}
              />
            </View>
            <View style={styles.credentialsRow}>
              <Text style={styles.cristaliInputText}>SENHA</Text>
              <CristaliInput 
                textAlign='center'
                peachpuff
                value={senha}
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
}
