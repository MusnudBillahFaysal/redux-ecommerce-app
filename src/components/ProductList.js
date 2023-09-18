// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { fetchProducts } from '../actions/productActions';

// const ProductList = ({ products, fetchProducts, isLoading, error }) => {
//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   products: state.product.products,
//   isLoading: state.product.isLoading,
//   error: state.product.error,
// });

// export default connect(mapStateToProps, { fetchProducts })(ProductList);
