import { Card, Grid, List, ListItem, Typography } from '@mui/material';
import { useGetRecipe } from 'api/queries/recipes';
import { ErrorMessage } from 'components/global/ErrorMessage';
import { Loading } from 'components/global/Loading';
import { ValueWithLabel } from 'components/global/ValueWithLabel';
import { FavoriteRecipeToggle } from 'components/recipes/FavoriteRecipeToggle';
import { useParams } from 'react-router-dom';

export const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, data: recipe } = useGetRecipe({ id });

  if (!id) return <div>Not a valid id</div>;
  if (!recipe || !id) return <div>No data</div>;
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  const { name, creationDate, author, cookTime, ingredients, steps } = recipe;
  return (
    <Card sx={{ p: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <FavoriteRecipeToggle recipeId={id} />
        </Grid>

        <Grid item xs={12}>
          <ValueWithLabel value={name} label={'recipe name'} />
        </Grid>
        <Grid item xs={12}>
          <ValueWithLabel value={creationDate} label={'creation date'} />
        </Grid>
        <Grid item xs={12}>
          <ValueWithLabel value={creationDate} label={'creation time'} />
        </Grid>
        <Grid item xs={12}>
          <ValueWithLabel value={author.name} label={'creator name'} />
        </Grid>
        <Grid item xs={12}>
          <ValueWithLabel value={cookTime} label={'cooking time minutes'} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" component="div">
            List of ingredients
          </Typography>
          <List>
            {ingredients.map((ingredient, index) => (
              <ListItem key={`ingredient-${index}`}>{ingredient}</ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" component="div">
            List of instructions
          </Typography>
          <List>
            {steps.map((step, index) => (
              <ListItem key={`step-${index}`}>{step}</ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Card>
  );
};
