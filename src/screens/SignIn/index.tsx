import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_USERS } from '../../config/database';
import { UserProps } from '../Home';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { CristaliInput } from '../../components/CristaliInput';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';

export function SignIn(){
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isDigited, setIsDigited] = useState(false);

  const navigation = useNavigation();

  async function handleSetUser(){
    const response = await AsyncStorage.getItem(COLLECTION_USERS);
    const users : UserProps = response ? JSON.parse(response) : null;

    if(response){
      setLogin(users.username)
    }else{
      setLogin('');
    }
    setLoading(false);
  }

  useEffect(() => {
    handleSetUser();
    if(login !== '' && password !== ''){
      setIsDigited(true);
    }else{
      setIsDigited(false);
    }
  },[login, password])

  async function handleSignInWithSave(){
    const userData = {
      username: login,
      password: password
      //token: params.access_token
    }
  
    await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
  
    navigation.navigate('Home',{
      username: login,
      password
    });
  }

  async function handleSignInWithoutSave(){
    navigation.navigate('Home',{
      username: login,
      password
    });
  }

  async function handleSignIn(){
    try {
      //API IF(TRUE)
      const storage = await AsyncStorage.getItem(COLLECTION_USERS);
      if(storage){
        handleSignInWithoutSave()
      }else{
        Alert.alert(
          'Salvar Credenciais',
          'Deseja Salvar suas Credenciais?',
          [
            {
              text: "Sim",
              onPress: () => handleSignInWithSave(),
              style: 'default'
            },
            {
              text: "Não",
              onPress: () => handleSignInWithoutSave(),
              style: 'cancel'
            }
          ]
        );
      }
    }catch(err){
      Alert.alert('Credenciais Inválidas');
    }
  }

  function Validation(){
    if(login != '' && login != undefined){
      if(password != '' && password != undefined){
        handleSignIn();
      }else{
        alert('Insira sua Senha');
      }
    }else{
      alert('Insira seu Login');
    }
  }

  if(!loading){
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
                value={login}
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
  
          {
            isDigited? 
            <View style={styles.buttonContainer}>
              <CristaliButton
              color={`${theme.colors.Success}`}
              title='Entrar'
              onPress={Validation}
              />
            </View>
            :
            <View style={styles.buttonContainer} />
  
          }
  
        </View>
      </Background>
    );
  }else{
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }
}
