import React from 'react'
const Child = (props) => {
    return (
        <div>
            {/* {console.log(props.todo)} */}
            {props.todo.length ? props.todo.map((todo, i) => {
                return (
                    <div key={i + 4}>
                        <h1 key={i}>
                            <p key={i + 1}> {todo}/{i}</p>
                            <input key={i + 8} type="button" value={props.Edit_Save?"Save":"Save"} onClick={() =>props.Save(i)} />                             
                                <input key={i + 2} type="button" value={props.Edit_Save?"Edit":"Save"} onClick={() =>props.Edit_Save ?props.Edit(i):props.Save(i)} />
                            <input key={i + 3} type="button" value="DELETE" onClick={() => props.Delete(i)} />
                        </h1>
                    </div>
                )
            }
            ) : <h1>Sorry</h1>}
        </div>
    )
}
export default Child;