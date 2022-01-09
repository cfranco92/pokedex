import { includes, pull } from 'lodash'

import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from '../utils/constants';

export const getPokemonsFavoritesApi = async() => {
 try {
   const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
  return JSON.parse(response || '[]')
 } catch (error) {
   throw error;
 } 
}

export const addPokemonFavoriteApi = async (id: string) => {
  try {
    const favorites = await getPokemonsFavoritesApi();
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
  } catch (error) {
    throw error;
  }
}

export const isPokemonFavoriteApi = async (id: string) => {
  try {
    const response = await getPokemonsFavoritesApi();
    return includes(response, id)
  } catch (error) {
    throw error;
  }
}

export const removePokemonFavoriteApi = async (id: string) => {
  try {
    const favorites = await getPokemonsFavoritesApi();
    const newFavorites = pull(favorites, id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error
  }
}
