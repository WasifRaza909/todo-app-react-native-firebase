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
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Formik, useFormik } from "formik";

import * as yup from "yup";

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const Register = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("GetStarted");
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <StatusBar style="dark" />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={pressHandler}
          style={styles.arrowContainer}
        >
          <AntDesign
            style={styles.backArrow}
            name="arrowleft"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Image style={styles.image} source={require("../assets/shape.png")} />

        <View style={styles.imageContainer}>
          <Text style={styles.textHeading}>Welcome to Onboard!</Text>
          <Text style={styles.textPara}>Let’s help to meet up your tasks.</Text>
          <View style={styles.inputsContainer}>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                {
                  console.log(errors.email);
                }

                return (
                  <>
                    <TextInput
                      style={styles.input}
                      name="fullName"
                      onChangeText={handleChange("fullName")}
                      value={values.fullName}
                      placeholder="Enter your full name"
                    />

                    <TextInput
                      style={styles.input}
                      name="email"
                      onChangeText={handleChange("email")}
                      value={values.email}
                      placeholder="Enter your email"
                    />

                    <TextInput
                      style={styles.input}
                      name="password"
                      onChangeText={handleChange("password")}
                      value={values.password}
                      placeholder="Enter password"
                    />
                    <TextInput
                      style={styles.input}
                      name="confirmPassword"
                      onChangeText={handleChange("confirmPassword")}
                      value={values.confirmPassword}
                      placeholder="Confirm password"
                    />
                  </>
                );
              }}
            </Formik>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.lastLabel}>
          <Text>Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signIn}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F3",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 38,
    marginBottom: 0,
  },
  mainImage: {
    width: 254,
    height: 194,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -30,
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
