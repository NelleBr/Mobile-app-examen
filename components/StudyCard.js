import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const StudyCard = ({ name, campus, grade, duration, description, color, onPress }) => {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <View style={[styles.badge, { backgroundColor: color }]}>
        <Text style={styles.badgeText}>D/A</Text>
      </View>

      <Text style={styles.title}>{name}</Text>
      <Text style={[styles.campus, { color: color }]}>● {campus}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.duration}>◷ {duration}</Text>

        <View style={[styles.gradeBadge, { backgroundColor: color }]}>
          <Text style={styles.gradeText}>{grade}</Text>
        </View>
      </View>

      <Pressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
        <Text style={styles.buttonText}>Meer info →</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderRadius: 28,
    padding: 24,
    marginBottom: 28,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 24,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "bold",
    color: "#364153",
    marginBottom: 16,
  },
  campus: {
    fontSize: 20,
    marginBottom: 18,
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    color: "#364153",
    marginBottom: 26,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },
  duration: {
    fontSize: 18,
    color: "#364153",
    marginRight: 18,
  },
  gradeBadge: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  gradeText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default StudyCard;