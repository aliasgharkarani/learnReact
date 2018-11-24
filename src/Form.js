import React, { Component } from 'react';
import App from './App'
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: "",
        }
    }
    onChange=(event)=>{
        this.setState(
            {
                inputText:event.target.value
            }
        )
    }
    Child=(c)=>{
        console.log(c," Child")
        this.setState(
            {
                inputText:c
            }
        )
    }
    onSubmit=(event)=>{
        event.preventDefault();
        // alert(this.state.inputText," Submitted")
    }
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input type="text" value={this.state.inputText} onChange={this.onChange} placeholder={this.inputText}/>
                    <button>Submit</button>
                </form>
                <App name={this.state.inputText} Child={this.Child}/>
            </div>
        )
    }
}