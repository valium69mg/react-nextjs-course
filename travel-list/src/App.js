import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import List from './List';
import Filter from './Filter';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Input/>
        <List/>
        <Filter/>
        <Footer/>
      </div>
    );
  }
}

export default App;
