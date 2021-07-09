import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 34,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    marginBottom: Dimensions.get('window').height * .02
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});