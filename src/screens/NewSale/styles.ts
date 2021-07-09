import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F3F5',
    paddingHorizontal: 24,
  },
  clientArea: {
    paddingTop: Dimensions.get('window').height * 0.01,
    width: '100%',
  },
  titleContainer: {
    paddingVertical: Dimensions.get('window').height *0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 24,
  },
  clientData: {
    marginTop: 24
  },
  clientInput: {
    width: '100%',
    marginBottom: 10
  },
  inputTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  inputTextCol: {

  },
  inputBannerText: {
    fontFamily: theme.fonts.text,
    fontSize: 15,
    color: theme.colors.text
  },
  inputLabel: {
    fontFamily: theme.fonts.text,
    fontSize: 10,
    color: theme.colors.text,
    paddingTop: 5
  },
  subtitle: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 18,
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
  productContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width * .1,
    marginTop: Dimensions.get('window').height * .03
  },
  insertProduct: {
    paddingVertical: 24,
    marginBottom: 10
  },
  footer: {
    paddingVertical: 24,
  },
  footerContainer: {
    paddingVertical: 20,
  }
});