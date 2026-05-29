import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const NewsCard = ({
  title,
  description,
  image,
  category,
  campus,
  date,
  color,
  onPress,
}) => {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Image source={image} style={styles.image} />

      <View style={styles.topInfo}>
        <Text style={[styles.category, { backgroundColor: color }]}>
          {category}
        </Text>
        <Text style={[styles.topText, { color: color }]}> {campus}</Text>
      </View>

      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonText, { color: color }]}>Lees meer →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 25,
    overflow: "hidden",
    borderLeftWidth: 5,
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },
  topInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginHorizontal: 16,
  },
  category: {
    color: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontWeight: "bold",
  },
  topText: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16,
  },
  date: {
    color: "#6B7280",
    marginTop: 10,
    marginHorizontal: 16,
    fontSize: 15,
  },
  title: {
    fontSize: 24,
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
  button: {
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NewsCard;
