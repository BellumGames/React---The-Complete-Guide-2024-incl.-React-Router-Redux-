import { Fragment, useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;

/*
function Summary({ text }) {
  return(
    <>
        <h1>Summary</h1>
        <p>{text}</p>
    </>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML elements." />
    </div>
  );
}

export default App;
*/