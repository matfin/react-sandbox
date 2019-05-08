import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import { ContainerSt, HeadingSt } from './App.css';

export default function App() {
  return (
    <Fragment>
      <ContainerSt>
        <HeadingSt>
          This is the sandbox
        </HeadingSt>
        <p>
          This is some text
        </p>
      </ContainerSt>
      <GlobalStyle />
    </Fragment>
  );
}
