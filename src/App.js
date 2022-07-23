import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Theme, MuiTheme } from './Theme';
import Home from './views/Home';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MuiThemeProvider theme={MuiTheme}>
        <Router>
          <Header />
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
