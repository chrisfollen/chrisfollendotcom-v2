import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Theme, MuiTheme } from './Theme';
import Home from './views/Home';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    if (menuActive) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  };

  console.log('menuActive', menuActive);
  return (
    <ThemeProvider theme={Theme}>
      <MuiThemeProvider theme={MuiTheme}>
        <Router>
          <Header menuActive={menuActive} toggleMenu={toggleMenu} />
          <Menu menuActive={menuActive} toggleMenu={toggleMenu} />
          <Routes>
            <Route path="/" exact element={<Home />} />
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
