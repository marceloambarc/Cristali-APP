import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 50
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 44
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    marginBottom: 40
  },
  payment: {

  },
  button: {
    paddingVertical: 10
  },
  text: {
    fontFamily: theme.fonts.text,
    color: theme.colors.text,
    fontSize: 15
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  checkoutButtonRow: {
    flexDirection: 'row',
    marginBottom: 15
  },
  checkoutButtonCol: {
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  footer: {
    marginBottom: 20,
    marginTop: 40
  }
});