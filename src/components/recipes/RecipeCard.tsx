import { Button, Card, Grid, gridClasses } from '@mui/material';
import { ValueWithLabel } from 'components/global/ValueWithLabel';
import { DeleteRecipe } from 'components/recipes/DeleteRecipe';
import { FavoriteRecipeToggle } from 'components/recipes/FavoriteRecipeToggle';
import { convertMinuteToHour, getTextIsoDateYear } from 'data/utils';
import { useNavigate } from 'react-router-dom';

import { RawRecipeT } from 'types/recipe';

export type RecipeCardT = {
  recipe: RawRecipeT;
};

export const RecipeCard = ({ recipe }: RecipeCardT) => {
  const { name, creationDate, author, cookTime, id } = recipe;
  const navigate = useNavigate();

  return (
    <Card sx={{ p: 1 }}>
      <Grid
        container
        sx={{
          [`& .${gridClasses.item}`]: {
            textAlign: 'center',
          },
        }}
      >
        <Grid item xs={4}>
          <FavoriteRecipeToggle recipeId={id} />
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => {
              navigate(`/recipes/${id}`);
            }}
          >
            View more
          </Button>
        </Grid>

        <Grid item xs={4}>
          <DeleteRecipe recipeId={id} />
        </Grid>

        <Grid item xs={12}>
          <ValueWithLabel value={name} label={'recipe name'} />
        </Grid>
        <Grid item xs={12}>
          <ValueWithLabel
            value={getTextIsoDateYear(creationDate)}
            label={'creation year'}
          />
        </Grid>
        <Grid item xs={12}>
          <ValueWithLabel value={author.name} label={'creator name'} />
        </Grid>
        <Grid item xs={12}>
          <ValueWithLabel
            value={convertMinuteToHour(cookTime)}
            label={'cooking time in hours'}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
