import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';

interface User {
  id: number;
  username: string;
}

export function Home({}: User){
  const route = useRoute();
  const userParams = route.params as User;
  const username = userParams.username;
  
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
        <View style={styles.logoContainer}>
          <Logo 
            subtext
          />
        </View>


        <View style={styles.banner}>
          <Text style={styles.username}>{ username }</Text>
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