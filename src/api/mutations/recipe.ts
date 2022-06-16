import { API_URL } from 'data/endpoints';
import { useMutation, useQueryClient } from 'react-query';

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
