import * as React from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";

enableScreens();

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerBackTitle: {
            fontFamily: "open-sans-bold",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="All Products" component={ProductsOverviewScreen} />
        <Stack.Screen
          name="Products Detail"
          component={ProductDetailScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
