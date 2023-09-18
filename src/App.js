//import logo from './logo.svg';
import './App.css';
//Imports
import React, { useState } from 'react';


import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Personal from './components/Personal/Personal';

import Reel from './components/Reel/Reel';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
//import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
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

//const drawerWidth = 240;

function App() {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null); // Initialize with null

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Header id="home" samples={samples} setCurrentlyPlayingId={setCurrentlyPlayingId} />
        <br></br><br></br>
        <br></br><br></br>
        <Personal id="about"/>
        {/*}<Featured id="featured" samples={samples} setCurrentlyPlayingId={setCurrentlyPlayingId} />{*/}
        <Reel id="reel" samples={samples} setCurrentlyPlayingId={setCurrentlyPlayingId} />
        <Contact id ="contact"/>
        <Footer id="footer" togglePrivacyPolicy={togglePrivacyPolicy} showPrivacyPolicy={showPrivacyPolicy} />

        
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

export default App;
