import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
  logoText: {
    fontFamily: theme.fonts.logo,
    fontSize: 64,
    marginTop: 15,
  },
  credentials: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 70,
    marginBottom: 70,
  },
  credentialsRow: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cristaliInputText: {
    fontFamily: theme.fonts.text,
    fontSize: 15,
    lineHeight: 20.46,
    color: theme.colors.input,
    marginBottom: 10
  },
  buttonContainer: {
    paddingHorizontal: 24
  }
});