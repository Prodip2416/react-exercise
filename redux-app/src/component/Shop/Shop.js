import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/CartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    // console.log(props);
    const { products, addToCart } = props;
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(pd => <Product key={pd.id} product={pd} addToCart={addToCart} />)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);