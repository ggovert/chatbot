'use client'
// Import Statements
import {ThemeProvider, CssBaseline, Box, Typography, Button} from '@mui/material'
import NavBar from '../components/navbar'
import theme from '../components/theme'
import { useRouter } from 'next/navigation'
export default function Home() {
    const router = useRouter()
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <CssBaseline />
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
                <Box
                height="30px"
                width="100wh"
                sx={{backgroundColor: 'background.default'}}
                ></Box>
                <Typography variant='h3' textAlign="center" ><b>Frequently Asked Questions</b></Typography>
                <Box
                height="50px"
                width="100wh"
                sx={{backgroundColor: 'background.default'}}
                ></Box>
                <Typography variant='h6' textAlign="center" ><b>What can you do?</b></Typography>
                <Typography variant='subtitle1' textAlign="center" >I can help you create delicious meals using ingredients you already have at home. Just tell me what's in your fridge, pantry, or freezer, and I'll suggest tasty recipes!</Typography>
                <Box
                height="50px"
                width="100wh"
                sx={{backgroundColor: 'background.default'}}
                ></Box>
                <Typography variant='h6' textAlign="center" ><b>How accurate are your recipes?</b></Typography>
                <Typography variant='subtitle1' textAlign="center" >I use reliable sources and cooking techniques to create my recipes. However, cooking is an art, so feel free to adjust the recipes to your taste.</Typography>
                <Box
                height="50px"
                width="100wh"
                sx={{backgroundColor: 'background.default'}}
                ></Box>
                <Typography variant='h6' textAlign="center" ><b>Can you accomodate dietary restrictions?</b></Typography>
                <Typography variant='subtitle1' textAlign="center" >Absolutely! Just let me know if you have any allergies, intolerances, or dietary preferences (like vegetarian, vegan, or gluten-free) and I'll adjust the recipes accordingly.</Typography>
                <Box
                height="50px"
                width="100wh"
                sx={{backgroundColor: 'background.default'}}
                ></Box>
                <Typography variant='h6' textAlign="center" ><b>What if I don't have all the ingredients?</b></Typography>
                <Typography variant='subtitle1' textAlign="center" >Don't worry! I can suggest alternative ingredients or create a new recipe based on what you do have.</Typography>
                <Box
                height="50px"
                width="100wh"
                sx={{backgroundColor: 'background.default'}}
                ></Box>
                <Typography variant='h6' textAlign="center" ><b>How do I logout?</b></Typography>
                <Typography variant='subtitle1' textAlign="center" >To logout, all you have to do is click on your avatar to the left of your email and click on "Logout".</Typography>

                <Box
                height="30px"
                width="100wh"
                sx={{backgroundColor: 'background.default'}}
                ></Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                    <Button variant="contained" >Go Back</Button>
                </Box>

                

            </Box>
        </ThemeProvider>
    )
}