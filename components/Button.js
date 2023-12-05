import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

function Button({ onPress, text }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.textContainer}> {text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    // marginTop:10,
    // margin:20,
  },
  pressed: {
    opacity: 0.5,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,

  },
  textContainer: {
    color: "white",
    fontSize: 16,
  },
});
