import React, { Component } from 'react';
import './App.css';
import Map from "./Map"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "OFF",
      inputText: "",
      list:[{name:"Ali",class:"25"},{name:"AAK",class:"26"},{name:"AliKarani",class:"5"}]
    }
  }
  checking = () => {
    this.state.item === "OFF" ? this.setState({ item: "ON" }) : ""
    this.state.item === "ON" ? this.setState({ item: "OFF" }) : ""
    this.props.Child(this.state.inputText)
    this.setState(
      {
        inputText: ""
      }
    )
  }
  onChange = (event) => {
    this.setState(
      {
        inputText: event.target.value
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Child Component</h1>
        <input type="text" value={this.state.inputText} onChange={this.onChange} />
        <Map list={this.state.list}/>
        <input type="submit" value={this.state.item} onClick={this.checking} />
      </div>
    );
  }
}

export default App;
