// // import React from 'react';
// //import ProductList from './ProductList';

// import React, { useState, useEffect } from 'react';
// import data from './data.json';
// import Products from './Products';
// //import Filter from './Filter';
// import Cart from './Cartes';
// import { useNavigate, useLocation } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faList, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';

// const Shop = () => {
//   // const navigate = useNavigate();
//   const location = useLocation();
//   const [products, setProducts] = useState(data.products);
//   // const [cartItems, setCartItems] = useState(
//   //   JSON.parse(localStorage.getItem('cartItems'))
//   // );
//   const [cartItems, setCartItems] = useState(
//     JSON.parse(localStorage.getItem('cartItems')) || [] // Default to an empty array
//   );

//   const [size, setSize] = useState('');
//   const [sort, setSort] = useState('');

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // const createOrder = (order) => {
//   //   navigate('/checkoutform', { state: { cartItems } }); // Pass cartItems directly as a prop
//   // };

//   // const createOrder = (order) => {
//   //   navigate('/checkoutform', { state: { cartItems } });
//   // };

//   // Rest of your code

//   const removeFromCart = (product) => {
//     const updatedCartItems = cartItems.filter(
//       (item) => item._id !== product._id
//     );
//     setCartItems(updatedCartItems);
//   };

//   const addToCart = (product) => {
//     const updatedCartItems = [...cartItems];
//     let alreadyInCart = false;
//     updatedCartItems.forEach((item) => {
//       if (item._id === product._id) {
//         item.count++;
//         alreadyInCart = true;
//       }
//     });

//     if (!alreadyInCart) {
//       updatedCartItems.push({ ...product, count: 1 });
//     }
//     setCartItems(updatedCartItems);
//   };

//   // const sortProducts = (event) => {
//   //   const sortValue = event.target.value;
//   //   setSort(sortValue);
//   //   setProducts(
//   //     [...products].sort((a, b) => {
//   //       if (sortValue === 'lowest') {
//   //         return a.price > b.price ? 1 : -1;
//   //       } else if (sortValue === 'highest') {
//   //         return a.price < b.price ? 1 : -1;
//   //       }
//   //       return a._id > b._id ? 1 : -1;
//   //     })
//   //   );
//   // };

//   // const filterProducts = (event) => {
//   //   const sizeValue = event.target.value;
//   //   setSize(sizeValue);
//   //   if (sizeValue === '') {
//   //     setProducts(data.products);
//   //   } else {
//   //     setProducts(
//   //       data.products.filter(
//   //         (product) => product.availableSizes.indexOf(sizeValue) >= 0
//   //       )
//   //     );
//   //   }
//   // };

//   // const handleLogout = () => {
//   //   localStorage.removeItem('isLoggedIn');
//   //   setCartItems([]);
//   // };

//   // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//   // const handleCreateOrder = () => {
//   //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//   //   if (!isLoggedIn) {
//   //     // Redirect the user to the login page if not logged in
//   //     navigate('/loginform');
//   //   } else {
//   //     // Proceed with the checkout
//   //     const order = {
//   //       cartItems,
//   //     };
//   //     createOrder(order);

//   //     // Redirect the user to the checkout form
//   //     navigate('/checkoutform', { state: { cartItems } });
//   //   }
//   // };

//   return (
//     <body>
//       <section
//         id="common_banner_one"
//         className="bg-cover bg-center bg-no-repeat bg-common-banner"
//         style={{
//           backgroundImage:
//             "url('https://andshop-reactjs.netlify.app/static/media/common_bg.03a52b45.png')",
//         }}
//       >
//         <div className="container py-40">
//           <div className="row text-center ">
//             <div className="col-lg-12 text-center ">
//               <div className="common_banner_text text-white justify-center text-4xl">
//                 <h2>Shop</h2>
//                 <ul className="text-white flex space-x-2 items-center justify-center">
//                   {' '}
//                   <li className="text-center text-2xl">
//                     <a href="/">Home</a>
//                   </li>
//                   <li className="slash">/</li>
//                   <li className="active text-center text-yellow-500 text-2xl">
//                     Shop
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section></section>
//       <section className="py-8">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap">
//             <div className="lg:w-1/2 md:w-full">
//               <div className="product_filter">
//                 <div className="customs_selects">
//                   <select
//                     name="product"
//                     className="customs_sel_box border text-2xl p-2 m-4 text-bold border-black"
//                   >
//                     <option value="Filter">Filter</option>
//                     <option value="volvo">Most Popular</option>
//                     <option value="saab">Best Seller</option>
//                     <option value="mercedes">Trending</option>
//                     <option value="audi">Featured</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-1/2 md:w-full px-30 mt-4">
//               <div className="product_shot flex">
//                 <div className="product_shot_title text-2xl space-x-4 space-y-4 font-sans font-bold">
//                   <p>SORT BY:</p>
//                 </div>
//                 <div className="customs_selects border-2   text-2xl">
//                   <select
//                     name="product"
//                     className="customs_sel_box border   border-black"
//                   >
//                     <option value="Popularity">Sort by Popularity</option>
//                     <option value="newness">Sort by newness</option>
//                     <option value="low">Price: low to high</option>
//                     <option value="high">Price: high to low</option>
//                   </select>
//                 </div>
//                 <div className="product_shot_view  ">
//                   <ul className="flex space-x-4 ml-12">
//                     <li>
//                       <a href="/shopList">
//                         <FontAwesomeIcon icon={faList} size="2x" />{' '}
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/shopTwo">
//                         <FontAwesomeIcon icon={faThLarge} size="2x" />{' '}
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/shop">
//                         <FontAwesomeIcon icon={faTh} size="2x" />{' '}
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bg-gray-100 py-8">
//         <main className="container mx-auto py-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
//             {/* Render your items here */}
//             <div className="bg-white p-4 rounded-lg shadow">
//               <Products products={products} addToCart={addToCart} />
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <Products products={products} addToCart={addToCart} />
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <Products products={products} addToCart={addToCart} />
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <Products products={products} addToCart={addToCart} />
//             </div>
//           </div>
//         </main>
//       </section>
//     </body>
//   );
// };

