import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge, IconButton } from '@mui/material';
import { useGetFavorites } from 'api/queries/favorites';
import { ErrorMessage } from 'components/global/ErrorMessage';
import { Loading } from 'components/global/Loading';

export const FavoriteCounter = () => {
  const { isLoading, error, data: favorites } = useGetFavorites();

  if (error) return <ErrorMessage />;
  if (isLoading) return <Loading />;

  return (
    <IconButton aria-label="favorites">
      <Badge badgeContent={favorites?.length || 0} color="secondary">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
};
