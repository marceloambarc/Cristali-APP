import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: theme.colors.secondary,
    color: theme.colors.text,
    borderRadius: 20,
    fontFamily: theme.fonts.text,
    fontSize: 13,
    paddingHorizontal: 16,
  }
});