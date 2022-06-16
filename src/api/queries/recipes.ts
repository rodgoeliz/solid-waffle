import { API_URL } from 'data/endpoints';
import { useQuery } from 'react-query';
import { RawRecipeT } from 'types/recipe';

export const useGetRecipes = () => {
  return useQuery<string, Error, RawRecipeT[]>('recipes', () =>
    fetch(`${API_URL}/recipes`).then(async (res) => res.json())
  );
};

export const useGetRecipe = ({ id }: { id?: string }) => {
  return useQuery<string, Error, RawRecipeT>(
    ['recipes', id],
    () => fetch(`${API_URL}/recipes/${id}`).then(async (res) => res.json()),

    {
      // The query will not execute until the userId exists
      enabled: !!id,
    }
  );
};
