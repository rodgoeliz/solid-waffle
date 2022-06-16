import { useGetFavorites } from 'api/queries/favorites';
import { useGetRecipes } from 'api/queries/recipes';
import { Loading } from 'components/global/Loading';
import { RecipeList } from 'components/recipes/RecipeList';

export const RecipeListFavoriteContainer = () => {
  const { isLoading: loadingRecipes, data: recipes } = useGetRecipes();
  const { isLoading: loadingFavorites, data: favorites } = useGetFavorites();

  if (loadingRecipes || loadingFavorites) return <Loading />;

  const favoriteIds = favorites?.map(({ id }) => id);
  const favoriteRecipes =
    recipes?.filter(({ id }) =>
      favoriteIds?.some((favoriteId: string) => favoriteId === id)
    ) || [];
  return <RecipeList recipes={favoriteRecipes} />;
};
