import React from 'react';
// import LoginPage from '../components/Login/LoginPage';
import Header from './HeaderFooter/Header.js';
import Footer from './HeaderFooter/Footer.js';
import ImagesPage from './ImagePage/ImagesPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        
        {/* <Route path="/" component={LoginPage} /> */}
        <Route path="/:ImagesPage" component={ImagesPage} />
      </Router>
      <Footer />
    </>
  );
}

  
