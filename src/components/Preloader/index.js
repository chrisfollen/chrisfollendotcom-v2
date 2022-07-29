import React from 'react';
import {
  Letter1,
  Letter10,
  Letter11,
  Letter2,
  Letter3,
  Letter4,
  Letter5,
  Letter6,
  Letter7,
  Letter8,
  Letter9,
  PreloaderContainer,
  PreloadText
} from './style';

export default function Preloader() {
  return (
    <PreloaderContainer>
      <PreloadText>
        <Letter1>C</Letter1>
        <Letter2>H</Letter2>
        <Letter3>R</Letter3>
        <Letter4>I</Letter4>
        <Letter5>S </Letter5>
        <Letter6>F</Letter6>
        <Letter7>O</Letter7>
        <Letter8>L</Letter8>
        <Letter9>L</Letter9>
        <Letter10>E</Letter10>
        <Letter11>N</Letter11>
      </PreloadText>
    </PreloaderContainer>
  );
}
