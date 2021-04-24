import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './compponent/Navbar';
import App from './App';
import Sidebar from './compponent/sidenav';
// import { withRouter } from "react-router";

ReactDOM.render(
  <>
  <Sidebar />
  {/* <Navbar/> */}
  <App />
  </>,
  document.getElementById('root')
);
