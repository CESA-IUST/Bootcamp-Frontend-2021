import React from 'react';
import ReactDOM from 'react-dom';

export class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={count:1,massage:"reza noori"}
    }
     myfunction(e){
        console.log([e.clientX,e.clientY])
    }
    componentDidMount(){
        console.log("didmount")
        document.addEventListener("click",this.myfunction)
    }
    componentDidUpdate(){
        console.log("did update",this.state)
    }
    componentWillUnmount(){
        console.log("un mount")
        document.removeEventListener("click",this.myfunction)
    }
    render(){
        return(<><h1>{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({...this.state,count:this.state.count+1})
            }}>+</button>
            <button onClick={()=>{
                this.setState({...this.state,count:this.state.count-1})
            }}>-</button>
            <button onClick={()=>{
                this.setState({...this.state,count:0})
            }}>reset</button>
            <button onClick={()=>{
                ReactDOM.render(<h1>salam</h1>,document.getElementById("root"))
            }}>unmount</button></>)
    }
}