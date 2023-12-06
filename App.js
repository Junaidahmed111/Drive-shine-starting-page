import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="mainScreen" component={MainScreen} />
        <stack.Screen name="loginScreen" component={LoginScreen} />
        <stack.Screen name="signupScreen" component={LoginScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
