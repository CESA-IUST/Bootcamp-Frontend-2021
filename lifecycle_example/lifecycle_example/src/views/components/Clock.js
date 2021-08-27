import React from 'react' ;

export default class Clock extends React.Component {

    constructor(props)
    {
        super(props);
        console.log("component constructed");
        this.state = {
            date : 0
            // color : "#121212"            
        }
        this.color = "#121212"
    }

    componentDidMount(){
        console.log("component did mount ");
        this.timer = setInterval(
            () => this.tick() , 
            1000
        )
    }

    componentWillUnmount(){
        console.log("component will unmount");
        // clearInterval(this.timer);
    }

    componentDidUpdate() {
        console.log("did update");
    }

    tick() {
        this.setState({
            date : this.state.date + 1
        })
        // this.state.date = new Date() ;
    }

    render() {
        console.log("Is rendering ");
        
        return (
            <>
                <h1 style={{color : this.color }} >hello world</h1>   
                <button onClick = {() => {
                        this.color = "#FFFFFF"
                }} > 
                    Change color
                </button>
                <h1> {this.state.date.toLocaleString()} </h1>
            </>
        )
    }

}