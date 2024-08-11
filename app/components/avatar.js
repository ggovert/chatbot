import React, { useState } from 'react';
import { Avatar, Button, Box, Typography, Menu, MenuItem } from '@mui/material';
import { auth } from '@/app/firebase/config';
import { signOut } from 'firebase/auth';

function UserProfile({ userEmail }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut(auth);
    alert('Logging out...');
    setAnchorEl(null);
  };

  return (
    <>
      {/* avatar/profile */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="20px"
      >
        <Button onClick={handleClick}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }} />
        </Button>
        <Typography variant="h6">{userEmail}</Typography>
      </Box>

      {/* Menu for logout */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </>
  );
}

export default UserProfile;