// export default Shop;

// import React, { useState, useEffect } from 'react';
// import formatCurrency from '../util';
// import Modal from 'react-modal';
// import { connect } from 'react-redux';
// import { fetchProducts } from '../actions/productActions';
// import { addToCart } from '../actions/cartActions';
// import data from './data.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faList, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';

// import Products from './Products'; // Import your Products component here

// const Shop = ({ fetchProducts, addToCart }) => {
//   const [product, setProduct] = useState(null);
//   const [products, setProducts] = useState(data.products);
//   const [cartItems, setCartItems] = useState(
//     JSON.parse(localStorage.getItem('cartItems')) || []
//   );

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const openModal = (product) => {
//     setProduct(product);
//   };

//   const closeModal = () => {
//     setProduct(null);
//   };

import React, { useState, useEffect } from 'react';
import formatCurrency from '../util';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import Products from './Products';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';

const Shop = ({ products, fetchProducts, addToCart }) => {
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(null);
  };

  // // Define the categories you want to filter by
  // const categoriesToFilter = ['Expert', 'Electric'];

  // // Filter the products based on categories
  // const filteredProducts = products.filter((product) =>
  //   categoriesToFilter.includes(product.category)
  // );
  return (
    <div>
      <section
        id="common_banner_one"
        className="bg-cover bg-center bg-no-repeat bg-common-banner"
        style={{
          backgroundImage:
            "url('https://andshop-reactjs.netlify.app/static/media/common_bg.03a52b45.png')",
        }}
      >
        <div className="container py-40">
          <div className="text-center">
            <h2 className="text-4xl text-white">Shop</h2>
            <ul className="text-white flex space-x-2 items-center justify-center">
              <li className="text-2xl">
                <a href="/">Home</a>
              </li>
              <li className="slash">/</li>
              <li className="active text-2xl text-yellow-500">Shop</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 md:w-full">
              <div className="product_filter">
                <div className="customs_selects">
                  <select
                    name="product"
                    className="customs_sel_box border text-2xl p-2 m-4 text-bold border-black"
                  >
                    <option value="Filter">Filter</option>
                    <option value="volvo">Most Popular</option>
                    <option value="saab">Best Seller</option>
                    <option value="mercedes">Trending</option>
                    <option value="audi">Featured</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-full px-30 mt-4">
              <div className="product_shot flex">
                <div className="product_shot_title text-2xl space-x-4 space-y-4 font-sans font-bold">
                  <p>SORT BY:</p>
                </div>
                <div className="customs_selects border-2 text-2xl">
                  <select
                    name="product"
                    className="customs_sel_box border border-black"
                  >
                    <option value="Popularity">Sort by Popularity</option>
                    <option value="newness">Sort by newness</option>
                    <option value="low">Price: low to high</option>
                    <option value="high">Price: high to low</option>
                  </select>
                </div>
                <div className=" px-12 product_shot_view">
                  <ul className="flex space-x-4 ml-12">
                    <li>
                      <a href="/shopList">
                        <FontAwesomeIcon icon={faList} size="2x" />
                      </a>
                    </li>
                    <li>
                      <a href="/shopTwo">
                        <FontAwesomeIcon icon={faThLarge} size="2x" />
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <FontAwesomeIcon icon={faTh} size="2x" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-gray-100 py-8">
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {products.map((product) => (
              <div key={product._id} className="bg-white p-4 rounded-lg shadow">
                <Products
                  product={product}
                  addToCart={addToCart}
                  openModal={openModal}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {/* Pass the filtered products as a prop to the Products component */}
            <Products
              product={product}
              addToCart={addToCart}
              openModal={openModal}
            />
          </div>
        </div>
      </section>

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
                <button
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

// export default connect(
//   (state) => ({ products: state.products.filteredItems }),
//   {
//     fetchProducts,
//     addToCart,
//   }
// )(Shop);
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Shop);
