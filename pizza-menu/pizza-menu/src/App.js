import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
      </div>
    );
  }
}

export default App;
