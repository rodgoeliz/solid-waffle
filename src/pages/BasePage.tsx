import { Box, Toolbar } from '@mui/material';
import Portal from '@mui/material/Portal';
import { AppBar } from 'components/global/AppBar';
import { useRef } from 'react';
import { Outlet } from 'react-router';

export const BasePage = () => {
  const container = useRef(null);

  return (
    <Portal container={container.current}>
      <AppBar />
      <Box component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Portal>
  );
};
