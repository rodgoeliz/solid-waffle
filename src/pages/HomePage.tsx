import { Box } from '@mui/material';
import { RecipeListContainer } from 'components/recipes/RecipeListContainer';

export const HomePage = () => {
  return (
    <Box m={1}>
      <RecipeListContainer />
    </Box>
  );
};
