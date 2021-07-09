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
  productArea: {
    paddingTop: 20,
    width: '100%',
  },
  titleContainer: {
    paddingVertical: 35
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.title,
    fontSize: 24,
  },
  productData: {
    marginTop: 24
  },
  productInput: {
    width: '100%',
    marginBottom: 10
  },
  productTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  productTextCol: {

  },
  productText: {
    justifyContent: 'flex-start',
    marginBottom: 10,
    fontFamily: theme.fonts.text,
    color: theme.colors.text
  },
  productBannerText: {
    fontFamily: theme.fonts.text,
    fontSize: 15,
    color: theme.colors.text
  },
  productLabel: {
    fontFamily: theme.fonts.text,
    fontSize: 10,
    color: theme.colors.text,
    paddingTop: 5
  },
  buttonContainer: {
    paddingVertical: 24
  },
  footer: {
    paddingVertical: 24,
    marginBottom: 40
  },
  total: {
    justifyContent: 'center',
    alignItems: 'center'
  },  
  totalText: {
    fontFamily: theme.fonts.heading,
    fontSize: 24,
    color: theme.colors.title,
    marginBottom: 19,
  },
  insertButton: {
    marginBottom: 63
  }
})