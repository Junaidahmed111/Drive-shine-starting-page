import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function CustomButton({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    backgroundColor: "black",
    paddingVertical: 15,
    marginTop: 15,
  },
  textContainer: {
    color: "white",
    fontSize: 16,
  },
  text: {
    color: "red",
    fontSize: 16,
  },
});
