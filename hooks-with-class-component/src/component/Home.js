import React, { Component } from 'react';
import User from './User';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            cart:[]
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    
    handleAddToCart(user){
        const newCart = [...this.state.cart, user];
        this.setState({cart:newCart});
        console.log(newCart);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> this.setState({users:data}))
    }

    render() {
        return (
            <div>
                <h1>Total Users : {this.state.users.length}</h1>
                <h3>Total Cart : {this.state.cart.length}</h3>
                {
                    this.state.users.map(user=> <User key={user.id} user={user} handleAddToCart={this.handleAddToCart}/>)
                }
            </div>
        );
    }
}

export default Home;