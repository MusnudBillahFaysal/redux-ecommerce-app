// import React from 'react';
//import ProductList from './ProductList';

import React, { useState, useEffect } from 'react';
import data from './data.json';
import Products from './Products';
//import Filter from './Filter';
import Cart from './Cartes';
import { useNavigate, useLocation } from 'react-router-dom';

const Feature = () => {
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
      <section
        id="common_banner_one"
        className="bg-cover bg-center bg-no-repeat bg-common-banner"
        style={{
          backgroundImage:
            "url('https://andshop-reactjs.netlify.app/static/media/common_bg.03a52b45.png')",
        }}
      >
        <div className="container py-12">
          <div className="row text-center ">
            <div className="col-lg-12 text-center ">
              <div className="common_banner_text text-white justify-center text-4xl">
                <h2>Product Hover</h2>
                <ul className="text-white flex space-x-2 items-center justify-center">
                  {' '}
                  <li className="text-center text-2xl">
                    <a href="/">Home</a>
                  </li>
                  <li className="slash">/</li>
                  <li className="active text-center text-yellow-500 text-2xl">
                    Product Hover
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="lg:w-2/2 md:w-full px-30">
              <div className="product_shot flex justify-center">
                <div className="product_shot_title text-4xl font-sans font-bold justify-center">
                  <h1>Product Hover One</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <main className="container mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {/* Render your items here */}
            {/* <div className="bg-white p-4 rounded-lg shadow">
              <Products products={products} addToCart={addToCart} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Products products={products} addToCart={addToCart} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Products products={products} addToCart={addToCart} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Products products={products} addToCart={addToCart} />
            </div>
            {/* Repeat these divs for each item */}
            {products
              .filter((product) => product.category !== 'Electric')
              .map((electricProduct) => (
                <div
                  key={electricProduct.id}
                  className="bg-white p-4 rounded-lg shadow"
                >
                  <Products
                    products={[electricProduct]}
                    addToCart={addToCart}
                  />
                </div>
              ))}
          </div>
        </main>
      </section>

      <section>
        <div className="container py-12"></div>
      </section>

      <section className="py-8 bg-gray-300">
        <div className="container mx-auto bg-gray-300">
          <div className="flex flex-wrap bg-gray-300 ">
            <div className="lg:w-2/2 md:w-full px-30 bg-gray-300">
              <div className="product_shot flex justify-center bg-gray-300">
                <div className="product_shot_title text-4xl font-sans font-bold justify-center">
                  <h1>Product Hover Two</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <main className="container mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {/* Filter and render Electric category items here */}
            {products
              .filter((product) => product.category === 'Electric')
              .map((electricProduct) => (
                <div
                  key={electricProduct.id}
                  className="bg-white p-4 rounded-lg shadow"
                >
                  <Products
                    products={[electricProduct]}
                    addToCart={addToCart}
                  />
                </div>
              ))}
          </div>
        </main>
      </section>
    </body>
  );
};

export default Feature;
