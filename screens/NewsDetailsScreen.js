import React from "react";
import { StyleSheet, Text, ScrollView, Image, Pressable } from "react-native";

const NewsDetailsScreen = ({ route }) => {
  const { title, image, description, category, date } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.image}>Image</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 24,
  },

  backLink: {
    color: "#86BC25",
    fontSize: 18,
    marginBottom: 28,
  },

  category: {
    alignSelf: "flex-start",
    backgroundColor: "#86BC25",
    color: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 26,
  },

  title: {
    fontSize: 38,
    lineHeight: 46,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 24,
  },

  date: {
    fontSize: 17,
    color: "#364153",
    marginBottom: 28,
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 16,
    resizeMode: "cover",
    marginBottom: 30,
  },

  description: {
    fontSize: 20,
    lineHeight: 32,
    color: "#364153",
    marginBottom: 40,
  },
});

export default NewsDetailsScreen;
