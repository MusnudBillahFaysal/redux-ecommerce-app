//import React from 'react';
//import ProductList from './ProductList';
import BarChart from './BarChart'; // Import the BarChart component
import faker from 'faker';
import React, { useState, useEffect } from 'react';
import jsonData from './data.json';

import formatCurrency from '../util';
import data from './data.json';
import Products from './Products';
//import Filter from './Filter';
import Cart from './Cartes';
import { useNavigate, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faIdBadge,
  faShoppingBag,
  faShoppingCart,
  faTachometer,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import LineChart from './LineChart';

const Register = () => {
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
        <div className="container border text-center py-12">
          <div className="row text-center ">
            <div className="col-lg-12 text-center ">
              <div className="common_banner_text text-white justify-center text-4xl">
                <h2>Register</h2>
                <ul className="text-white flex space-x-2 items-center justify-center">
                  {' '}
                  <li className="text-center text-2xl">
                    <a href="/">Home</a>
                  </li>
                  <li className="slash">/</li>
                  <li className="active text-center text-yellow-500 text-2xl">
                    Register
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mt-12">
        <div className="account_form mx-auto max-w-xl border p-12 shadow-lg w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-center">Register</h3>
          <form action="#" className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="username" className="text-sm font-medium">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="username" className="text-sm font-medium">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="login_submit text-center">
              <button
                className="w-1/4 text-center py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                type="submit"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </section>
    </body>
  );
};

export default Register;
