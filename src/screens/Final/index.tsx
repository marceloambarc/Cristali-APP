import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { CristaliButton } from '../../components/CristaliButton';

import { styles } from './styles';
import { theme } from '../../global/styles';

export function Final(){
  const navigation = useNavigation();

  function handleBeggining(){
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Logo />

        <View style={styles.banner}>
          <Text style={styles.username}>Venda Concluída</Text>
          <Text style={styles.title}>CRISTALI</Text>
        </View>

        <View style={styles.footer}>
          <CristaliButton 
            color={`${theme.colors.Success}`} 
            title="Início"
            onPress={handleBeggining}
          />
        </View>
       
      </View>
    </Background>
  );
}