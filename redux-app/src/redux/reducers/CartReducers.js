import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";

const initialState = {
    cart: [],
    products: [
        { id: 1, name: 'Lenovo' },
        { id: 2, name: 'Asus' },
        { id: 3, name: 'Dell' },
        { id: 4, name: 'HP' },
        { id: 5, name: 'Apple' }
    ]
}

const CartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = { productId: action.id, name: action.name, cartId: state.cart.length + 1 };
            const newCart = [...state.cart, newItem];
            return {
                ...state,
                cart: newCart
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: [state.cart.filter(item => item.cartId !== action.id)]
            }
        default:
            return state;
    }
};

export default CartReducers;