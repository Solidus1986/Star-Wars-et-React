// == Import : npm
import React from 'react';


// == Import : local
import './app.scss';

// == Import : composants
import NavBar from 'src/components/NavBar/NavBar';
import Page from 'src/components/Page/Page';
// == Composant
const App = () => (
  <div id="app">
    <NavBar />
    <Page />
  </div>
);

// == Export
export default App;
