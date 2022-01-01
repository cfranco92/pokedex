import { POKEMON_TYPE_COLORS, POKEMON_TYPE_COLORS_INTERFACE } from "./constants";

const getColorByPokemonType = (type: string) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
