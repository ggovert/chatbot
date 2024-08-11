'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  CssBaseline,
  Avatar,
  Link,
  Button,
} from '@mui/material';
import theme from '../components/theme';
import NavBar from '../components/navbar';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  // --------------------------------- State management vars ----------------------
  const [error, setError] = useState('');
  const router = useRouter();

  // -------------------------------handle functions ----------------------
  const goBack = async () => {
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
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        {/* Go Back Button */}
        <Box position="absolute" top={90} left={20}>
          <Button variant="contained" onClick={goBack}>
            Go Back
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="20px"
        >
          <Typography variant="h6" fontWeight="bold">
            Reach out to us with any questions you have about LittleChef
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column" alignItems="center" mx={2}>
            <Avatar alt="User 1" src="/H.JPG" />
            <Typography mt={1}>Houlaymatou B.</Typography>
            <Link
              href="https://www.linkedin.com/in/houlaymatoub/"
              mt={1}
              color="primary.border"
            >
              LinkedIn
            </Link>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" mx={2}>
            <Avatar alt="User 2" src="f.png" />
            <Typography mt={1}>Frank K.</Typography>
            <Link
              href="https://www.linkedin.com/in/frank-king-b2544a263/"
              mt={1}
              color="primary.border"
            >
              LinkedIn
            </Link>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" mx={2}>
            <Avatar alt="User 3" src="/g.png" />
            <Typography mt={1}>Giovanni G.</Typography>
            <Link
              href="https://www.linkedin.com/in/giovanni-govert/"
              mt={1}
              color="primary.border"
            >
              LinkedIn
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
