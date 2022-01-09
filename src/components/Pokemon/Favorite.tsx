import React, { useEffect, useState } from "react";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/favorite";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface FavoriteProps {
  id: string;
}

const Favorite = ({ id }: FavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {}
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
    onReloadCheckFavorite()
    try {
      onReloadCheckFavorite();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = () => {
    console.log("Dele from favorites");
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};

export default Favorite;
