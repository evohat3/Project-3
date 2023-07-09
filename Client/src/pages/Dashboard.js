import React , {useState} from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import SearchPageLite from '../components/SearchPageLite'
import UserContext from '../utils/UserContext'
import 'animate.css';

export default function Dashboard(props) {

  const isLoggedIn = Auth.loggedIn();

  console.log( isLoggedIn)

  if (!isLoggedIn) {
    window.location.href = '/'; // Redirect to '/' if user is not logged in
    return null; // Render nothing if not logged in
  } else {

    console.log(Auth.getUser())

    return (
      <Box
        sx={{
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container sx={{ bgcolor: 'green', color: 'white', height: 400, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} className='animate__animated animate__backInLeft'>
          <Typography first={props.first} variant="h3" align="center">
            Welcome {props.first} ({props.last})! You are logged in! with your email: ({props.email})
          </Typography>
          <SearchPageLite maxWidth="sm" />

          
        </Container>

        <Container variant="h3" backgroundcolor="black" color="white" align="center">
          Welcome
        </Container>
      </Box>
    );
  }
}