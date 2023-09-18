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

const Skill = ({ name, level, color }) => (
  <div className=" flex mb-4">
    {/* <div
      className={`relative pt-1 flex items-center justify-between p-2 font-semibold text-white ${color} rounded-full`}
    >
      <div className={`mr-2 flex w-1/4 ${color}`}>{name}</div>
      <div
        className={`text-xs w-1/4 bg-white text-gray-800 p-1 rounded-full ${color}`}
      >
        {level}%
      </div>
    </div> */}
    <div className={`flex h-2 rounded w-1/4 mb-0`}>
      <div className={`  ml-20 `}>
        <div className="h-2 bg-red-600 p-6 w-full m-0 w rounded font-bold pt-1 justify-center ">
          {name}
        </div>
      </div>
    </div>

    <div className={`  h-2 w-3/4 mb-10`}>
      <div className={` bg-gray-200 rounded    `}>
        <div
          style={{ width: `${level}%` }}
          className="h-2 text-end bg-orange-600 pt-1 p-6 rounded  "
        >
          {level}%
        </div>
      </div>
    </div>
  </div>
);

const Vendor = () => {
  const skills = [
    { name: 'UI/UX', level: 90, color: 'bg-green-500' },
    { name: 'IDEA', level: 80, color: 'bg-green-500' },
    { name: 'DESIGN', level: 65, color: 'bg-yellow-500' },

    // Add more skills as needed
  ];

  // const skills = [
  //   { name: 'UI/UX', level: 85 },
  //   { name: 'Ideas', level: 75 },
  //   { name: 'Design', level: 65 },
  //   // Add more skills here
  // ];
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
                <h2>Vandor</h2>
                <ul className="text-white flex space-x-2 items-center justify-center">
                  {' '}
                  <li className="text-center text-2xl">
                    <a href="/">Home</a>
                  </li>
                  <li className="slash">/</li>
                  <li className="active text-center text-yellow-500 text-2xl">
                    Vandor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="col-sm-12 col-md-12 col-lg-1">
            <div className="dashboard_tab_button p-0 w-full">
              <ul className="nav  border-black p-0 m-0 w-full flex-col dashboard-list">
                <li>
                  <a
                    href="#vendor_dashboard"
                    data-toggle="tab"
                    className="active bg-yellow-500 text-2xl border m-6 p-2 mtw-full text-white border-black flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faTachometer}
                      size="1x"
                      className="text-golden hover:text-pink-400"
                    />
                    <span className="ml-2">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#all_product"
                    data-toggle="tab"
                    className="active bg-white text-2xl border text-black m-6 p-2 mtw-full  hover:bg-yellow-400 hover:text-white border-black flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      size="1x"
                      className="text-golden hover:text-pink-400 mr-2"
                    />
                    <span>Product</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#all_order"
                    data-toggle="tab"
                    className="active bg-white text-2xl border text-black m-6 p-2 mtw-full  hover:bg-yellow-400 hover:text-white border-black flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      size="x"
                      className="text-golden hover:text-pink-400 mr-2"
                    />
                    <span>Order</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#profile_vendor"
                    data-toggle="tab"
                    className="active bg-white text-2xl border text-black m-6 p-2 mtw-full  hover:bg-yellow-400 hover:text-white border-black flex items-center"
                  >
                    <i className="fa fa-id-badge mr-2"></i>
                    <FontAwesomeIcon
                      icon={faIdBadge}
                      size="x"
                      className="text-golden hover:text-pink-400 mr-2"
                    />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/add-products"
                    className="active bg-white text-2xl border text-black m-6 p-2 mtw-full  hover:bg-yellow-400 hover:text-white border-black flex items-center"
                  >
                    <i className="fa fa-cart-plus mr-2"></i>
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      size="x"
                      className="text-golden hover:text-pink-400 mr-2"
                    />
                    <span>Add Product</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#vendor_setting"
                    data-toggle="tab"
                    className="active bg-white text-2xl border text-black m-6 p-2 mtw-full  hover:bg-yellow-400 hover:text-white border-black flex items-center"
                  >
                    <i className="fa fa-user mr-2"></i>
                    <FontAwesomeIcon
                      icon={faUser}
                      size="x"
                      className="text-golden hover:text-pink-400 mr-2"
                    />
                    <span>Setting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-span-3 mychart_area bg-white p-4 rounded-lg shadow-lg">
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center  gap-4">
                <div className="col-lg-4 col-md-4 border border-yellow-500 py-10 col-sm-6 col-12">
                  <div className=" col-span-1 vendor_top_box">
                    <h2 className="text-yellow-500 font-bold text-4xl">25</h2>
                    <h4 className="  text-4xl">Total Products</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 border border-yellow-500 py-10 col-sm-6 col-12">
                  <div className="vendor_top_box">
                    <h2 className="text-yellow-500 font-bold text-4xl">2552</h2>
                    <h4 className="  text-4xl">Total Sales</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 border border-yellow-500 py-10 col-sm-6 col-12">
                  <div className="vendor_top_box">
                    <h2 className="text-yellow-500 font-bold text-4xl">50</h2>
                    <h4 className="  text-4xl">Order Pending</h4>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 text-center  gap-4">
                <div className=" col-span-1 w-full max-w-screen-lg mx-auto p-4">
                  <div className="bg-white p-4 shadow-md rounded-md">
                    <LineChart /> {/* Use the LineChart component here */}
                  </div>
                </div>
                <div className=" col-span-1 w-full max-w-screen-lg mx-auto pb-12 p-4">
                  <div className="bg-white p-4 shadow-md rounded-md">
                    {/* Other vendor-related components */}
                    <BarChart /> {/* Use the BarChart component here */}
                  </div>
                  {/* Other vendor-related components */}
                </div>
              </div>
            </section>

            <section className="bg-gray-100 py-12">
              <main className="container mx-auto py-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 text-center  gap-1">
                  <div className="max-w-screen-lg mx-auto p-3 m-1 float-left">
                    <h1 className="min-w-full text-start text-2xl font-bold bg-white">
                      Pending Products
                    </h1>
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="px-3 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-600 uppercase tracking-wider">
                            image
                          </th>
                          <th className="px-0 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-600 uppercase tracking-wider">
                            Product Title
                          </th>
                          <th className="px-0 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-600 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-0 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-600 uppercase tracking-wider">
                            Sales
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products
                          .filter(
                            (product) =>
                              product.category === 'Woman' ||
                              product.category === 'Electric'
                          )

                          .map((product) => (
                            <tr key={product._id}>
                              <td className="px-1 py-4 whitespace-nowrap">
                                <img
                                  src="/ic.jpg" // Use the path to your image in the public folder
                                  alt={product.title}
                                  className="w-12 h-12 object-cover rounded-full"
                                />
                              </td>
                              <td className="px-1 py-4 whitespace-nowrap">
                                <p className="text-gray-500">{product.title}</p>
                              </td>
                              <td className="px-1 py-4 whitespace-nowrap">
                                <p className="text-xl text-gray-900">
                                  ${product.price}
                                </p>
                              </td>
                              <td className="px-1 py-4 whitespace-nowrap">
                                <p className="text-xl text-gray-900">200</p>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="  max-w-screen-lg mx-auto pb-12 p-4">
                    <h1 className="min-w-full text-2xl font-bold bg-white">
                      Recent Orders
                    </h1>

                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="px-2 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-600 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-600 uppercase tracking-wider">
                            Product Details
                          </th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-gray-600 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products
                          .filter(
                            (product) =>
                              product.category === 'Woman' ||
                              product.category === 'Electric'
                          )

                          .map((product) => (
                            <tr key={product._id}>
                              <td className="px-0 py-4 whitespace-nowrap">
                                <p className="text-gray-500">{product._id}</p>
                              </td>
                              <td className="px-0 py-4 whitespace-nowrap">
                                <p className="text-gray-500">{product.title}</p>
                              </td>
                              <td className="px-0 py-4 whitespace-nowrap">
                                <p className="text-xl text-gray-900">shipped</p>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <main className="container mx-auto py-4">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="lg:w-1/2">
                <div className="about_progressbar_content">
                  <h2 className="text-2xl font-semibold mb-4">
                    Functionality meets perfection
                  </h2>
                  <p>
                    In today’s day and age, one cannot underestimate the
                    importance of design, the art of creating striking visuals
                    to move and captivate your audience. And as the world
                    becomes more and more digitized with each passing second,
                    the importance of graphic design has been rocketed to the
                    top.
                  </p>
                </div>
              </div>
              {/* <div className="lg:w-1/2">
                <div className="w-full">
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between"></div>
                        <div className="flex h-2 mb-4 p-6 overflow-hidden bg-orange-700">
                          <div className="grid grid-cols-2 absolute top-0 left-0 right-0 bottom-0  items-center justify-start">
                            {skill.name}
                            <div className="text-end float-right">
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
              {/* <div className="lg:w-1/2">
                <div className="w-full">
                  {skills.map((skill, index) => {
                    let barColorred;
                    let barColoryellow;

                    if (skill.level >= 80) {
                      barColorred = 'bg-orange-500'; // Green color for skill level >= 70%
                    } else if (skill.level >= 70) {
                      barColorred = 'bg-orange-500'; // Yellow color for skill level >= 40%
                    } else {
                      barColorred = 'bg-orange-500'; // Red color for skill level < 40%
                    }

                    return (
                      <div key={index} className="mb-4">
                        <div className="relative pt-1">
                          <div className="flex items-center border justify-between"></div>

                          <div
                            className={`flex h-2 mb-4 p-3 font-bold text-white w-1/4 overflow-hidden ${barColorred}  `}
                          >
                            <div className="grid grid-cols-2 ml-2 absolute top-0 left-0 right-0 bottom-0  items-center justify-start">
                              {skill.name}
                              <div className="text-end float-right text-black">
                                {skill.level}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div> */}

              <div className="lg:w-1/2">
                <div className="w-full">
                  {skills.map((skill, index) => (
                    <Skill
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                    />
                  ))}
                </div>
              </div>

              {/* new one */}
            </div>
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
                  <h1>EXPERT TEAM</h1>
                  <p className="text-gray-400 text-xl">
                    Mauris luctus nisi sapien tristique dignissim ornare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <main className="container mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Filter and render Electric category items here */}
            {products
              .filter((product) => product.category === 'Expert')
              .map((electricProduct) => (
                <div
                  key={electricProduct.id}
                  className="bg-white p-0 mb-4 rounded-lg shadow"
                >
                  {/* Render the image for all categories */}
                  <img
                    src={electricProduct.image}
                    alt={electricProduct.title}
                    className="w-full h-auto mb-4"
                  />

                  {/* Conditionally render the title and price for the 'Woman' category */}
                  {electricProduct.category === 'Expert' && (
                    <div>
                      <p className="text-xl text-center font-bold">
                        {electricProduct.name}
                      </p>
                    </div>
                  )}
                  {electricProduct.category === 'Expert' && (
                    <div>
                      <p className="text-xl text-center mb-6">
                        {electricProduct.title}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </main>
      </section>

      <section className="bg-white py-0">
        <main className="container mx-auto py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
            {/* Filter and render Electric category items here */}
            {products
              .filter((product) => product.category === 'Woman')
              .map((electricProduct) => (
                <div
                  key={electricProduct.id}
                  className="bg-white p-0 rounded-lg shadow"
                >
                  {/* Render the image for all categories */}
                  <img
                    src={electricProduct.image}
                    alt={electricProduct.title}
                    className="w-full h-auto mb-4"
                  />
                </div>
              ))}
          </div>
        </main>
      </section>
    </body>
  );
};

export default Vendor;
