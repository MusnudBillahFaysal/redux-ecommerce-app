// // import React from 'react';
// //import ProductList from './ProductList';

// import React, { useState, useEffect } from 'react';
// import data from './data.json';
// import Products from './Products';
// //import Filter from './Filter';
// import Cart from './Cartes';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Carts = () => {
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
//       <section className="bg-gray-100 py-8">
//         <main className="container mx-auto py-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
//             {/* Render your items here */}

//             <div className="bg-white p-4 rounded-lg shadow">
//               <Cart
//                 // cartItems={cartItems}
//                 cartItems={cartItems || []} // Default to an empty array
//                 removeFromCart={removeFromCart}
//                 // createOrder={handleCreateOrder} // Update the prop name here
//                 addTocart={addToCart}
//               />
//             </div>
//             {/* Repeat these divs for each item */}
//           </div>
//         </main>
//         <footer className="bg-blue-500 text-white py-4 text-center">
//           All rights reserved.
//         </footer>
//       </section>
//     </body>
//   );
// };

// export default Carts;

// import React, { Component } from 'react';
// import formatCurrency from '../util';
// import { connect } from 'react-redux';
// import Modal from 'react-modal';
// import { removeFromCart } from '../actions/cartActions';
// import { createOrder, clearOrder } from '../actions/orderActions';

// class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       address: '',
//       showCheckout: false,
//     };
//   }

//   handleInput = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   createOrder = (e) => {
//     e.preventDefault();
//     const order = {
//       name: this.state.name,
//       email: this.state.email,
//       address: this.state.address,
//       cartItems: this.props.cartItems,
//       total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
//     };
//     this.props.createOrder(order);
//   };

//   closeModal = () => {
//     this.props.clearOrder();
//   };

//   render() {
//     const { cartItems, order } = this.props;
//     return (
//       <div>
//         {cartItems.length === 0 ? (
//           <div className="cart cart-header">Cart is empty</div>
//         ) : (
//           <div className="cart cart-header">
//             You have {cartItems.length} items in the cart{' '}
//           </div>
//         )}

//         {order && (
//           <Modal isOpen={true} onRequestClose={this.closeModal}>
//             <button className="close-modal" onClick={this.closeModal}>
//               x
//             </button>
//             <div className="order-details">
//               <h3 className="success-message">Your order has been placed.</h3>
//               <h2>Order {order._id}</h2>
//               <ul>
//                 <li>
//                   <div>Name:</div>
//                   <div>{order.name}</div>
//                 </li>
//                 <li>
//                   <div>Email:</div>
//                   <div>{order.email}</div>
//                 </li>
//                 <li>
//                   <div>Address:</div>
//                   <div>{order.address}</div>
//                 </li>
//                 <li>
//                   <div>Date:</div>
//                   <div>{order.createdAt}</div>
//                 </li>
//                 <li>
//                   <div>Total:</div>
//                   <div>{formatCurrency(order.total)}</div>
//                 </li>
//                 <li>
//                   <div>Cart Items:</div>
//                   <div>
//                     {order.cartItems.map((x) => (
//                       <div key={x._id}>
//                         {x.count} {' x '} {x.title}
//                       </div>
//                     ))}
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </Modal>
//         )}

//         <div>
//           <div className="cart">
//             <ul className="cart-items">
//               {cartItems.map((item) => (
//                 <li key={item._id}>
//                   <div>
//                     <img src={item.image} alt={item.title}></img>
//                   </div>
//                   <div>
//                     <div>{item.title}</div>
//                     <div className="right">
//                       {formatCurrency(item.price)} x {item.count}{' '}
//                       <button
//                         className="button"
//                         onClick={() => this.props.removeFromCart(item)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {cartItems.length !== 0 && (
//             <div>
//               <div className="cart">
//                 <div className="total">
//                   <div>
//                     Total:{' '}
//                     {formatCurrency(
//                       cartItems.reduce((a, c) => a + c.price * c.count, 0)
//                     )}
//                   </div>
//                   <button
//                     onClick={() => {
//                       this.setState({ showCheckout: true });
//                     }}
//                     className="button primary"
//                   >
//                     Proceed
//                   </button>
//                 </div>
//               </div>
//               {this.state.showCheckout && (
//                 <div className="cart">
//                   <form onSubmit={this.createOrder}>
//                     <ul className="form-container">
//                       <li>
//                         <label>Email</label>
//                         <input
//                           name="email"
//                           type="email"
//                           required
//                           onChange={this.handleInput}
//                         ></input>
//                       </li>
//                       <li>
//                         <label>Name</label>
//                         <input
//                           name="name"
//                           type="text"
//                           required
//                           onChange={this.handleInput}
//                         ></input>
//                       </li>
//                       <li>
//                         <label>Address</label>
//                         <input
//                           name="address"
//                           type="text"
//                           required
//                           onChange={this.handleInput}
//                         ></input>
//                       </li>
//                       <li>
//                         <button className="button primary" type="submit">
//                           Checkout
//                         </button>
//                       </li>
//                     </ul>
//                   </form>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(
//   (state) => ({
//     order: state.order.order,
//     cartItems: state.cart.cartItems,
//   }),
//   { removeFromCart, createOrder, clearOrder }
// )(Cart);

import React, { useState } from 'react';
import formatCurrency from '../util';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { removeFromCart } from '../actions/cartActions';
import { createOrder, clearOrder } from '../actions/orderActions';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, order } = useSelector((state) => ({
    cartItems: state.cart.cartItems,
    order: state.order.order,
  }));

  const [checkoutData, setCheckoutData] = useState({
    name: '',
    email: '',
    address: '',
    showCheckout: false,
  });

  const handleInput = (e) => {
    setCheckoutData({
      ...checkoutData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const orderData = {
      name: checkoutData.name,
      email: checkoutData.email,
      address: checkoutData.address,
      cartItems: cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    dispatch(createOrder(orderData));
  };

  const closeModal = () => {
    dispatch(clearOrder());
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} items in the cart{' '}
        </div>
      )}

      {order && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <button className="close-modal" onClick={closeModal}>
            x
          </button>
          <div className="order-details">
            <h3 className="success-message">Your order has been placed.</h3>
            <h2>Order {order._id}</h2>
            <ul>
              <li>
                <div>Name:</div>
                <div>{order.name}</div>
              </li>
              <li>
                <div>Email:</div>
                <div>{order.email}</div>
              </li>
              <li>
                <div>Address:</div>
                <div>{order.address}</div>
              </li>
              <li>
                <div>Date:</div>
                <div>{order.createdAt}</div>
              </li>
              <li>
                <div>Total:</div>
                <div>{formatCurrency(order.total)}</div>
              </li>
              <li>
                <div>Cart Items:</div>
                <div>
                  {order.cartItems.map((x) => (
                    <div key={x._id}>
                      {x.count} {' x '} {x.title}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </Modal>
      )}

      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                    {formatCurrency(item.price)} x {item.count}{' '}
                    <button
                      className="button"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{' '}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  onClick={() => {
                    setCheckoutData({ ...checkoutData, showCheckout: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {checkoutData.showCheckout && (
              <div className="cart">
                <form onSubmit={handleCreateOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={handleInput}
                      ></input>
                    </li>
                    <li>
                      <button className="button primary" type="submit">
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
