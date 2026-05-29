import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";

const NewsDetailsScreen = ({ route }) => {
  const {
    title,
    image,
    detailImage,
    description,
    content,
    category,
    campus,
    date,
    color,
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.category, { backgroundColor: color }]}>
        {category}
      </Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.info}>
        {campus} {date ? `• ${date}` : ""}
      </Text>

      <Image source={detailImage?.uri ? detailImage : image} style={styles.image} />

      <Text style={styles.description}>{content || description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 24,
  },
  category: {
    alignSelf: "flex-start",
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
    marginBottom: 20,
  },
  info: {
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