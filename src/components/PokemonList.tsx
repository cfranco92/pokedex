import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { Pokemon } from "../models/pokemon";

export interface PokemonListProps {
  pokemons: Partial<Pokemon>[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  console.log(pokemons);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon: Partial<Pokemon>) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
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
