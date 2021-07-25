import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div style={{ margin: '2px', border: '1px solid brown' }}>
                <h1>This is {this.props.user.name}</h1>
                <h3>{this.props.user.username}</h3>
                <input type="button" value="Add Me" onClick={() => this.props.handleAddToCart(this.props.user)}></input>
            </div>
        );
    }
}

export default User;