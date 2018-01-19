import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/main.css';
import Input from './components/Input';
import Popup from './components/Popup';

class App extends Component {

  


  render() {
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="wrapper">
          
          <form>
            <Input className="fname" type="text" name="first_name" placeholder="Имя"/>
            <Input className="last_name" type="text" name="last_name" placeholder="Фамилия"/>
            <Input className="phone" type="numer" name="last_name" placeholder="Телефон"/>
            <Input className="bnt_submit" type="submit" value="Отправить"/>
          </form>
        </div>
        <Popup className="hidden" />
      </div>
    );
  }
}

export default App;
