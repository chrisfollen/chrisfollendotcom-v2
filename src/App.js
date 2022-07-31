import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Theme, MuiTheme } from './Theme';
import Home from './views/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import {
  PATH_ABOUT,
  PATH_JOURNAL,
  PATH_JOURNAL_30_LESSONS,
  PATH_JOURNAL_BOOTCAMP_TAKEAWAYS,
  PATH_JOURNAL_DESIGN_FOR_DEVS,
  PATH_JOURNAL_PHILOSOPHY_BOOKS,
  PATH_JOURNAL_STOIC_PRACTICES,
  PATH_JOURNAL_SUCCEED_IN_BOOTCAMP,
  PATH_PHOTO,
  PATH_PORTFOLIO,
  PATH_ROOT
} from './constants/paths';
import About from './views/About';
import Portfolio from './views/Portfolio';
import NotFound from './views/404';
import Preloader from './components/Preloader';
import LoadPage from './components/LoadPage';
import ThirtyLessons from './views/Journal/Articles/30Lessons';
import StoicPractices from './views/Journal/Articles/StoicPractices';
import PhilosophyBooks from './views/Journal/Articles/PhilosophyBooks';
import SucceedInBootcamp from './views/Journal/Articles/SucceedInBootcamp';
import DesignForDevs from './views/Journal/Articles/DesignForDevs';
import BootcampTakeaways from './views/Journal/Articles/BootcampTakeaways';
import Journal from './views/Journal';
import Photo from './views/Photo';

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
            <Route path={PATH_JOURNAL} exact element={<Journal />} />
            <Route
              path={PATH_JOURNAL_30_LESSONS}
              exact
              element={<ThirtyLessons />}
            />
            <Route
              path={PATH_JOURNAL_PHILOSOPHY_BOOKS}
              exact
              element={<PhilosophyBooks />}
            />
            <Route
              path={PATH_JOURNAL_STOIC_PRACTICES}
              exact
              element={<StoicPractices />}
            />
            <Route
              path={PATH_JOURNAL_SUCCEED_IN_BOOTCAMP}
              exact
              element={<SucceedInBootcamp />}
            />
            <Route
              path={PATH_JOURNAL_DESIGN_FOR_DEVS}
              exact
              element={<DesignForDevs />}
            />
            <Route
              path={PATH_JOURNAL_BOOTCAMP_TAKEAWAYS}
              exact
              element={<BootcampTakeaways />}
            />
            <Route path={PATH_PHOTO} exact element={<Photo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
