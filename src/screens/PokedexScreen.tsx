import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

const PokedexScreen = () => {
  const [state, setstate] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
};

export default PokedexScreen;
