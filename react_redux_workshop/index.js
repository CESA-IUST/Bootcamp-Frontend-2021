const redux = require('redux')

// state = {count: 0}
const reducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.payload
            }
    
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log("CHANGED!!!")
})

store.dispatch({
    type: "INCREMENT",
    id: "1234"
})
store.dispatch({
    type: "DECREMENT"
})
console.log(store.getState())