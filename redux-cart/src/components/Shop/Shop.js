import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props);
    const { products, addToCart } = props;
    return (
        <div>
            <h1>This is Shop Page</h1>
            {
                products.map(item => <Product key={item.id} product={item} addToCart={addToCart} />)
            }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);