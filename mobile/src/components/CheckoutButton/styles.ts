import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').height * .4,
    height: 160,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '100%',
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 14,
    paddingBottom: 20
  }
})