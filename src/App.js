import React from 'react';

import Header from './components/Header/Header';
import './App.scss';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;