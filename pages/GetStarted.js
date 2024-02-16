import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";

const GetStarted = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Register");
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Image style={styles.image} source={require("../assets/shape.png")} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/home-png.png")}
        />

        <Text style={styles.textHeading}>Gets things with TODs</Text>
        <Text style={styles.textPara}>
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
          Consequat urna quam felis interdum quisque. Malesuada adipiscing
          tristique ut eget sed.
        </Text>
      </View>

      <Pressable style={styles.button} onPress={pressHandler}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F3",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 38,
    marginBottom: 65,
  },
  mainImage: {
    width: 254,
    height: 194,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 65,
  },
  textPara: {
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
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
  },
  buttonText: {
    fontWeight: "600",
    color: "#ffffff",
  },
});
