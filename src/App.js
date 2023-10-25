//import logo from './logo.svg';
import './App.css';
//Imports
import React, { useState } from 'react';

import theme from './Theme'; // Import the theme
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import Personal from './components/Personal/Personal';

import Reel from './components/Reel/Reel';
import Prices from './components/Prices/Prices';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
//import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import samples from './data/AudioSamples';

import { ThemeProvider} from '@mui/material/styles';

import {Grid, Toolbar} from '@mui/material';


//const drawerWidth = 240;

function App() {
  const [setCurrentlyPlayingId] = useState(null); // Initialize with null

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar position="sticky"/>
        <Grid container>
          <Grid item xs={12}>
            <Header id="home"  className="section-anchor" />
            <Personal id="about" className="section-anchor" />        
            <Reel id="reel" samples={samples} setCurrentlyPlayingId={setCurrentlyPlayingId} className="section-anchor" />
            <Prices id="prices"className="section-anchor" />
            <Contact id="contact"className="section-anchor" />
            <Footer id="footer" togglePrivacyPolicy={togglePrivacyPolicy} showPrivacyPolicy={showPrivacyPolicy} className="section-anchor" />
          </Grid>
        </Grid> 
      </ThemeProvider>
    </div>
  );
}

//ToDo:  

//- audio should stop if another gets played. done
//- Featured: what to do with that.
//- Resize header image. and other loading tricks.
//- replace Content tag with <div className> if theres no div wrapped already.
//- functionality of contact form. half done, requires email set up.
//- considering Mailjet for mail service.
//- responsiveness for mobile, half done, needs improvement, navbar should become a menu.
//- overall styling, remove the <br> spam.
//- Check and address console warnings and errors periodically.
//- Error handling. This includes making sure the backend is running, or restart it, what to do with the message on a failed attempt, it shouldnt be cleared. 
//- monitoring.
//- SEO Search engine optimization, Server-side rendering.
//- performance test.
//- implement nginx and certbot.
//- Accessibility.
//- security stuff. handling the form submission for both front and backend, ReCaptcha. 
//- Finally get domain name and host it



//- potential color combos main and secondary with google color picker
// #e64747
//88, 101, 110

export default App;
