import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import { useDeleteRecipe } from 'api/mutations/recipe';

type DeleteRecipeT = {
  recipeId: string;
};
export const DeleteRecipe = ({ recipeId }: DeleteRecipeT) => {
  const { isLoading, mutate } = useDeleteRecipe({ recipeId });

  return (
    <IconButton
      color="error"
      aria-label="delete recipe"
      disabled={isLoading}
      onClick={() => mutate()}
    >
      <CancelIcon />
    </IconButton>
  );
};
