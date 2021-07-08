import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F3F5',
    paddingHorizontal: 24,
  },
  historyArea: {
    width: '100%',
    marginTop: Platform.OS === 'ios'? 70 : -20
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 24,
  },
  calendar: {
    marginRight: 24
  },
  subtitleContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  orderRow: {
    flexDirection: 'row',
    marginBottom: 22
  },
  orderCol: {
    width: '50%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderText: {
    fontFamily: theme.fonts.text,
    color: theme.colors.text,
    fontSize: 15,
    marginBottom: 9
  },
  dividerLimiter: {
    paddingHorizontal: 20,
    overflow: 'hidden'
  }
});