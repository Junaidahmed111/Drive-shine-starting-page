import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textConatiner}>
        <Text style={styles.text}>Drive Shine</Text>
        <Text style={styles.sloganText}>Your Car's Spa on Wheels</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d37a7a",
  },
  textConatiner: {
    paddingTop: 100,
    paddingLeft: 30,
  },
  text: {
    backgroundColor: "#ffc800",
    fontWeight: "bold",
    fontSize: 40,
  },
  sloganText: {
    backgroundColor: "#968e6c",
    fontSize: 20,
    paddingLeft: 20,
  },
});
