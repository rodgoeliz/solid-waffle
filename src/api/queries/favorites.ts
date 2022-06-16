import { API_URL } from 'data/endpoints';
import { useQuery } from 'react-query';

export const useGetFavorites = () => {
  return useQuery<string, Error, { id: string }[]>('favorites', () =>
    fetch(`${API_URL}/favorites`).then((res) => res.json() || null)
  );
};

export const useGetFavoritesExpanded = () => {
  return useQuery<string, Error, { id: string }[]>('favorites', () =>
    fetch(`${API_URL}/favorites?_embed=recipes`).then(
      (res) => res.json() || null
    )
  );
};
