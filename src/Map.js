import React, { Component } from 'react';

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: "",
        }
    }
   
    render() {
       let  abc=this.props.list;
       const cd= abc.map((abc,i)=>{            
                        return (
                            <div>
                                <h1>{abc.name}</h1>
                                <h1>{abc.class}</h1>
                        </div>
                    )
        }
        )
        return(
            <div>Hi
{cd}
                {console.log(cd," cd")}
            </div>
        )
    }
}