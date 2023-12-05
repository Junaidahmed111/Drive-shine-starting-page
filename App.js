import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/logo.png";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Drive Shine</Text>
        <Text style={styles.sloganText}>Your Car's Spa on Wheels</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <View
          style={[
            styles.button,
            { marginHorizontal: 20, backgroundColor: "red" },
          ]}
        >
          <Button onPress={() => console.log("button pressed")} text="login" />
        </View>

        <View
          style={[
            styles.button,
            { marginHorizontal: 20, backgroundColor: "red" },
          ]}
        >
          <Button onPress={() => console.log("button pressed")} text="signup" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#d37a7a",
  },
  textContainer: {
    paddingTop: 100,
    paddingLeft: 30,
  },
  text: {
    // backgroundColor: "#ffc800",
    fontWeight: "bold",
    fontSize: 40,
  },
  sloganText: {
    // backgroundColor: "#968e6c",
    fontSize: 20,
    paddingLeft: 20,
  },
  imgContainer: {
    paddingTop: 70,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#ecb6b2",
    paddingBottom: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 50,
  },
  button: {
    flex: 1, // Equal flex to distribute space evenly
  },

  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
