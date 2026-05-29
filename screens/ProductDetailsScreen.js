import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { title, description, image, price, category } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>€{price.toFixed(2)}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.quantityRow}>
          <Text style={styles.label}>Aantal:</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={decreaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              onPress={increaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.totalPrice}>
          Totaal: €{(price * quantity).toFixed(2)}
        </Text>

        <Pressable style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Toevoegen aan winkelmandje</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  image: {
    width: "100%",
    height: 360,
    resizeMode: "cover",
    backgroundColor: "#FFFFFF",
  },

  content: {
    padding: 24,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -20,
  },

  category: {
    alignSelf: "flex-start",
    backgroundColor: "#EDF7E6",
    color: "#86BC25",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 28,
  },

  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#86BC25",
    marginBottom: 22,
  },

  description: {
    fontSize: 20,
    lineHeight: 32,
    color: "#364153",
    marginBottom: 35,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginRight: 18,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e8f8dd",
    borderRadius: 16,
    overflow: "hidden",
  },

  quantityButton: {
    backgroundColor: "#EDF7E6",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  quantityButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },

  quantityText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 18,
    color: "#000000",
  },

  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 22,
  },

  cartButton: {
    backgroundColor: "#86BC25",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 30,
  },

  cartButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
