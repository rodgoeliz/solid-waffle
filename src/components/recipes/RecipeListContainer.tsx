import { useGetRecipes } from 'api/queries/recipes';
import { ErrorMessage } from 'components/global/ErrorMessage';
import { Loading } from 'components/global/Loading';
import { RecipeList } from 'components/recipes/RecipeList';

export const RecipeListContainer = () => {
  const { isLoading, isError, data: recipes } = useGetRecipes();

  if (isError) return <ErrorMessage />;
  if (isLoading) return <Loading />;

  return <RecipeList recipes={recipes || []} />;
};
