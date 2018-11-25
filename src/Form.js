import React, { Component } from 'react';
import App from './App'
import UIComponents from './UIComponents'
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: "",
            abc:[0,2,52]
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
        let d=[...this.state.abc,c];
        // d.push(...c)
        this.setState(
            {
                abc:d
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
                <h1>Array with ...</h1>
                {this.state.abc} 
                <h1>Parent Component</h1>
                {/* <UIComponents/> */}
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input type="text" value={this.state.inputText} onChange={this.onChange} placeholder={this.inputText}/>
                    <button>Submit</button>
                </form>
                {/* <App name={this.state.inputText} Child={this.Child}/> */}
            </div>
        )
    }
}