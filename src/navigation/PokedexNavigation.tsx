// This view only show an example with react navigation 5, with new react navigation 6,
// please use header options in the general Navigator
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={PokedexScreen} />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
