import { API_URL } from 'data/endpoints';
import { useMutation, useQueryClient } from 'react-query';
export const useToggleFavorite = ({
  recipeId,
  favorited,
}: {
  recipeId: string;
  favorited: boolean;
}) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    () => {
      return fetch(`${API_URL}/favorites/${recipeId}`, { method: 'DELETE' });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['favorites']);
      },
    }
  );

  const postMutation = useMutation(
    () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: recipeId }),
      };
      return fetch(`${API_URL}/favorites`, requestOptions);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['favorites']);
      },
    }
  );

  return favorited ? deleteMutation : postMutation;
};
