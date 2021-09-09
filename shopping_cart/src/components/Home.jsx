import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch({
            type: "ADD_ITEM",
            item: input
        })
    }
    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={clickHandler}>Add Item</button>
        </div>
    )
}

export default Home
