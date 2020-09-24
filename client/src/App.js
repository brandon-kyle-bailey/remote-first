import React from 'react';

import { SiteRouter } from './components/router.component';

import { GlobalProvider } from './context/global-state.context';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <SiteRouter />
    </GlobalProvider>
  );
}

export default App;