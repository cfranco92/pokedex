import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import { Pokemon } from "../models/pokemon";

export interface PokemonScreenProps {
  navigation: { goBack: () => void };
  route: { params: { id: string } };
}

const PokemonScreen = ({
  navigation,
  route: { params },
}: PokemonScreenProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  const loadPokemonDetails = () => {};

  if (!pokemon) return null;

  return (
    <View>
      <Text>We're in a Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonScreen;
