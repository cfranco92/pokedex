import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const NoLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>You're not logged in</Text>
      <Button
        title="Go to login"
        onPress={() =>
          navigation.navigate({
            name: "Account",
          } as {
            key: string;
            name: string;
            params: any;
            path: string;
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default NoLogged;
