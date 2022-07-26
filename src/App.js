import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Theme, MuiTheme } from './Theme';
import Home from './views/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import { PATH_ABOUT, PATH_ROOT } from './constants/paths';
import About from './views/About';

function App() {
  const [menuActive, setMenuActive] = useState(false);

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
          <Header toggleMenu={toggleMenu} />
          <Menu menuActive={menuActive} toggleMenu={toggleMenu} />
          <Routes>
            <Route path={PATH_ROOT} exact element={<Home />} />
            <Route path={PATH_ABOUT} exact element={<About />} />
            {/* <Route
            path="*"
            element={<NotFound handlePageLoad={handlePageLoad} />}
          /> */}
          </Routes>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
