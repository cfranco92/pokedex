import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import useAuth from "../../hooks/useAuth";

export interface UserDataProps {}

const UserData = () => {
  const { user, logout } = useAuth();

  return (
    <>
      {user ? (
        <View style={styles.content}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Welcome,</Text>
            <Text
              style={styles.title}
            >{`${user.firstName} ${user.lastName}`}</Text>
          </View>

          <View style={styles.dataContent}>
            <ItemMenu title="Name" text={user.firstName} />
            <ItemMenu title="Last Name" text={user.lastName} />
            <ItemMenu title="Username" text={user.username} />
            <ItemMenu title="Email" text={user.email} />
            <ItemMenu title="Total Favorites" text={`0 pokemons`} />
          </View>
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

interface ItemMenuProps {
  title: string;
  text: string;
}

const ItemMenu = ({ title, text }: ItemMenuProps) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 20,
  },
});

export default UserData;
