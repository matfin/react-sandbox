import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Stories from './app/views/stories/Stories/Stories';
import ContainerSt from './App.css';

const stories = [
  { author: 'Matt Finucane', id: 1, title: 'Chapter One' },
  { author: 'Leah Wilby', id: 2, title: 'Chapter Two' }
];

export default function App() {
  return (
    <Fragment>
      <ContainerSt>
        <Stories stories={stories} />
      </ContainerSt>
      <GlobalStyle />
    </Fragment>
  );
}
