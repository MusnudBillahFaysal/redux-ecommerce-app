import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHeart,
  faShoppingBag,
  faBars,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-12">
      <div className="flex items-center  h-10">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="mobile-right-side space-x-1 mr-40 ">
        <ul className="flex items-center space-x-7 text-black hover:text-golden mr-12">
          <ul className="flex justify-center space-x-12">
            <li className="relative group">
              <a
                href="/#"
                className="hover:text-yellow-400 text-black font-serif font-bold mb-20"
              >
                HOME
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </a>
              <ul className="absolute hidden bg-white text-black p-2 w-72 space-y-2 group-hover:block transition-all duration-300 ease-in-out transform translate-y-[-20px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <li>
                  <a href="/">Fashion</a>
                </li>
                <li>
                  <a href="/furniture">Furniture</a>
                </li>
                <li>
                  <a href="/electronics">Electronics</a>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <a
                href="/shop"
                className="hover:text-yellow-400 space-x-10 text-black font-serif font-bold"
              >
                SHOP
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </a>
              <div className="absolute hidden bg-white text-black p-2 w-128 px-4 space-y-2 group-hover:block transition-all duration-300 ease-in-out transform translate-y-[-20px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="grid grid-cols-3 gap-6">
                  <div className="mega-menu-column">
                    <h3 className="mega-menu-column-titl font-bold mb-6">
                      Shop Layouts
                    </h3>
                    <ul className="mega-menu-sub">
                      <li>
                        <a href="/shop">Shop Four Grid</a>
                      </li>
                      <li>
                        <a href="/shopTwo">Shop Three Grid</a>
                      </li>
                      <li>
                        <a href="/shoplist">Shop List View</a>
                      </li>
                      <li>
                        <a href="/shop-left-bar">Shop Left Sidebar</a>
                      </li>
                      <li>
                        <a href="/shop-right-bar">Shop Right Sidebar</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-column">
                    <h3 className="mega-menu-column-titl font-bold mb-6">
                      Other Pages
                    </h3>
                    <ul className="mega-menu-sub">
                      <li>
                        <a href="/cart">Cart View One</a>
                      </li>
                      <li>
                        <a href="/cartTwo">Cart View Two</a>
                      </li>
                      <li>
                        <a href="/empty-cart">Empty Cart</a>
                      </li>
                      <li>
                        <a href="/checkout-one">Checkout View One</a>
                      </li>
                      <li>
                        <a href="/checkout-two">Checkout View Two</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-column">
                    <div className="menu-banner">
                      <a href="/#!">
                        <img
                          src="https://andshop-reactjs.netlify.app/static/media/nav_banner.e87f5849.png"
                          alt="img"
                          className="menu-banner-img h-48"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group ">
              <a
                href="/feature"
                className="hover:text-yellow-400 space-x-8 text-black font-serif font-bold"
              >
                FEATURE
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </a>
              <ul className="absolute hidden  bg-white text-black mt-20  p-2 w-72 space-y-2 transform translate-x-2/2 -translate-y-2 group-hover:block">
                <li>
                  <a href="/product-hover">Product Hover</a>
                </li>
                <li>
                  <a href="/order-success">Order Success</a>
                </li>
                <li>
                  <a href="/email-template-one">Email Template 1</a>
                </li>
                <li>
                  <a href="/email-template-two">Email Template 2</a>
                </li>
                <li>
                  <a href="/email-template-three">Email Template 3</a>
                </li>
                <li>
                  <a href="/lookbooks">LookBook</a>
                </li>
                <li>
                  <a href="/invoice-one">Invoice 1</a>
                </li>
                <li>
                  <a href="/invoice-two">Invoice 2</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href="/blog"
                className="hover:text-yellow-400 text-black font-serif font-bold"
              >
                BLOG
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </a>
              <ul className="absolute hidden bg-white text-black mt-20 p-2 w-72 space-y-2 transform translate-x-2/2 -translate-y-2 group-hover:block">
                <li>
                  <a href="/blog-grid-three">Blog Grid View One</a>
                </li>
                <li>
                  <a href="/blog-grid-two">Blog Grid View Two</a>
                </li>
                <li>
                  <a href="/blog-list-view">Blog List View</a>
                </li>
                <li>
                  <a href="/blog-single-one">Blog Single View One</a>
                </li>
                <li>
                  <a href="/blog-single-two">Blog Single View TWo</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a
                href="/#"
                className="hover:text-yellow-400 text-black font-serif font-bold "
              >
                PAGES <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </a>
              <ul className="absolute hidden bg-white text-black pb-22 w-72 px-4 space-y-2 group-hover:block transition-all duration-300 ease-in-out transform translate-y-[-20px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <li>
                  <a className="space-x-8" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/vendor">Vendor</a>
                </li>
                <li>
                  <a href="/my-account">My Account</a>
                </li>
                <li>
                  <a href="/contact-one">Contact Us One</a>
                </li>
                <li>
                  <a href="/contact-two">Contact Us Two</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/coming-soon">Coming Soon</a>
                </li>
                <li>
                  <a href="/faqs">Frequently Questions</a>
                </li>
                <li>
                  <a href="/error">404 Error</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <a href="#!" className="search_width ml-80 space-x-8">
              <FontAwesomeIcon icon={faSearch} size="2x" />{' '}
              {/* Adjust the size here */}
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/carts" className="offcanvas-toggle">
              <FontAwesomeIcon icon={faHeart} size="2x" />{' '}
              {/* Adjust the size here */}
              <span className="item-count text-golden">3</span>
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/carts" className="offcanvas-toggle">
              <FontAwesomeIcon icon={faShoppingBag} size="2x" />{' '}
              {/* Adjust the size here */}
              <span className="item-count text-golden">4</span>
            </a>
          </li>
          <li>
            <a href="#!" className="offcanvas-toggle offside-menu">
              <FontAwesomeIcon icon={faBars} size="2x" />{' '}
              {/* Adjust the size here */}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
