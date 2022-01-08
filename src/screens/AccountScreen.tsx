import { SafeAreaView, Text, View } from "react-native";

import LogingForm from "../components/Auth/LogingForm";
import React from "react";
import UserData from "../components/Auth/UserData";

const AccountScreen = () => {
  const auth = null;
  return <View>{auth ? <UserData /> : <LogingForm />}</View>;
};

export default AccountScreen;
