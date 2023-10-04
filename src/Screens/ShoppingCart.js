import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import cart from "../data/cart";
import CartListItem from "../component/CartListItem";

const shoppingCart = () => {
  const shoppingCartTotal = () => (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>sourceubTotal</Text>
        <Text style={styles.text}>400</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>400</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>total</Text>
        <Text style={styles.textBold}>400</Text>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartTotal}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonStyle}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: 500,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
  },
});
export default shoppingCart;
