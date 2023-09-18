// import React from 'react';
//import ProductList from './ProductList';

import React, { useState, useEffect } from 'react';
import data from './data.json';
import Products from './Products';
//import Filter from './Filter';
import Cart from './Cartes';
import { useNavigate, useLocation } from 'react-router-dom';

const Carts = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState(data.products);
  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(localStorage.getItem('cartItems'))
  // );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || [] // Default to an empty array
  );

  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // const createOrder = (order) => {
  //   navigate('/checkoutform', { state: { cartItems } }); // Pass cartItems directly as a prop
  // };

  // const createOrder = (order) => {
  //   navigate('/checkoutform', { state: { cartItems } });
  // };

  // Rest of your code

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    setCartItems(updatedCartItems);
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems];
    let alreadyInCart = false;
    updatedCartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      updatedCartItems.push({ ...product, count: 1 });
    }
    setCartItems(updatedCartItems);
  };

  // const sortProducts = (event) => {
  //   const sortValue = event.target.value;
  //   setSort(sortValue);
  //   setProducts(
  //     [...products].sort((a, b) => {
  //       if (sortValue === 'lowest') {
  //         return a.price > b.price ? 1 : -1;
  //       } else if (sortValue === 'highest') {
  //         return a.price < b.price ? 1 : -1;
  //       }
  //       return a._id > b._id ? 1 : -1;
  //     })
  //   );
  // };

  // const filterProducts = (event) => {
  //   const sizeValue = event.target.value;
  //   setSize(sizeValue);
  //   if (sizeValue === '') {
  //     setProducts(data.products);
  //   } else {
  //     setProducts(
  //       data.products.filter(
  //         (product) => product.availableSizes.indexOf(sizeValue) >= 0
  //       )
  //     );
  //   }
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setCartItems([]);
  // };

  // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // const handleCreateOrder = () => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  //   if (!isLoggedIn) {
  //     // Redirect the user to the login page if not logged in
  //     navigate('/loginform');
  //   } else {
  //     // Proceed with the checkout
  //     const order = {
  //       cartItems,
  //     };
  //     createOrder(order);

  //     // Redirect the user to the checkout form
  //     navigate('/checkoutform', { state: { cartItems } });
  //   }
  // };

  return (
    <body>
      <section className="bg-gray-100 py-8">
        <main className="container mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {/* Render your items here */}

            <div className="bg-white p-4 rounded-lg shadow">
              <Cart
                // cartItems={cartItems}
                cartItems={cartItems || []} // Default to an empty array
                removeFromCart={removeFromCart}
                // createOrder={handleCreateOrder} // Update the prop name here
                addTocart={addToCart}
              />
            </div>
            {/* Repeat these divs for each item */}
          </div>
        </main>
        <footer className="bg-blue-500 text-white py-4 text-center">
          All rights reserved.
        </footer>
      </section>
    </body>
  );
};

export default Carts;
