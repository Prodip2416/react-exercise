import React, { Component } from 'react'

export class ClassEventHandler extends Component {
    clickHandler() {
        console.log('Clicked - from a class');
    }
    render() {     
        return (
            <div>
                <button onClick={this.clickHandler}>Click me - from a Class</button>
            </div>
        )
    }
}

export default ClassEventHandler
