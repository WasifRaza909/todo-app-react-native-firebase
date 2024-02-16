import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "./pages/GetStarted";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureDirection: "vertical-inverted",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
