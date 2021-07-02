import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 

import { styles } from './styles';
import { theme } from '../../global/styles';

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
        <View style={[styles.headerCol, styles.headerBorder, {alignItems: 'flex-start'}]}>
          {
            haveBack?
            <Ionicons name="arrow-back-outline" size={24} color={`${theme.colors.Config}`} />
            :
            <View style={styles.closeSpace} />
          }
        </View>
        <View style={[styles.headerCol, {alignItems: 'center'}]}>
          <Text style={styles.title}>{ title }</Text>
        </View>
        <View style={[styles.headerCol, styles.headerBorder, {alignItems: 'flex-end'}]}>
          {
            haveClose?
            <AntDesign name="close" size={24} color={`${theme.colors.close}`} />
            :
            <View style={styles.closeSpace} />
          }
        </View>
      </View>
      
    </View>
  );
}