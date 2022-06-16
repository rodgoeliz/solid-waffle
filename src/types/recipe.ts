import { RawUserT } from 'types/user';

export type RawRecipeT = {
  id: string;
  name: string;
  author: RawUserT;
  creationDate: string;
  cookTime: number;
  steps: string[];
  ingredients: string[];
};
