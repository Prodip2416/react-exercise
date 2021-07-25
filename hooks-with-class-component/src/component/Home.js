import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> this.setState({users:data}))
    }
    
    render() {
        return (
            <div>
                <h1>Users : {this.state.users.length}</h1>
            </div>
        );
    }
}

export default Home;