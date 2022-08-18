import axios from 'axios';

export interface Pokemon {
  data: {
    id: number;
    name: string;
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
  };
}

export const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonById = async (keyword: string) => {
  const { data }: Pokemon = await apiClient.get(`/pokemon/${keyword}`);
  return data;
};
