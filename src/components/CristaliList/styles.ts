import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    flatlist: {
      paddingVertical: 10
    }
  },
  text: {
    color: 'black'
  },
});