import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state={times:0}
  }
  timesPlus(){
    let times=this.state.times
    times++
    this.setState({times:times})
  }
  render() {
    return (
      <div className="setState">
        <header className="extends">
          <a href="#" onClick={this.timesPlus.bind(this)}>点我一下试试</a>
          <p>
            你点了我{this.state.times}次
          </p>
        </header>
      </div>
    );
  }
}

export default App;
