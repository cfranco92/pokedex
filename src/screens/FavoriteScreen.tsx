import React, { useCallback, useState } from "react";

import { Text } from "react-native";

import { Pokemon } from "../models/pokemon";
import PokemonList from "../components/PokemonList";
import { getPokemonDetailsApi } from "../api/pokemon";
import { getPokemonsFavoritesApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";

const FavoriteScreen = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (user) {
        (async () => {
          const response = await getPokemonsFavoritesApi();

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [user])
  );

  return !user ? (
    <Text>User not logged in</Text>
  ) : (
    <PokemonList pokemons={pokemons} />
  );
};

export default FavoriteScreen;
