import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h1>This is a cart</h1>
            <ul>
                {
                    cart.map(item => <li key={Math.random()}>{item.name} <button onClick={() => removeFromCart(item.cartId)}>X</button> </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);