import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Image, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles';

interface Props extends TouchableWithoutFeedbackProps {
  title: string;
  bcolor: string;
  tcolor: string;
}


export function CheckoutButton({ title, bcolor, tcolor, ...rest } : Props){
  const { gradient1, gradient2 } = theme.colors
  return (
    <TouchableWithoutFeedback
      { ...rest }
    >
      <LinearGradient 
        style={[styles.container, {borderColor: bcolor}]}
        colors={[ gradient1, gradient2 ]}
      >
        <Image
          style={styles.icon}
          source={require("../../../assets/cristali.png")}
        />
        <Text style={[styles.title, {color: tcolor}]}>{ title }</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}