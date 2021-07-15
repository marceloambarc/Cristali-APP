import React from 'react';
import { View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles';

export function InsertPhoto({ ...rest } : RectButtonProps){
  return (
    <View style={styles.border}>
      <RectButton
        style={styles.container}
        {...rest}
      >
        <MaterialCommunityIcons
          name="plus"
          color={theme.colors.Continue}
          size={24}
        />
      </RectButton>
    </View>

  );
}