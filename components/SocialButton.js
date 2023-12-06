import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native";
function SocialButton({ logo, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.socialButton}>
      <View style={styles.buttonContent}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SocialButton;

const styles = StyleSheet.create({
  socialButton: {
    backgroundColor: "#dbd6d6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 10,
  },
  buttonContent: {
    flexDirection: "row",
    // alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    textAlign: "center",
  },
});
