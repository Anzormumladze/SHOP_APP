import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={() => props.onViewDetail()}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title="View details"
            onPress={props.onViewDetail}
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={props.onAddToCart}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "59%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "30%",
    paddingHorizontal: 10,
  },
});

export default ProductItem;
