import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-around'
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 16
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 14,
    paddingBottom: 20
  }
})