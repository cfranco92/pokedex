import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { Pokemon } from "../models/pokemon";
import PokemonCard from "./PokemonCard";

export interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  console.log(pokemons);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon: Pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});

export default PokemonList;
