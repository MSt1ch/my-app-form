import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/main.css';
import Input from './components/Input';
import Popup from './components/Popup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  


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
            <Input onClick={this.togglePopup.bind(this)} className="bnt_submit" type="submit" value="Отправить"/>
          </form>
        </div>
        {this.state.showPopup ?
          <Popup 
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        
      </div>
    );
  }
}

export default App;
