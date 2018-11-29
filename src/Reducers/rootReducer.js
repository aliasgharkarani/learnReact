const initialState = {
    todo: ["Ali", "Kamran", "Shahid"]
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'DELETE_TODO') {
        let array = [...state.todo]
        array.splice(action.id, 1)
        return {
            todo: array
        }
    }
    return state;
}
export default rootReducer;