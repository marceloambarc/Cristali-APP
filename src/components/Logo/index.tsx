import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export function Logo(){
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require("../../assets/cristali.png")} 
      />
    </View>
  );
}