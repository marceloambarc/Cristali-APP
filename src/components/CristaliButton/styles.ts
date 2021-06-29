import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.Continue,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.input,
    fontFamily: theme.fonts.text,
    fontSize: 15,
    textAlign: 'center'
  }
});