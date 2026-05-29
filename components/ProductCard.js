import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const ProductCard = ({
  title,
  description,
  price,
  image,
  category,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <Text style={styles.category}>{category}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.price}>€ {price}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Bekijk product" color="#86BC25" onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },

  category: {
    alignSelf: "flex-start",
    backgroundColor: "#EDF7E6",
    color: "#86BC25",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginLeft: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 12,
    marginHorizontal: 16,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4B5563",
    marginTop: 8,
    marginHorizontal: 16,
  },

  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#86BC25",
    marginTop: 14,
    marginHorizontal: 16,
  },

  buttonContainer: {
    margin: 16,
  },
});

export default ProductCard;
