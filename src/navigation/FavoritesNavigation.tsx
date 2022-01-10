// This view only show an example with react navigation 5, with new react navigation 6,
// please use header options in the general Navigator

import FavoriteScreen from "../screens/FavoriteScreen";
import PokemonScreen from "../screens/PokemonScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
