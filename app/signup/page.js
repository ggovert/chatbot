'use client';
// --------------------------------- Imports ------------------------------------
import Image from 'next/image';
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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignUpPage() {
  // --------------------------------- State management vars ----------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // -------------------------------handle functions ----------------------
  const handleSignUp = async () => {
    if (password.length <= 7) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('signup successful');
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (error) {
      let errorMessage = 'An error occurred. Please try again.';

      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage =
          'Password is too weak. Please choose a stronger password.';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'An account already exists with this email address.';
      } else {
        errorMessage =
          'Failed to sign up. Please check your details and try again.';
      }
      setError(errorMessage);
    }
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('Google sign-in successful');
      router.push('/');
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError('Failed to sign in with Google. Please try again.');
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

          {/* sign up form */}
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
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="dense"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: '#e5a732',
                },
              }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Typography variant="h6" align="center">
              Or
            </Typography>
            {/* Google button */}
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                color: '#000',
                borderColor: '#000',
              }}
              onClick={googleSignIn}
            >
              Continue with Google
            </Button>
            {/* option to login instead*/}
            <Typography textAlign="center" mt={2}>
              Already have an account?{' '}
              <Link component="button" onClick={() => router.push('/login')}>
                Login here
              </Link>
            </Typography>
          </Box>
        </Box>
        {/* Darker yellow cercle */}
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
