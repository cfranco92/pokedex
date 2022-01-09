import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavoriteApi } from "../../api/favorite";

interface FavoriteProps {
  id: string;
}

const Favorite = ({ id }: FavoriteProps) => {
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};

export default Favorite;
