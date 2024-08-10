'use client';
// --------------------------------- Imports ------------------------------------
import { useState } from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  CssBaseline,
  Button,
  TextField,
  Link,
} from '@mui/material';
import theme from '../components/theme';
import NavBar from '../components/navbar';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';

export default function LoginPage() {
  // --------------------------------- State management vars ----------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  // -------------------------------handle functions ----------------------
  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(email, password);
      console.log('Login Successful', response);
      // successful login, reset email and password
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  // --------------------------------- UI ------------------------------------
  return (
    <ThemeProvider theme={theme}>
      {/* Nav bar */}
      <NavBar />
      <CssBaseline />
      {/* Container */}
      <Box
        height="100vh"
        width="100wh"
        sx={{
          backgroundColor: 'background.default',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* middle container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'primary.darker',
          }}
        >
          {/* little chef logo + description */}
          <Box
            sx={{
              textAlign: 'center',
              zIndex: 1,
              mb: 4,
            }}
          >
            <img
              src="logo.png"
              alt="little chef logo"
              width={250}
              height={250}
            />
            <Typography variant="h6">
              Turn Your Fridge Into a Feast with Little Chef
            </Typography>
          </Box>

          {/* login form */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 4,
              border: (theme) => `2px solid ${theme.palette.primary.border}`,
              backgroundColor: 'primary.insideForm',
              width: '620px',
              p: 4,
              zIndex: 1,
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              margin="dense"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="dense"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: '#e5a732',
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
            {/* option */}
            <Typography textAlign="center" mt={2}>
              Don't have an account?{' '}
              <Link component="button" onClick={() => router.push('/signup')}>
                Sign up here
              </Link>
            </Typography>
          </Box>
        </Box>
        {/* Darker yellow half-circle below*/}
        <Box
          sx={{
            backgroundColor: 'primary.main',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '200%',
            height: '100%',
            borderRadius: '50%',
            transform: 'translate(-25%, 50%)',
            zIndex: 0,
            overflow: 'hidden',
          }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
}
