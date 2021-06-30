import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Nunito_800ExtraBold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_600SemiBold,
    WorkSans_400Regular
  });

  if(!fontsLoaded){
    return (
      <AppLoading />
    );
  }
  
  return (
    <Background>
      <Routes />
    </Background>
  );
}