import { IconButton } from '@mui/material';
import { useToggleFavorite } from 'api/mutations/favorites';
import { useGetFavorites } from 'api/queries/favorites';

import { Favorite } from 'components/global/Favorite';

type FavoriteRecipeToggleT = {
  recipeId: string;
};
export const FavoriteRecipeToggle = ({ recipeId }: FavoriteRecipeToggleT) => {
  const { isLoading, data: favorites } = useGetFavorites();
  const favorited = !!favorites?.map(({ id }) => id)?.includes(recipeId);
  const { isLoading: loadingToggle, mutate } = useToggleFavorite({
    recipeId,
    favorited,
  });

  return (
    <IconButton
      color="primary"
      aria-label="change favorite status"
      disabled={loadingToggle || isLoading}
      onClick={() => mutate()}
    >
      <Favorite favorited={favorited} />
    </IconButton>
  );
};
