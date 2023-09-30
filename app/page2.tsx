
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Home from './page';
import Navbar from './components/Navbar/Navbar';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);