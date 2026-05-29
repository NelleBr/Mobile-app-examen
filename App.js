import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import NewsDetailsScreen from "./screens/NewsDetailsScreen";
import CampusDetailsScreen from "./screens/CampusDetailsScreen";
import StudyFinderScreen from "./screens/StudyFinderScreen";
import StudyDetailsScreen from "./screens/StudyDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "#000000",
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "#F5F5F5",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Busleyden Atheneum" }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ title: "Product" }}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetailsScreen}
          options={{ title: "Nieuws" }}
        />
        <Stack.Screen
          name="CampusDetails"
          component={CampusDetailsScreen}
          options={{ title: "Campus" }}
        />
        <Stack.Screen
          name="StudyFinder"
          component={StudyFinderScreen}
          options={{ title: "Studiezoeker" }}
        />
        <Stack.Screen
          name="StudyDetails"
          component={StudyDetailsScreen}
          options={{ title: "Opleiding" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
