import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/Button";
import SocialButton from "../components/SocialButton";
import google from "../assets/google.png";
import facebook from "../assets/facebook.jpg";
import x from "../assets/x.png";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="enter username or email address"
        autoCapitalize="none"
      />
      <TextInput style={styles.input} placeholder="password" secureTextEntry />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forget Password?</Text>
      </TouchableOpacity>

      <CustomButton
        text="login"
        onPress={() => console.log("login pressed")}
        style={{ marginTop: 15 }}
      />
      <View style={styles.orConatiner}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>
      <View style={styles.SocialButton}>
        <SocialButton
          logo={google}
          text="Continue with Google"
          onPress={() => console.log("social button pressed")}
        />
        <SocialButton
          logo={facebook}
          text="Continue with Google"
          onPress={() => console.log("social button pressed")}
        />
        <SocialButton
          logo={x}
          text="Continue with Google"
          onPress={() => console.log("social button pressed")}
        />
      </View>
      <View style={styles.lastText}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUp}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  heading: {
    // backgroundColor: "#c8d750",
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#d7d5d5",
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "black",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: 33,
    // backgroundColor: "brown",
  },
  forgotPasswordText: {
    color: "blue",
  },
  orConatiner: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 35,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  orText: {
    marginHorizontal: 10,
  },
  SocialButton: {
    marginTop: 30,
  },
  lastText: {
    flexDirection: "row",
    marginTop: 40,
    alignSelf: "flex-end",
    marginRight: 30,
  },
  signUp: {
    color: "blue",
    paddingLeft: 5,
  },
});
