/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DeleteRecipeT } from 'components/recipes/DeleteRecipe';
import { FavoriteRecipeToggleT } from 'components/recipes/FavoriteRecipeToggle';
import { RecipeCard, RecipeCardT } from 'components/recipes/RecipeCard';

const mockRecipe: RecipeCardT['recipe'] = {
  id: '1',
  name: 'recipe name',
  author: { id: 1, name: 'Mr Roberts' },
  creationDate: '2022-06-15T22:57:56.681Z',
  cookTime: 145,
  steps: ['1', '2'],
  ingredients: ['a', 'b'],
};

const mock_useNavigate = jest.fn();
const mock_FavoriteRecipeToggle = jest.fn();
const mock_DeleteRecipe = jest.fn();

jest.mock('components/recipes/DeleteRecipe', () => ({
  DeleteRecipe: (props: DeleteRecipeT) => {
    mock_DeleteRecipe(props);
    return <div data-testid="delete-id" />;
  },
}));

jest.mock('components/recipes/FavoriteRecipeToggle', () => ({
  FavoriteRecipeToggle: (props: FavoriteRecipeToggleT) => {
    mock_FavoriteRecipeToggle(props);
    return <div data-testid="toggle-id" />;
  },
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (props: any) => mock_useNavigate(props),
}));

const WrappedRow = (props: RecipeCardT) => <RecipeCard {...props} />;

describe('initial render', () => {
  it('creation year properly displayed', () => {
    render(<WrappedRow recipe={mockRecipe} />);
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('cook time shown in HH:MM format', () => {
    render(<WrappedRow recipe={mockRecipe} />);
    expect(screen.getByText('02:25')).toBeInTheDocument();
  });

  it('DeleteRecipe to been called with proper props', () => {
    render(<WrappedRow recipe={mockRecipe} />);

    expect(mock_DeleteRecipe).toHaveBeenCalledWith({ recipeId: '1' });
  });

  it('FavoriteRecipeToggle component to been called with proper props', () => {
    render(<WrappedRow recipe={mockRecipe} />);
    expect(mock_FavoriteRecipeToggle).toHaveBeenCalledWith({ recipeId: '1' });
  });
});

describe('after render', () => {
  it('should try to navigate to detail when view more clicked', () => {
    render(<WrappedRow recipe={mockRecipe} />);
    const menuButton = screen.getByRole('button', { name: 'View more' });
    userEvent.click(menuButton);
    expect(mock_useNavigate).toHaveBeenCalledWith('/recipes/1');
  });
});
