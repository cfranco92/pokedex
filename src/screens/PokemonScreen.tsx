import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import { Pokemon } from "../models/pokemon";

export interface PokemonScreenProps {
  navigation: { goBack: () => void };
  route: { params: { id: string } };
}

const PokemonScreen = ({
  navigation,
  route: { params },
}: PokemonScreenProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | any | null>(null);

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
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
    </ScrollView>
  );
};

export default PokemonScreen;
