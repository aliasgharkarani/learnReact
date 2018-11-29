import React, { Component } from 'react'
import Child from './Child'
import { connect } from 'react-redux'
class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            // todo: props.todo,
            Edit_Save: true
        }
    }
    HandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    AddTODO = (event) => {
        let array = [...this.state.todo, this.state.item]
        this.setState({
            todo: array,
            item: ""
        })
    }
    DeleteP = (index) => {
        this.props.deletePost(index);
        // let array = [...this.state.todo]
        // array.splice(index, 1)
        // this.setState({
        //     todo: array
        // })
    }
    Edit = (index) => {
        this.setState({
            item: this.state.todo[index],
            Add_Save: false
        })
    }
    Save = (index) => {
        let array = this.state.todo;
        array[index] = this.state.item;
        this.setState(
            {
                todo: array,
                Add_Save: true,
                item:""
            }
        )
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <label>INPUT</label>
                <input type="text" value={this.state.item} onChange={this.HandleChange} name="item" />
                <button onClick={this.AddTODO}>Add Todo</button>
                <Child todo={this.props.todo} Delete={this.DeleteP} Edit={this.Edit} Edit_Save={this.state.Edit_Save} Save={this.Save}/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost:(id)=>{ dispatch({ type:'DELETE_TODO',id:id}) }
    }
}
const mapStateToProps = (state)=>{
    return{
        todo: state.todo 
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(Input)