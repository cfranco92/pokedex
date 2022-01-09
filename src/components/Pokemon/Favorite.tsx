import React from "react";

import Icon from "react-native-vector-icons/FontAwesome5";

interface FavoriteProps {
  id: string;
}

const Favorite = ({ id }: FavoriteProps) => {
  const addFavorite = () => {
    console.log("Added to favorites", id);
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
