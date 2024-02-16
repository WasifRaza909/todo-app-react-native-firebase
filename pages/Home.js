import React, { useLayoutEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import SvgComponent from "../components/SvgComponent";
import { SvgXml } from "react-native-svg";
import Clock from "../assets/clock.svg";

const logSVGContent = () => {
  const svgContent = require("../assets/clock.svg");
  console.log(svgContent);
};

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  logSVGContent();
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <StatusBar style="dark" />

        <View style={styles.topContainer}>
          <Image
            style={styles.image}
            source={require("../assets/shape-2.png")}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/home-img.png")}
            />
            <Text style={styles.textHeading}>Welcome to Onboard!</Text>
          </View>
        </View>
        <View>
          <Text style={styles.subText}>Good Afternoon</Text>
        </View>
        <View>
          <Text style={styles.subText}>Task list</Text>
          <View>
            <View>
              <Text>Daily Task</Text>
            </View>
            <View>
              <Text>HEllo World</Text>
              <SvgComponent icon={Clock} />
              <Text>{/* <SvgXml xml={<Clock />} width="301px" />; */}</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F3",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
    marginBottom: 0,
  },
  topContainer: {
    backgroundColor: "#FF8686",
    paddingBottom: 16,
  },
  mainImage: {
    width: 254,
    height: 194,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    color: "#FFFFFF",
  },
  textPara: {
    textAlign: "center",
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 16,
  },

  button: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FF8686",
    display: "flex",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "600",
    color: "#ffffff",
  },

  arrowContainer: {
    position: "relative",
    zIndex: 1,
  },
  backArrow: {
    position: "absolute",
    top: 35,
    left: 20,
    color: "#FF8686",
    padding: 8,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    marginBottom: 20,
  },

  inputsContainer: {
    width: "100%",
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  errorText: {
    position: "absolute",
    color: "red",
  },
  lastLabel: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: 6,
    flexDirection: "row",
  },
  signIn: {
    color: "#FF8686",
    marginBottom: 0,
  },
});
