import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/logo.png";
import CustomButton from "../components/Button";

function MainScreen({ navigation }) {
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
        <CustomButton
          onPress={() => navigation.navigate("loginScreen")}
          text="Login"
        />
        <CustomButton
          onPress={() => console.log("Signup button pressed")}
          text="Signup"
        />
      </View>
      {/* <View style={styles.guestButtonContainer}>
        <CustomButton onPress={() => console.log("Guest Button pressed")} text="Guest" />
      </View> */}
    </View>
  );
}

export default MainScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d37a7a",
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    paddingTop: 100,
    paddingLeft: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
  },
  sloganText: {
    fontSize: 20,
    paddingLeft: 20,
  },
  imgContainer: {
    paddingTop: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  guestButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginTop: 30,
  },
});
