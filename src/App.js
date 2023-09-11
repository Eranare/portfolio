//import logo from './logo.svg';
import './App.css';
//Imports
import React, { useState } from 'react';
import Button from '@mui/material/Button';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Personal from './components/Personal/Personal';
import Featured from './components/Featured/Featured';
import Reel from './components/Reel/Reel';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import samples from './data/AudioSamples';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      main: '#00ff44',
    },
  },
});

const drawerWidth = 240;

function App() {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null); // Initialize with null
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Header id="home" samples={samples} setCurrentlyPlayingId={setCurrentlyPlayingId}/>
        <br></br><br></br>
        <br></br><br></br>
        <Personal id="about"/>
        {/*}<Featured id="featured" samples={samples} setCurrentlyPlayingId={setCurrentlyPlayingId} />{*/}
        <Reel id="reel" samples={samples} setCurrentlyPlayingId={setCurrentlyPlayingId} />
        <Contact id ="contact"/>
        <Footer id="footer" />
      </ThemeProvider>
    </div>
  );
}

//ToDo:  
//- remove the <br>
//- audio should stop if another gets played.
//- functionality of contact form.
//- overall styling.    


export default App;
