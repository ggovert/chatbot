import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  // -------------------------------handle functions ----------------------
  const router = useRouter();
  const handleSuppot = async () => {
    router.push('/support');
  };
  const home = async () => {
    router.push('/signup');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ChatLittleChef
          </Typography>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit" onClick={handleSuppot}>
            Support
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
