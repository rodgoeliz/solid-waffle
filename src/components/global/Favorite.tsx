import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type FavoriteT = {
  favorited: boolean;
};
export const Favorite = ({ favorited }: FavoriteT) => {
  return favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />;
};
