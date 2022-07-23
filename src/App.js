import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Title,
  Subhead,
  Category,
  Body,
  BodyItalic,
  BodyBold,
  BodyBoldItalic
} from './Typography/style';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Heading1>Hello, world!</Heading1>
        <Heading2>Hello, world!</Heading2>
        <Heading3>Hello, world!</Heading3>
        <Heading4>Hello, world!</Heading4>
        <Title>Hello, world!</Title>
        <Subhead>Hello, world!</Subhead>
        <Category>Hello, world!</Category>
        <Body>Hey hey hey!</Body>
        <BodyItalic>Hey hey hey!</BodyItalic>
        <BodyBold>Hey hey hey!</BodyBold>
        <BodyBoldItalic>Hey hey hey!</BodyBoldItalic>
      </div>
    </ThemeProvider>
  );
}

export default App;
