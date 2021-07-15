import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: theme.colors.Continue,
    borderRadius: 20,
    borderStyle: 'dashed'
  },
  container: {
    height: 70,
    width: '100%',
    backgroundColor: theme.colors.input,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})