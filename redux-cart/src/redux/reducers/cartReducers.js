const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartAction")

const initialState = {
    cart: [],
    products: [
        { name: 'Apple', id: 1 },
        { name: 'Lenove', id: 2 },
        { name: 'Asus', id: 3 },
        { name: 'Dell', id: 4 },
        { name: 'HP', id: 5 }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId:action.id,
                name:action.name, 
                cartId: state.cart.length + 1
            }
            return { ...state, cart: [...state.cart, newItem] }

        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item => item.cartId !== action.id);
            return { ...state, cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;