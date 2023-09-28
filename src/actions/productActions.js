// // Action Creators
// // productActions.js
// import { FETCH_PRODUCTS_SUCCESS } from './actionTypes';

// const fetchProductsSuccess = (products) => ({
//   type: FETCH_PRODUCTS_SUCCESS,
//   products,
// });

// // Thunk to fetch data
// export const fetchProducts = () => {
//   return (dispatch) => {
//     fetch('/api/products')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         dispatch(fetchProductsSuccess(data));
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   };
// };
import { FETCH_PRODUCTS } from '../types';
import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from '../types';
import data from '../components/data.json'; // Import the data.json file

export const fetchProducts = () => async (dispatch) => {
  // Instead of making an API request, use the imported data
  const products = data.products;

  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ''
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === 'latest') {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === 'lowest'
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
