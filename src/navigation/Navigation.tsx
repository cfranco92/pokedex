import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import PokedexScreen from "../screens/PokedexScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoritesNavigation from "./FavoritesNavigation";
import FavoriteScreen from "../screens/FavoriteScreen";
import FavoriteNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite Tab Screen"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Pokedex Tab Screen"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitle: "My Account",
        }}
      />
    </Tab.Navigator>
  );
};

const renderPokeBall = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
};

export default Navigation;
