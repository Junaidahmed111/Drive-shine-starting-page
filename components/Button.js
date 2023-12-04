import { Pressable, StyleSheet } from "react-native";

function Button({ onPress, text }) {
  return (
   <View >
     <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      {text}
    </Pressable>
   </View>
  );
}

export default Button;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8e8eea'
    },
  pressed: {
    opacity: 0.5,
  },
});
