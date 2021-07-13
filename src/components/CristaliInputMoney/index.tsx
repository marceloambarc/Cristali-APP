import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import { styles } from './styles';

interface Props extends TextInputMaskProps {
  clientInput?: boolean;
  peachpuff?: boolean;
  productInsert?: boolean;
}

export function CristaliInputMoney({ clientInput, peachpuff = false, productInsert = false, ...rest } : Props){
  return (
    <TextInputMask 
      style={[
        styles.container, 
        clientInput 
          ? 
          styles.extend 
          : 
          styles.desactivated, 
        peachpuff
          ? 
          styles.color2 
          : 
          styles.color1,
        productInsert
          ?
          styles.inserted
          :
          styles.insert
        ]}
      { ...rest }
    />
  );
}