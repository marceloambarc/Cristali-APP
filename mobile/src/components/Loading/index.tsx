import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { theme } from '../../global/styles';

export function Loading(){
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size='large' color={`${theme.colors.primary}`} />
    </View>
  );
}