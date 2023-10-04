//checking git hub commit

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductScreen from "./src/Screens/ProductsScreen";
import ProductDetailsScreen from "./src/Screens/ProductDetailsScreen";
import ShoppingCart from "./src/Screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailsScreen /> */}

      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
