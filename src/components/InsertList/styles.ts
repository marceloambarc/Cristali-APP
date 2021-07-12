import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  productContainer: {
    paddingVertical: Dimensions.get('window').height * 0.015
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Dimensions.get('window').height * .015
  },
  listButton: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: Dimensions.get('window').width * .007
  }
})