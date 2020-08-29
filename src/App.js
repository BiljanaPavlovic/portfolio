import React from 'react';
import './App.css';
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
