// import React from 'react';
// import formatCurrency from '../util';

// const Products = ({ products, addToCart }) => {
//   return (
//     <div>
//       <ul className="products">
//         {products.map((product) => (
//           <li key={product._id} className="group relative">
//             <div className="product">
//               <a href={'#' + product._id} className="relative">
//                 <div className="w-full h-auto mb-4">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-auto"
//                   />
//                 </div>
//                 <p className="text-xl text-center">{product.title}</p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="absolute inset-0 bg-white py-4 ml-6 mt-40 opacity-100 h-1/4 w-3/4 border-black items-center text-xl justify-center font-bold text-black transition duration-300 hidden group-hover:flex"
//                 >
//                   Add To Cart
//                 </button>
//               </a>
//               <div className="product-price flex justify-center">
//                 <div>{formatCurrency(product.price)}</div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Products;

// import React, { Component } from 'react';
// import formatCurrency from '../util';
// import Modal from 'react-modal';
// import { connect } from 'react-redux';
// import { fetchProducts } from '../actions/productActions';
// import { addToCart } from '../actions/cartActions';

// class Products extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: null,
//     };
//   }

//   componentDidMount() {
//     this.props.fetchProducts();
//   }

//   openModal = (product) => {
//     this.setState({ product });
//   };

//   closeModal = () => {
//     this.setState({ product: null });
//   };

//   render() {
//     const { product } = this.state;
//     return (
//       <div>
//         {!this.props.products ? (
//           <div>Loading...</div>
//         ) : (
//           <ul className="products">
//             {this.props.products.map((product) => (
//               <li key={product._id}>
//                 <div className="product">
//                   <a
//                     href={'#' + product._id}
//                     onClick={() => this.openModal(product)}
//                   >
//                     <img src={product.image} alt={product.title}></img>
//                     <p>{product.title}</p>
//                   </a>
//                   <div className="product-price">
//                     <div>{formatCurrency(product.price)}</div>
//                     <button
//                       onClick={() => this.props.addToCart(product)}
//                       className="button primary"
//                     >
//                       Add To Cart
//                     </button>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}

//         {product && (
//           <Modal isOpen={true} onRequestClose={this.closeModal}>
//             <button className="close-modal" onClick={this.closeModal}>
//               x
//             </button>
//             <div className="product-details">
//               <img src={product.image} alt={product.title}></img>
//               <div className="product-details-description">
//                 <p>
//                   <strong>{product.title}</strong>
//                 </p>
//                 <p>{product.description}</p>
//                 <p>
//                   Available Sizes:{' '}
//                   {product.availableSizes.map((x) => (
//                     <span key={x}>
//                       {' '}
//                       <button className="button">{x}</button>
//                     </span>
//                   ))}
//                 </p>
//                 <div className="product-price">
//                   <div>{formatCurrency(product.price)}</div>
//                   <button
//                     className="button primary"
//                     onClick={() => {
//                       this.props.addToCart(product);
//                       this.closeModal();
//                     }}
//                   >
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

// export default connect(
//   (state) => ({ products: state.products.filteredItems }),
//   {
//     fetchProducts,
//     addToCart,
//   }
// )(Products);

import React, { useEffect, useState } from 'react';
import formatCurrency from '../util';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const Products = ({ products, fetchProducts, addToCart }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(null);
  };

  return (
    <div>
      {!products ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product._id} className="bg-white p-4 rounded-lg shadow">
              <div className="product">
                <button
                  onClick={() => addToCart(product)}
                  className="absolute inset-0 bg-white py-4 ml-6 mt-40 opacity-100 h-1/4 w-3/4 border-black items-center text-xl justify-center font-bold text-black transition duration-300 hidden group-hover:flex"
                >
                  Add To Cart
                </button>
                <a href={'#' + product._id} onClick={() => openModal(product)}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto"
                  />
                  <p className="text-lg font-semibold mt-2">{product.title}</p>
                </a>
                <div className="product-price flex justify-between items-center mt-2">
                  <div className="text-xl font-semibold">
                    {formatCurrency(product.price)}
                  </div>

                  {/* <button
                    onClick={() => addToCart(product)}
                    className="button primary px-4 py-2"
                  >
                    Add To Cart
                  </button> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* {product && (
        <Modal isOpen={true} onRequestClose={closeModal} className="modal">
          <button className="close-modal" onClick={closeModal}>
            x
          </button>
          <div className="product-details flex">
            <img
              src={product.image}
              alt={product.title}
              className="w-1/2 h-auto"
            />
            <button
              onClick={() => addToCart(product)}
              className="absolute inset-0 bg-white py-4 ml-6 mt-40 opacity-100 h-1/4 w-3/4 border-black items-center text-xl justify-center font-bold text-black transition duration-300 hidden group-hover:flex"
            >
              Add To Cart
            </button>
            <div className="product-details-description p-4">
              <p className="text-2xl font-semibold">{product.title}</p>
              <p className="text-lg mt-2">{product.description}</p>
              <p className="text-lg mt-2">
                Available Sizes:{' '}
                {product.availableSizes.map((x) => (
                  <span key={x} className="mr-2">
                    <button className="button">{x}</button>
                  </span>
                ))}
              </p>
              <div className="product-price flex justify-between items-center mt-4">
                <div className="text-xl font-semibold">
                  {formatCurrency(product.price)}
                </div>
                {/* <button
                  className="button primary px-4 py-2"
                  onClick={() => {
                    addToCart(product);
                    closeModal();
                  }}
                >
                  Add To Cart
                </button> 
              </div>
            </div>
          </div>
        </Modal>
      )} */}
    </div>
  );
};

export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Products);
