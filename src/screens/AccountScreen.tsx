import { SafeAreaView, Text, View } from "react-native";

import LogingForm from "../components/Auth/LogingForm";
import React from "react";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

const AccountScreen = () => {
  const { user } = useAuth();
  return <View>{user ? <UserData /> : <LogingForm />}</View>;
};

export default AccountScreen;
