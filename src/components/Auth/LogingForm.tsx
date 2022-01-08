import * as Yup from "yup";

import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { user, userDetails } from "../../utils/userDB";

import { useFormik } from "formik";

const LogingForm = () => {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("The user or the password are wrong");
      } else {
        console.log("Log in successfully");
        console.log(formValue);
      }
    },
  });

  return (
    <View>
      <Text style={stlyes.title}>Log in...</Text>
      <TextInput
        placeholder="User name"
        style={stlyes.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={stlyes.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Enter" onPress={() => formik.handleSubmit()} />
      <Text style={stlyes.error}>{formik.errors.username}</Text>
      <Text style={stlyes.error}>{formik.errors.password}</Text>
      <Text style={stlyes.error}>{error}</Text>
    </View>
  );
};

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = {
  username: Yup.string().required("The user is mandatory"),
  password: Yup.string().required("The password is mandatory"),
};

const stlyes = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 29,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});

export default LogingForm;
