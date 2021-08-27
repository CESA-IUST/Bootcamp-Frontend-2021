import React, { useEffect , useState} from 'react' ;

export default function Clock_function (props) {

    const [count , setCount] = useState(0);
    

    // componentDidMount ,componentDidUpdate
    useEffect(() => {
        console.log("component used its effect ");
    });



    return (
        <>
            <h1> {count} </h1>
            <button onClick={() => setCount(count+1)} >
                Increment
            </button>
        </> 
    )

}