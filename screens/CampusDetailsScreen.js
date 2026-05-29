import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";

const CampusDetailsScreen = ({ route, navigation }) => {
  const {
    name,
    focus,
    image,
    description,
    color,
    students,
    teachers,
    courses,
    address,
    phone,
    email,
  } = route.params;

  return (
    <ScrollView style={styles.container}>

      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.focus}>{focus}</Text>

        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: color }]}>{students}</Text>
            <Text style={styles.statLabel}>Studenten</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: color }]}>{teachers}</Text>
            <Text style={styles.statLabel}>Leerkrachten</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: color }]}>{courses}</Text>
            <Text style={styles.statLabel}>Opleidingen</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Over deze campus</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Adres</Text>
          <Text style={styles.infoText}>{address}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoTitle}>Telefoon</Text>
          <Text style={styles.infoText}>{phone}</Text>
        </View>

        <View style={styles.infoBlock}>
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
  image: {
    width: "100%",
    height: 280,
    resizeMode: "cover",
  },
  content: {
    padding: 24,
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000",
  },
  focus: {
    fontSize: 22,
    color: "#364153",
    marginTop: 8,
    marginBottom: 28,
  },
  statsSection: {
    backgroundColor: "#000000",
    borderRadius: 24,
    padding: 24,
    marginBottom: 34,
  },
  statItem: {
    alignItems: "center",
    marginBottom: 28,
  },
  statNumber: {
    fontSize: 34,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#99A1AF",
    fontSize: 17,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 18,
  },
  description: {
    fontSize: 18,
    lineHeight: 30,
    color: "#364153",
    marginBottom: 30,
  },
  infoBlock: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  infoText: {
    fontSize: 17,
    color: "#4B5563",
    marginTop: 4,
  },
});

export default CampusDetailsScreen;