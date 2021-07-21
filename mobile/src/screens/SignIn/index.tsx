import React, { useState, } from 'react';
import { Text, View, StatusBar, ActivityIndicator, KeyboardAvoidingView, Platform, Alert, ScrollView } from 'react-native';
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

  async function handleSignIn(){
    try{
      await signIn({cgce, senha})
    }catch(err){
      Alert.alert(err);
    }
  } 

  return (
    <KeyboardAvoidingView
      style={{flexGrow: 1}}
      keyboardVerticalOffset={(Platform.OS === 'ios')? 0 : 0}
      contentContainerStyle={{backgroundColor: 'transparent'}}
      behavior={ Platform.OS === 'ios'? 'padding' : undefined }
    >
      <ScrollView 
        bounces= {false}
        style={{flex: 1}}
      >
        <Background>
          <View style={styles.container}>
        
            <StatusBar
              backgroundColor={theme.colors.input}
              translucent={true}
            />
        
            <Logo 
              subtext
            />
        
            {
              loading? <ActivityIndicator size='large' color={`${theme.colors.primary}`} />
              :
              <>
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
              </>
            }
        
          </View>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
