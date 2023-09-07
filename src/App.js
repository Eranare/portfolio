//import logo from './logo.svg';
import './App.css';
//Imports
import * as React from "react";
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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Header id="home" />
        <br></br><br></br>
        <Personal id="about"/>
        {/*}<Featured id="featured"/>{*/}
        <Reel id="reel" samples={samples} />
        <Contact id ="contact"/>
        <Footer id="footer" />
      </ThemeProvider>
    </div>
  );
}




export default App;
