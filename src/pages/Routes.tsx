import { FavoritesPage } from 'pages/FavoritesPage';
import { HomePage } from 'pages/HomePage';
import { RecipeCreationPage } from 'pages/RecipeCreationPage';
import { RecipeDetailPage } from 'pages/RecipeDetailPage';
import { Route, Routes as RoutesDom } from 'react-router-dom';
import { BasePage } from './BasePage';

export const Routes = () => {
  return (
    <RoutesDom>
      <Route path="/" element={<BasePage />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/creation" element={<RecipeCreationPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      </Route>
    </RoutesDom>
  );
};
