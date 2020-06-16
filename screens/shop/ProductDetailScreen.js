import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Button,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const ProductDetailScreen = (props) => {
  const productId = props.route.params.productId;
  const selectProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          title="Add to Cart"
          onPress={() => {
            console.log("clicked");
          }}
          color={Colors.primary}
        />
      </View>
      <Text style={styles.price}>${selectProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>${selectProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    marginVertical: 20,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
export default ProductDetailScreen;
