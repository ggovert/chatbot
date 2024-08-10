'use client';
// --------------------------------- Imports ------------------------------------
import { useState } from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  List,
  ListItemText,
  ListItemButton,
  Button,
  TextField,
  Stack,
  Avatar,
} from '@mui/material';
import theme from './components/theme';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import UserProfile from './components/avatar';

export default function Home() {
  // --------------------------------- State Management vars -----------------------
  const [message, setMessage] = useState('');

  // --------------------------------- User Auth -------------------------------
  const [user] = useAuthState(auth);
  console.log(user);
  const router = useRouter();

  if (!user) {
    router.push('/signup');
  }
  // --------------------------------- event handler functions -------------------------------
  const sendMessage = async () => {};
  return (
    // --------------------------------- UI ------------------------------------

    <ThemeProvider theme={theme}>
      {/* bg */}
      <Box
        width="100wh"
        height="100vh"
        backgroundColor="background.default"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        {/* profile sidebar */}
        <Box
          sx={{
            backgroundColor: 'primary.sidebar',
            width: '20%',
            borderRadius: '12px',
            height: '700px',
            boxShadow: 2,
          }}
        >
          <Stack margin="20px">
            {/* avatar/profile */}
            <UserProfile></UserProfile>

            {/* previous chats */}
            <Box>
              {/* Will have to create a sort of loop here to retrieve all chats from db */}
              <List>
                {/* will need to manage the button here so that when the user clicks, it displays the chat in the chat window */}
                <ListItemButton
                  sx={{
                    borderRadius: '8px',
                    border: (theme) =>
                      `1px solid ${theme.palette.primary.border}`,
                  }}
                >
                  <ListItemText primary="I only have 2 eggs, give me recommendation" />
                </ListItemButton>
              </List>
            </Box>
          </Stack>
        </Box>
        {/* end of profile sidebar */}

        {/* chat window */}
        <Stack
          sx={{
            height: '700px',
            width: '55%',
            borderRadius: '12px',
          }}
        >
          {/* messages window */}
          <Box
            sx={{
              backgroundColor: 'background.default',
              flexGrow: '1',
              borderRadius: '12px',
              height: '85%',
              border: (theme) => `1px solid ${theme.palette.primary.border}`,
              marginBottom: '15px',
              overflow: 'auto',
              boxShadow: '1',
            }}
          >
            {/* user icon and text box*/}
            <Stack
              direction="row"
              spacing={3}
              flexDirection="row"
              alignItems="center"
              padding="20px"
            >
              {/* Will need to add the messages from the server here > see Tuto 14:40*/}
              {/*Will need a condition here to render the avatar depending on the user , same for the colors of the message box > Tuto*/}
              <Avatar
                sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}
                src="logo.png"
              ></Avatar>
              <Typography
                bgcolor="primary.main"
                borderRadius="12px"
                padding="20px"
              >
                {/* Will need to replace this with the model content  */}
                Hello! I'm LittleChef 🧑‍🍳. Tell me what you got in your fridge
                and will make something delicous and healthy?
              </Typography>
            </Stack>
          </Box>

          {/* chat input space */}
          <Stack
            direction={'row'}
            spacing={2}
            sx={{
              backgroundColor: 'background.default',
              padding: '10px',
              borderRadius: '12px',
              border: (theme) => `1px solid ${theme.palette.primary.border}`,
              boxShadow: '1',
            }}
          >
            <TextField
              width="80%"
              variant="standard"
              fullWidth
              placeholder="Let's chat"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              disableElevation="true"
              sx={{
                borderRadius: '20px',
                px: '15px',
                width: '120px',
                border: (theme) => `1px solid ${theme.palette.primary.border}`,
                textAlign: 'right',
              }}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
