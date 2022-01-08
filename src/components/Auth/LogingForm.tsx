import React from "react";

import { Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";


const LogingForm = () => {
  return (
    <View>
      <Text style={stlyes.title}>Log in...</Text>
      <TextInput
        placeholder="User name"
        style={stlyes.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={stlyes.input}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button title='Enter' onPress={() => console.log('Getting in...')}/>
    </View>
  );
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
});

export default LogingForm;
