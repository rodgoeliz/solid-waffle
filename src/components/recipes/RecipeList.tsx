import { Grid } from '@mui/material';
import { EmptyList } from 'components/global/EmptyList';
import { RecipeCard } from 'components/recipes/RecipeCard';
import { RawRecipeT } from 'types/recipe';

export type RecipeListT = { recipes: RawRecipeT[] };
export const RecipeList = ({ recipes }: RecipeListT) => {
  if (!recipes) return <EmptyList />;

  return (
    <Grid
      container
      m={1}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12, lg: 16, xl: 20 }}
    >
      {recipes.map((recipe) => (
        <Grid item xs={2} sm={4} md={4} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};
