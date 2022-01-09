import React, { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";

import { getPokemonsFavoritesApi } from "../api/favorite";

const FavoriteScreen = () => {
  const [favorites, setFavorites] = useState(null);

  const checkFavorites = async () => {
    const response = await getPokemonsFavoritesApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite...</Text>
      <Button title="get" onPress={checkFavorites} />
    </SafeAreaView>
  );
};

export default FavoriteScreen;
