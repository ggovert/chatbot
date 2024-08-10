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
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  // --------------------------------- State management vars ----------------------
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // -------------------------------handle functions ----------------------
  const handleLogin = async () => {
    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login Successful');
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      // Check the error code
      let errorMessage = 'An error occurred. Please try again.';
      if (error.code === 'auth/user-not-found') {
        errorMessage =
          'No user found with this email. Please check your email or sign up.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format. Please check your email address.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many requests. Please try again later.';
      } else {
        errorMessage =
          'Failed to sign in. Please check your credentials and try again.';
      }
      console.error('Error message:', errorMessage);
      setError(errorMessage);
    }
  };

  const handleSignUp = () => {
    router.push('/signup');
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
            {error && (
              <Typography color="error" mb={2}>
                {error}
              </Typography>
            )}
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
              <Link component="button" onClick={handleSignUp}>
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
