import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

import StudyCard from "../components/StudyCard";

const API_TOKEN =
  "07f0bc77da6f49822c32323358ecaf5cee340cee5656df5811aaacec243c6773";

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
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a18221c22a405f203a7113d/items",
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedStudies = (data.items || []).map((item) => ({
          id: item.id,
          name: item.fieldData?.name,
          campus: item.fieldData?.campus,
          grade: item.fieldData?.graad,
          duration: item.fieldData?.jaar,
          description: item.fieldData?.["korte-beschrijving"],
          content: item.fieldData?.beschrijving,
          color: item.fieldData?.["kleur-campus"],
          stream: item.fieldData?.stroom,
          category: item.fieldData?.["campus-categorie"],
          content: item.fieldData?.beschrijving,
        }));

        setStudies(formattedStudies);
      })
      .catch((error) => console.error("Error fetching studies:", error));
  }, []);

  const filteredStudies = studies.filter(
    (study) =>
      study.name?.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
