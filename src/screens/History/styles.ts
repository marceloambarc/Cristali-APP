import { StyleSheet } from "react-native";
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
    paddingTop: 20,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 35
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 24,
  },
  subtitleContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  orderRow: {
    flexDirection: 'row',
    marginBottom: 28
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
    paddingHorizontal: 90,
    overflow: 'hidden'
  }
});