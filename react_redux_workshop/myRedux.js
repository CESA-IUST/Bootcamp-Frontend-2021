const createStore = (reducer) => {
    let state
    let listeners = []

    state = reducer(undefined, "INIT")
    console.log("STATE", state)

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => {
            listener()
        })
    }

    const subscribe = (listener) => {
        listeners.push(listener)
    }

    const getState = () => {
        return state
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

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

const store = createStore(reducer)
store.subscribe(() => {
    console.log("CHANGED!!!")
})

store.dispatch({
    type: "INCREMENT",
})
store.dispatch({
    type: "DECREMENT"
})
console.log(store.getState())