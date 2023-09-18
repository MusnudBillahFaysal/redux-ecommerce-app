// components/ShoppingCart.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

const ShoppingCart = ({ cartItems, addToCart, removeFromCart }) => {
  return <div>{/* Render your shopping cart */}</div>;
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  ShoppingCart
);
