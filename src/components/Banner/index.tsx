import React from "react";
import { View, Text } from "react-native";

import { styles } from './styles';

export function Banner(){
  return (
    <View style={styles.container}>
      <View style={styles.banner} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bandeiras Aceitas</Text>
      </View>
    </View>
  );
}