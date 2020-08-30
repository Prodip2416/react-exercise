import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const totalCartItem = props.cart;
    const totalPrice = (totalCartItem.reduce((total, item) => total + item.price, 0));
    const totalShipping = (totalCartItem.reduce((total, item) => total + item.shipping, 0));
    const beforeTax = totalPrice + totalShipping;
    const tax = (totalPrice * 5) / 100;
    const grandTotal = beforeTax + tax;

    const convertToFixed = (num) => {
        return num.toFixed(2);
    }

    return (
        <div>
            <div className="cart-header">
                <h2>Order Summary</h2>
                <h3>Items ordered: {totalCartItem.length}</h3>
            </div>
            <div className="cart-footer">
                <p>Items: {convertToFixed(totalPrice)}</p>
                <p>Shipping & Handling: {convertToFixed(totalShipping)}</p>
                <p>Total before tax: {convertToFixed(beforeTax)}</p>
                <p>Estimated Tax: {convertToFixed(tax)}</p>
                <p className="order-lbl">Order Total:	${convertToFixed(grandTotal)}</p>
                <Link to="/review">
                    <button>Review Your Order</button>
                </Link>
               
            </div>
        </div>
    );
};

export default Cart;