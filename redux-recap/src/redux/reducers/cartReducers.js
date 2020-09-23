import React from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

const initialState = {
    cart: []
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newCart = [...state.cart, action.id];
            return { cart: newCart };
        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item => item !== action.id);
            return { cart: remainingCart };
        default:
            return state;
    }
};

export default cartReducers;