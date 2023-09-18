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

const MyAccount = () => {
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
        <div className="container py-12">
          <div className="row text-center ">
            <div className="col-lg-12 text-center ">
              <div className="common_banner_text text-white justify-center text-4xl">
                <h2>MyAccount</h2>
                <ul className="text-white flex space-x-2 items-center justify-center">
                  {' '}
                  <li className="text-center text-2xl">
                    <a href="/">Home</a>
                  </li>
                  <li className="slash">/</li>
                  <li className="active text-center text-yellow-500 text-2xl">
                    MyAccount
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
          <div className=" col-span-3 mychart_area bg-white p-4 rounded-lg  ">
            <section>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center  gap-4">
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
              </div> */}

              <div className="myaccount-content border p-12">
                <h4 className="title w-full text-4xl p-6 border-b mb-3 ">
                  Account details
                </h4>
                <div className="login_form_container ">
                  <div className="account_details_form">
                    <form action="#">
                      <div className="img_profiles rounded-full ">
                        <img
                          src="https://andshop-reactjs.netlify.app/static/media/team1.2bfac19d.png"
                          alt="img"
                          className="rounded-full  w-1/6 border border-yellow-600"
                        />
                      </div>
                      <div className="input-radio mt-6">
                        <span className="custom-radio">
                          <input type="radio" name="mr" value="1" checked /> Mr.
                        </span>
                      </div>
                      <div className="default-form-box  mt-6 mb-20">
                        <label className="font-bold">
                          First Name <br></br>
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          className="form-control border p-4 py-3 mt-4 w-full"
                          value="Kazi"
                        />
                      </div>
                      <div className="default-form-box mb-20">
                        <label className="font-bold">Last Name</label>
                        <input
                          type="text"
                          name="last-name"
                          className="form-control border p-4 py-3 mt-4 w-full"
                          value="Saiful"
                        />
                      </div>
                      <div className="default-form-box mb-20">
                        <label className="font-bold">Email</label>
                        <input
                          type="text"
                          name="email-name"
                          className="form-control border p-4 py-3 mt-4 w-full"
                          value="demo123@gmail.com"
                        />
                      </div>
                      <div className="default-form-box mb-20">
                        <label className="font-bold">Password</label>
                        <input
                          type="password"
                          name="user-password"
                          className="form-control border p-4 py-3 mt-4 w-full"
                          value="123456789"
                        />
                      </div>
                      <div className="default-form-box mb-20">
                        <label className="font-bold">Birthdate</label>
                        <input
                          type="date"
                          name="birthday"
                          className="form-control border p-4 py-3 mt-4 w-full"
                          value="2017-06-01"
                        />
                      </div>
                      <span className="example">(E.g.: 05/31/1970)</span>
                      <br />
                      <label className="checkbox-default" htmlFor="offer">
                        <input type="checkbox" id="offer" />
                        <span>Receive offers from our partners</span>
                      </label>
                      <br />
                      <label
                        className="checkbox-default checkbox-default-more-text"
                        htmlFor="newsletter"
                      >
                        <input type="checkbox" id="newsletter" />
                        <span>
                          Sign up for our newsletter
                          <br />
                          <em>
                            You may unsubscribe at any moment. For that purpose,
                            please find our contact info in the legal notice.
                          </em>
                        </span>
                      </label>
                      <div className="save_button mt-3">
                        <a
                          className="theme-btn-one bg-black text-white p-2 m-0 btn_sm"
                          href="/account-edit"
                        >
                          UPDATE
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </body>
  );
};

export default MyAccount;
