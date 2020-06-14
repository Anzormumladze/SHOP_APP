import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  const productId = props.route.params.productId;
  const selectProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  return (
    <View>
      <Text>{selectProduct.title}</Text>
    </View>
  );
};

export default ProductDetailScreen;
