import React, { useEffect, useState, useRef } from 'react';
import { Alert, Platform, BackHandler, Linking } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Nunito_800ExtraBold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans';

import { deviceToken } from './src/services/token';
import { AuthProvider } from './src/hooks/auth';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_600SemiBold,
    WorkSans_400Regular
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(loading === false){
      return;
    }else{
      registerForPushNotificationsAsync();
    }
  },[]);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      console.log(existingStatus);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
        console.log(status);
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      sendToken(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }

  async function sendToken(token: string){
    deviceToken.post('token',{
      token
    }).then(() => {
      setLoading(false);
    }).catch(err => {
      if(err.message.includes("409")){
        alert('Token Já Cadastrado.');
        setLoading(false);
      }else if(err.messa.includes("400")){
        Alert.alert(
          "Bem-Vindo!",
          "Para iniciar o Aplicativo Cristali, você deve autorizar as Permissões de acesso ao Telefone.",
          [
            { text: "OK", onPress: () => Linking.openSettings().then(() => {
              setLoading(false);
            }) },
          ]
        );
      }else{
        Alert.alert('Ops', 'Problema a Conexão, Verique sua Rede.');
        setLoading(false);
      }
    });
  }

  if(!fontsLoaded || loading){
    return (
      <AppLoading />
    );
  }
  
  return (
    <AuthProvider >
      <Background>
          <Routes />
      </Background>
    </AuthProvider>
  );
}