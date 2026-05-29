import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import StudyCard from "../components/StudyCard";

const studiesData = [
  {
    id: 1,
    name: "Applicatie- en databeheer",
    campus: "Zandpoort",
    grade: "3de graad",
    duration: "2 jaar",
    description:
      "Of je nu wetenschapper of ondernemer bent, zonder informatica kan je niet. Leer werken met data, apps en digitale systemen.",
    color: "#EF2B20",
  },
  {
    id: 2,
    name: "Duaal leren",
    campus: "Nekkerspoel",
    grade: "3de graad",
    duration: "2 jaar",
    description: "Combineer leren op school met ervaring op de werkvloer.",
    color: "#DEDC00",
  },
  {
    id: 3,
    name: "Maatschappij en welzijn",
    campus: "Botaniek",
    grade: "2de graad",
    duration: "2 jaar",
    description: "Voor leerlingen met interesse in zorg, welzijn en mensen.",
    color: "#E9509A",
  },
];

const campuses = [
  "",
  "Nekkerspoel",
  "Stassart",
  "Caputsteen",
  "Pitzemburg",
  "Botaniek",
  "Zandpoort",
];

const StudyFinderScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("");

  const filteredStudies = studiesData.filter(
    (study) =>
      study.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCampus === "" || study.campus === selectedCampus),
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Vind jouw opleiding</Text>
        <Text style={styles.heroText}>
          Ontdek welke opleiding perfect bij jou past. Filter op interesse,
          niveau en campus.
        </Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Zoek op naam, interesse of trefwoord..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <View style={styles.filterSection}>
          {campuses.map((campus) => (
            <Pressable
              key={campus}
              style={[
                styles.filterButton,
                selectedCampus === campus && styles.activeFilterButton,
              ]}
              onPress={() => setSelectedCampus(campus)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCampus === campus && styles.activeFilterText,
                ]}
              >
                {campus === "" ? "Alle" : campus}
              </Text>
            </Pressable>
          ))}
        </View>

        {filteredStudies.map((study) => (
          <StudyCard
            key={study.id}
            name={study.name}
            campus={study.campus}
            grade={study.grade}
            duration={study.duration}
            description={study.description}
            color={study.color}
            onPress={() => navigation.navigate("StudyDetails", study)}
          />
        ))}
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
    backgroundColor: "#86BC25",
    paddingVertical: 70,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 42,
    lineHeight: 48,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  heroText: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
  },

  content: {
    padding: 20,
  },

  input: {
    backgroundColor: "#FFFFFF",
    height: 58,
    borderRadius: 24,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 40,
  },

  filterSection: {
    marginBottom: 45,
  },

  filterButton: {
    backgroundColor: "#EEF0F2",
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 24,
    marginBottom: 12,
  },

  activeFilterButton: {
    backgroundColor: "#86BC25",
  },

  filterText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#364153",
  },

  activeFilterText: {
    color: "#FFFFFF",
  },
});

export default StudyFinderScreen;
