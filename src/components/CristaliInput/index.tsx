import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from './styles';

interface Props extends TextInputProps {
  clientInput?: boolean
}

export function CristaliInput({ clientInput, ...rest } : Props){
  return (
    <TextInput 
      style={[styles.container, clientInput ? styles.extend : styles.desactivated]}
      {...rest}
    />
  );
}