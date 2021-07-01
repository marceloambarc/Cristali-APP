import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';
import { user } from '../../utils/user';

interface User {
  id: number;
  name: string;
}

export function Home({}: User){
  const navigation = useNavigation();

  function handleHistoryNavigation(){
    navigation.navigate('History');
  }

  function handleSavedSaleNavigation(){
    navigation.navigate('SavedSale');
  }

  function handleNewSaleNavigation(){
    navigation.navigate('NewSale');
  }

  function handleSignOut(){
    navigation.navigate('SignIn');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Logo />

        <View style={styles.banner}>
          <Text style={styles.username}>{ user.name }</Text>
          <Text style={styles.title}>CRISTALI</Text>
        </View>

        <View style={styles.painel}>
          <View style={styles.painelButton}>
            <CristaliButton 
              color={`${theme.colors.Config}`} 
              title="Histórico"
              onPress={handleHistoryNavigation}
            />
          </View>
          <View style={styles.painelButton}>
            <CristaliButton 
              color={`${theme.colors.Continue}`} 
              title="Carregar Venda"
              onPress={handleSavedSaleNavigation}
            />
          </View>
          <View style={styles.painelButton}>
            <CristaliButton
              color={`${theme.colors.Continue}`} 
              title="Nova Venda" 
              onPress={handleNewSaleNavigation}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerRow}>
            <CristaliButton 
              color={`${theme.colors.Cancel}`} 
              title="Sair"
              onPress={handleSignOut}
            />
          </View>
          <View style={styles.footerRow}>

          </View>
          
        </View>
       
      </View>
    </Background>
  );
}