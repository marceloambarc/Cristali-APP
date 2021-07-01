import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 

import { styles } from './styles';

interface HeaderProps {
  title: string;
  haveBack?: boolean;
  haveClose?: boolean;
}

export function Header({
  title,
  haveBack,
  haveClose
} : HeaderProps ){
  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        {
          haveBack?
          <Ionicons name="arrow-back-outline" size={24} color="black" />
          :
          <View style={styles.closeSpace} />
        }
        <Text>{ title }</Text>
        {
          haveClose?
          <AntDesign name="close" size={24} color="black" />
          :
          <View style={styles.closeSpace} />
        }
      </View>
      
    </View>
  );
}