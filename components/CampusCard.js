import react from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CampusCard = ({ name, focus, image, color, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <View style={styles.overlay} />

        <View style={[styles.colorDot, { backgroundColor: color }]} />

        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>

          <Text style={styles.focus}>{focus}</Text>

          <Text style={[styles.link, { color: color }]}>Ontdek meer →</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 260,
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 25,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  imageRadius: {
    borderRadius: 22,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  colorDot: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  content: {
    padding: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  focus: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 4,
  },

  link: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 14,
  },
});

export default CampusCard;