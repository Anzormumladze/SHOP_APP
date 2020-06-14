import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            navigation.navigate("Products Detail", {
              name: itemData.item.title,
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            console.log("CLICKED2");
          }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
