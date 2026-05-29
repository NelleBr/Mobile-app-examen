import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

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

const StudyFinderScreen = () => {
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
          <View
            key={study.id}
            style={[styles.studyCard, { borderColor: study.color }]}
          >
            <View style={[styles.badge, { backgroundColor: study.color }]}>
              <Text style={styles.badgeText}>D/A</Text>
            </View>

            <Text style={styles.studyTitle}>{study.name}</Text>

            <Text style={[styles.campusText, { color: study.color }]}>
              ● {study.campus}
            </Text>

            <Text style={styles.description}>{study.description}</Text>

            <View style={styles.infoRow}>
              <Text style={styles.duration}>◷ {study.duration}</Text>

              <View
                style={[styles.gradeBadge, { backgroundColor: study.color }]}
              >
                <Text style={styles.gradeText}>{study.grade}</Text>
              </View>
            </View>

            <Pressable
              style={[styles.infoButton, { backgroundColor: study.color }]}
            >
              <Text style={styles.infoButtonText}>Meer info →</Text>
            </Pressable>
          </View>
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

  studyCard: {
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

  studyTitle: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "bold",
    color: "#364153",
    marginBottom: 16,
  },

  campusText: {
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
    color: "#6B7280",
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

  infoButton: {
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  infoButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default StudyFinderScreen;