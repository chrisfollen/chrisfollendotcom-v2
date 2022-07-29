import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Theme, MuiTheme } from './Theme';
import Home from './views/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import { PATH_ABOUT, PATH_PORTFOLIO, PATH_ROOT } from './constants/paths';
import About from './views/About';
import Portfolio from './views/Portfolio';
import NotFound from './views/404';
import Preloader from './components/Preloader';
import LoadPage from './components/LoadPage';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);

  useEffect(() => {
    setTimeout(() => setPreloaderActive(false), 5500);
    /* eslint-disable-next-line */
  }, []);

  const toggleMenu = () => {
    if (menuActive) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <MuiThemeProvider theme={MuiTheme}>
        <Router>
          <LoadPage />
          {preloaderActive && <Preloader />}
          <Header toggleMenu={toggleMenu} />
          <Menu menuActive={menuActive} toggleMenu={toggleMenu} />
          <Routes>
            <Route path={PATH_ROOT} exact element={<Home />} />
            <Route path={PATH_ABOUT} exact element={<About />} />
            <Route path={PATH_PORTFOLIO} exact element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
