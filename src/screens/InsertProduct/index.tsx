import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

export function InsertProduct(){
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    </ScrollView>
  );
}