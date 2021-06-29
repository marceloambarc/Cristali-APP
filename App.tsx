import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Nunito_800ExtraBold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans';
import { StyleSheet, Text, View, StatusBar  } from 'react-native';


import { theme } from './src/global/styles';
import { Background } from './src/components/Background';
import { Logo } from './src/components/Logo';
import { CristaliInput } from './src/components/CristaliInput';
import { CristaliButton } from './src/components/CristaliButton';

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
      </View>

      <CristaliButton title='Entrar' />

    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: theme.fonts.logo,
    fontSize: 64,
    marginTop: 15,
    lineHeight: 75
  },
  credentials: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 80,
  },
  credentialsRow: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cristaliInputText: {
    fontFamily: theme.fonts.text,
    fontSize: 15,
    lineHeight: 20.46,
    color: theme.colors.input,
    marginBottom: 15
  }
});
