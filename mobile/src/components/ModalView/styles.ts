import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  overlay: {
    backgroundColor: theme.colors.input,
    flex: 1
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.input,
    alignSelf: 'center',
    marginTop: 13,
  }
});