// This view only show an example with react navigation 5, with new react navigation 6,
// please use header options in the general Navigator
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "My Account" }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
