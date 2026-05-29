import React from "react";
import { StyleSheet, Text, ScrollView, Image, View } from "react-native";

const CampusDetailsScreen = ({ route }) => {
  const {
    name,
    focus,
    description,
    students,
    teachers,
    courses,
    address,
    phone,
    email,
    color,
    image,
    detailImage,
  } = route.params;

  const cleanDescription = description
    ?.replace(/<\/p>/g, "\n\n")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .trim();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={detailImage?.uri ? detailImage : image}
          style={styles.image}
        />

        <View style={styles.overlay} />

        <View style={styles.heroContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.focus}>{focus}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.statsBox}>
          <Text style={[styles.statNumber, { color: color }]}>{students}</Text>
          <Text style={styles.statLabel}>Studenten</Text>

          <Text style={[styles.statNumber, { color: color }]}>{teachers}</Text>
          <Text style={styles.statLabel}>Leerkrachten</Text>

          <Text style={[styles.statNumber, { color: color }]}>{courses}</Text>
          <Text style={styles.statLabel}>Opleidingen</Text>
        </View>

        <Text style={styles.sectionTitle}>Over deze campus</Text>
        <Text style={styles.description}>{cleanDescription}</Text>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Adres</Text>
          <Text style={styles.infoText}>{address}</Text>

          <Text style={styles.infoTitle}>Telefoon</Text>
          <Text style={styles.infoText}>{phone}</Text>

          <Text style={styles.infoTitle}>Email</Text>
          <Text style={styles.infoText}>{email}</Text>
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
    position: "relative",
  },

  image: {
    width: "100%",
    height: 360,
    resizeMode: "cover",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: 360,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  heroContent: {
    position: "absolute",
    bottom: 35,
    left: 24,
    right: 24,
  },

  name: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  focus: {
    fontSize: 22,
    color: "#FFFFFF",
  },

  content: {
    padding: 24,
  },

  statsBox: {
    backgroundColor: "#000000",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",
    marginBottom: 40,
  },

  statNumber: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 18,
  },

  statLabel: {
    color: "#9CA3AF",
    fontSize: 18,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },

  description: {
    fontSize: 20,
    lineHeight: 34,
    color: "#364153",
    marginBottom: 35,
  },

  infoBlock: {
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

export default CampusDetailsScreen;