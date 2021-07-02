import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 10,
    marginTop: 40,
    marginBottom: 50
  },
  username: {
    fontFamily: theme.fonts.logo,
    color: theme.colors.input,
    fontSize: 24,
  },
  title: {
    fontFamily: theme.fonts.logo,
    color: theme.colors.input,
    fontSize: 64,
    lineHeight: 70
  },
  painel: {
    paddingHorizontal: 24,
    marginBottom: 70
  },
  painelButton: {
    width: '100%',
    paddingVertical: 10,
  },
  footer: {
    paddingHorizontal: 24,
    flexDirection: 'row'
  },
  footerRow: {
    width: '50%',
    justifyContent: 'flex-start'
  }
});