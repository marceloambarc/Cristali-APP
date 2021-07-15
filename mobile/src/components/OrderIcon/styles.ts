import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  image : {
    width: 50,
    height: 50
  }
});