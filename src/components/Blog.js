// import React from 'react';
//import ProductList from './ProductList';

import React, { useState, useEffect } from 'react';
import data from './data.json';
import Products from './Products';
//import Filter from './Filter';

import formatCurrency from '../util';
import Cart from './Cartes';
import { useNavigate, useLocation } from 'react-router-dom';
import BlogPost from './Blogposts'; // Make sure to provide the correct path

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Set the blog post data from data.json
    setBlogPosts(
      data.products.filter((products) => products.category === 'blog')
    );
  }, []);

  // const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState(data.products);
  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(localStorage.getItem('cartItems'))
  // );

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
                <h2>BLOG</h2>
                <ul className="text-white flex space-x-2 items-center justify-center">
                  {' '}
                  <li className="text-center text-2xl">
                    <a href="/">Home</a>
                  </li>
                  <li className="slash">/</li>
                  <li className="active text-center text-yellow-500 text-2xl">
                    BLOG
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-8 ">
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
      </section> */}
      <section className="bg-gray-100 py-8">
        <main className="container mx-auto py-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 flex gap-4">
            {blogPosts.map((post) => (
              <BlogPost key={post._id} post={post} />
            ))}
          </div>
        </main>
        <div className="col-lg-12 py-12  ">
          <ul className="pagination bg-white flex space-x-4 px-40 justify-center">
            <li className="page-item  rounded-lg bg-gray-200 p-3 ">
              <a className="page-link" href="#!">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item active rounded-lg bg-pink-500 p-3">
              <a className="page-link" href="#!">
                1
              </a>
            </li>
            <li className="page-item  rounded-lg bg-gray-200 p-3 ">
              <a className="page-link" href="#!">
                2
              </a>
            </li>
            <li className="page-item  rounded-lg bg-gray-200 p-3 ">
              <a className="page-link" href="#!">
                3
              </a>
            </li>
            <li className="page-item  rounded-lg bg-gray-200 p-3 ">
              <a className="page-link" href="#!" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-8  ">
        <div className="container mx-auto  ">
          <div className="flex flex-wrap   ">
            <div className="lg:w-2/2 md:w-full px-30  ">
              <div className="product_shot flex justify-center  ">
                <div className="product_shot_title text-4xl font-sans font-bold justify-center">
                  <h1 className="text-4xl">FOLLOW US INSTAGRAM</h1>
                  <p className="text-gray-400 text-xl">
                    Mauris luctus nisi sapien tristique dignissim ornare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

                  {/* Conditionally render the title and price for the 'Woman' category */}
                  {electricProduct.category === 'Electric' && (
                    <div>
                      <p className="text-xl text-center">
                        {electricProduct.title}
                      </p>
                      <div className="product-price flex justify-center">
                        <div>{formatCurrency(electricProduct.price)}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </main>
      </section>
    </body>
  );
};

export default Blog;
