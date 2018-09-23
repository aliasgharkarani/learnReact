import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Input extends Component {
    state={
     input:"",
     allInputs:[]
    }
    // this.checking = this.checking.bind(this);
  // checking=()=>{
    // this.state.item=="OFF"? this.setState({item:"ON"}) :console.log("OFF hi hay!")
    // this.state.item=="ON"? this.setState({item:"OFF"}) :console.log("ON hi hay!")
  // }
  render() {
    return (
      <div className="App">
          {/* <input type="text" name="inputname" onChange={(e)=>console.log("1 ",e.target.value)}/> */}
          <input type="text" name="inputname" value={this.state.input} onChange={(event)=>{this.setState({ input:event.target.value })}}/>
           <button onClick={()=>this.setState({allInputs:[this.state.input]})}>Add</button>
          {/* <input type="submit" value={this.state.item} onClick={this.checking}/> */}
      </div>
    );
  }
}

export default Input;
