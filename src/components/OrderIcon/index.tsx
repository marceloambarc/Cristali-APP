import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export function OrderIcon(){
  //const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
        <Image 
          source={require("../../assets/cristali.png")} 
          style={styles.image}
          resizeMode="cover"
        />
    </View>
  );
}