export type Pokemon = {
  id?: string;
  name?: string;
  description?: string;
  type?: string[];
  height?: number;
  weight?: number;
  imageURL?: string;
};

export type PokemonUpdate = {
  name?: string;
  description?: string;
  type?: string[];
  height?: number;
  weight?: number;
  imageURL?: string;
};

export type PokemonSearch = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  type?: string[] | null;
  height?: number | null;
  weight?: number | null;
  imageURL?: string | null;
};
