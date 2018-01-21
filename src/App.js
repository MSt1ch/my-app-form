import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/main.css';
import Input from './components/Input';
import Popup from './components/Popup';
import TextName from './components/TextName';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      value: ''
    };
  }

  togglePopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
    console.log(this.state.value)
  }

  render() {


    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="wrapper">
          <TextName text={this.state.value}/>
          <form>
            <Input className="fname" onChange={this.handleChange} type="text" name="first_name" placeholder="Имя"/>
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
