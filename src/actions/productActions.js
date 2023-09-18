// Action Creators
// productActions.js
import { FETCH_PRODUCTS_SUCCESS } from './actionTypes';

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

// Thunk to fetch data
export const fetchProducts = () => {
  return (dispatch) => {
    fetch('/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch((error) => {
        // Handle error
      });
  };
};
