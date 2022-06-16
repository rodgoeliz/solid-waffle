import { Box, Container, AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { FavoriteCounter } from 'components/recipes/FavoriteCounter';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <MuiAppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Link to="/home">Recipes</Link>
            <Link to="/creation">New Recipe</Link>
            <Link to="/favorites">
              <FavoriteCounter />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
