import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

const StudyDetailsScreen = ({ route }) => {
  const { name, campus, grade, duration, description, content, color } =
    route.params;

  const cleanContent = content
    ?.replace(/<\/h1>/g, "\n\n")
    .replace(/<\/h2>/g, "\n\n")
    .replace(/<\/h3>/g, "\n\n")
    .replace(/<\/p>/g, "\n\n")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .trim();

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.hero, { backgroundColor: color }]}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>D/A</Text>
        </View>

        <Text style={styles.title}>{name}</Text>
        <Text style={styles.heroDescription}>{description}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Over deze opleiding</Text>

        <Text style={styles.text}>{cleanContent}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Campus</Text>
          <Text style={styles.infoText}>{campus}</Text>

          <Text style={styles.infoTitle}>Graad</Text>
          <Text style={styles.infoText}>{grade}</Text>

          <Text style={styles.infoTitle}>Duur</Text>
          <Text style={styles.infoText}>{duration}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  hero: {
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 50,
  },

  badge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    alignSelf: "flex-start",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 30,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 48,
    lineHeight: 60,
    fontWeight: "bold",
    marginBottom: 30,
  },

  heroDescription: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 34,
  },

  content: {
    padding: 24,
  },

  sectionTitle: {
    fontSize: 44,
    lineHeight: 50,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 30,
  },

  text: {
    fontSize: 20,
    lineHeight: 34,
    color: "#364153",
    marginBottom: 35,
  },

  infoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 22,
    marginBottom: 40,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 12,
  },

  infoText: {
    fontSize: 18,
    color: "#364153",
    marginTop: 5,
    marginBottom: 10,
  },
});

export default StudyDetailsScreen;
