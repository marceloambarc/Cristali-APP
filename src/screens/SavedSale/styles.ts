import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24
  },
  searchContainer: {
    
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 18
  },
  inputContainer: {
    paddingBottom: 24
  },
  buttonContainer: {
    paddingBottom: 40
  }
});