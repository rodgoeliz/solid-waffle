import { API_URL } from 'data/endpoints';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { NewRecipe } from 'types/recipe';

export const useDeleteRecipe = ({ recipeId }: { recipeId: string }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    () => {
      return fetch(`${API_URL}/recipes/${recipeId}`, { method: 'DELETE' });
    },
    {
      onSuccess: () => {
        queryClient.setQueryData(
          'recipes',
          (
            old: any // eslint-disable-line @typescript-eslint/no-explicit-any
          ) => old?.filter(({ id }: { id: string }) => id !== recipeId) || []
        );
      },
    }
  );

  return deleteMutation;
};

export const useNewRecipe = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutate = useMutation(
    ({ recipe }: { recipe: NewRecipe }) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      };
      return fetch(`${API_URL}/recipes`, requestOptions);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['recipes']);
        navigate(`/home`);
      },
    }
  );
  return mutate;
};
