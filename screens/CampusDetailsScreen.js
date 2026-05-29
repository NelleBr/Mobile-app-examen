import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CampusDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busleyden Atheneum</Text>
      <Text style={styles.text}>CampusDetailsScreen werkt.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  text: {
    fontSize: 16,
    color: "#555555",
    marginTop: 10,
  },
});

export default CampusDetailsScreen;