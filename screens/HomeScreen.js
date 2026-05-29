import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Switch,
  Pressable,
} from "react-native";

import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";
import CampusCard from "../components/CampusCard";

const productsData = [
  {
    id: 1,
    title: "BA rompertje",
    description: "Wikkelrompertje met korte mouwen. 100% katoen.",
    price: 14,
    category: "Kleding",
    image: { uri: "https://placehold.co/600x400" },
  },
  {
    id: 2,
    title: "BA thermofles",
    description: "Thermofles van 790 ml.",
    price: 7,
    category: "Drinkflessen",
    image: { uri: "https://placehold.co/600x400" },
  },
];

const newsData = [
  {
    id: 1,
    title: "Leerlingen 2de graad PAV op uitstap naar Leuven",
    description: "De leerlingen gingen op uitstap naar Leuven.",
    category: "Activiteit",
    campus: "Nekkerspoel",
    date: "12 mei 2026",
    image: { uri: "https://placehold.co/600x400" },
  },
  {
    id: 2,
    title: "Internationale uitwisseling in Oslo",
    description: "Onze leerlingen namen deel aan Erasmus+.",
    category: "Activiteit",
    campus: "Zandpoort",
    date: "26 mei 2026",
    image: { uri: "https://placehold.co/600x400" },
  },
];

const campusesData = [
  {
    id: 1,
    name: "Nekkerspoel",
    focus: "Werken & Leren",
    color: "#DEDC00",
    description:
      "Campus Nekkerspoel richt zich op duaal leren en praktijkgericht onderwijs.",
    students: "150+",
    teachers: "100+",
    courses: "17",
    address: "Nekkerspoelstraat 74, 2800 Mechelen",
    phone: "015 55 55 61",
    email: "info@banekkerspoel.be",
    image: {
      uri: "https://placehold.co/600x400",
    },
  },
  {
    id: 2,
    name: "De Beemden",
    focus: "Buiten-Gewoon Leren",
    color: "#00AFCB",
    description:
      "Omdat iedere jongere anders leert, biedt BA De Beemden leerlinggerichte leertrajecten aan.",
    students: "150+",
    teachers: "100+",
    courses: "17",
    address: "Nekkerspoelstraat 74, 2800 Mechelen",
    phone: "015 55 55 61",
    email: "info@banekkerspoel.be",
    image: { uri: "https://placehold.co/600x400" },
  },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNews, setShowNews] = useState(true);

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredNews = newsData.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Busleyden Atheneum</Text>
      <Text style={styles.introText}>
        Ontdek onze campussen, nieuws en schoolshop.
      </Text>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Zoek een product of nieuwsartikel:</Text>
        <TextInput
          style={styles.input}
          placeholder="Zoeken..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Toon nieuws</Text>
        <Switch value={showNews} onValueChange={setShowNews} />
      </View>

      <Pressable style={styles.resetButton} onPress={() => setSearchQuery("")}>
        <Text style={styles.resetButtonText}>Reset zoeken</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Campussen</Text>

      {campusesData.map((campus) => (
        <CampusCard
          key={campus.id}
          name={campus.name}
          focus={campus.focus}
          color={campus.color}
          image={campus.image}
          onPress={() => navigation.navigate("CampusDetails", campus)}
        />
      ))}

      {showNews && (
        <>
          <Text style={styles.sectionTitle}>Nieuws</Text>

          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              description={news.description}
              category={news.category}
              campus={news.campus}
              date={news.date}
              image={news.image}
              onPress={() => navigation.navigate("NewsDetails", news)}
            />
          ))}
        </>
      )}

      <Text style={styles.sectionTitle}>Producten</Text>

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          image={product.image}
          onPress={() => navigation.navigate("ProductDetails", product)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  introText: {
    fontSize: 17,
    lineHeight: 25,
    color: "#4B5563",
    marginBottom: 25,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#111827",
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  resetButton: {
    backgroundColor: "#86BC25",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginBottom: 28,
    alignItems: "center",
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 18,
    marginTop: 10,
  },
});

export default HomeScreen;
