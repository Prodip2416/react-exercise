import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
    // }
    clickHandler = () => {
        this.setState({
            message: 'Good Bye!'
        })
    }
    render() {
        return (
            <div>
                {this.state.message}
                <br />
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click Me</button> */}
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventBind
