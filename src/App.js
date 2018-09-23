import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
    this.state={
     item:"OFF",
    }
    this.checking = this.checking.bind(this);
  }
  checking=()=>{
    this.state.item=="OFF"? this.setState({item:"ON"}) :console.log("OFF hi hay!")
    this.state.item=="ON"? this.setState({item:"OFF"}) :console.log("ON hi hay!")

  }
  render() {
    return (
      <div className="App">
          <input type="submit" value={this.state.item} onClick={this.checking}/>
      </div>
    );
  }
}

export default App;
