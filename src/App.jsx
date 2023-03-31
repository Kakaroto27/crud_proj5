import React from 'react';
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
<>
      <React.Fragment>
        <NavBar />
        <Outlet />
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;

