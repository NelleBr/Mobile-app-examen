import React from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";

const StudyDetailsScreen = ({ route, navigation }) => {
  const { name, campus, grade, duration, description, color } = route.params;

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

        <Text style={styles.text}>{description}</Text>

        <Text style={styles.text}>
          Inzicht en kennis van informatica is een enorme meerwaarde om ideeën
          vorm te geven en toe te passen. In de ondernemerswereld heeft
          informatica een enorme stempel gedrukt.
        </Text>

        <Text style={styles.text}>
          Een goede kennis van informatica gaat veel verder dan websites maken
          of werken met computers. Het is een sector die voortdurend verandert.
        </Text>

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
    paddingTop: 20,
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
    fontSize: 64,
    lineHeight: 70,
    fontWeight: "bold",
    marginBottom: 30,
  },

  heroDescription: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 38,
  },

  content: {
    backgroundColor: "#F5F5F5",
    padding: 24,
  },

  sectionTitle: {
    fontSize: 54,
    lineHeight: 58,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 30,
  },

  text: {
    fontSize: 22,
    lineHeight: 38,
    color: "#364153",
    marginBottom: 28,
  },
});

export default StudyDetailsScreen;
