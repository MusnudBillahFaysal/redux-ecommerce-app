import React, { useState, useEffect } from 'react';
import data from './data.json';
import Products from './Products';
//import Filter from './Filter';
import Cart from './Cartes';
import { useNavigate, useLocation } from 'react-router-dom';
const Home = () => {
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
        id="banner_one"
        className="py-16"
        style={{
          // Set the background image using inline styles
          backgroundImage: `url("/banner.png")`, // Reference the image in the public folder
          backgroundSize: 'cover', // Adjust background image size as needed
          backgroundPosition: 'center center', // Adjust background image position as needed
        }}
      >
        <div className="container mx-auto ml-4">
          <div className="flex flex-wrap items-center ml-12">
            <div className="w-full lg:w-6/12">
              <div
                className="banner_text_one wow animate__animated animate__flipInX text-6xl"
                data-wow-duration="3.0s"
                data-wow-delay=".3s"
              >
                <h1 className="text-8xl">
                  LIVE FOR <br /> {/* Add a line break */}
                  <span
                    className="wow animate__animated animate__flipInX text-white text-9xl font-bold"
                    data-wow-duration="2.0s"
                    data-wow-delay=".5s"
                  >
                    Fashion
                  </span>
                </h1>
                <h3 className=" mt-12 mb-12  ">Save Up To 50%</h3>
                <button
                  className="w-auto text-center text-xl p-6 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                  type="submit"
                >
                  SHOP NOW
                </button>
                {/* <a
                  className="theme-btn-one  bg-black text-white btn_sm m-2 p-2 px-2 py-1"
                  href="/shop"
                >
                  {' '}
                  {/* Change button styles */}
                {/* SHOP NOW
                </a> */}
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="hero_img">
                <img src="/w1.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}

      <section id="product_variation_one" className="pt-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* First product variation */}
            <div className="col-span-1">
              <div className="product_variation_one_boxed img-zoom-hover flex relative mb-12">
                <div className="product_var_one_text absolute bg-white bg-opacity-10 text-black p-4 mb-12 mt-6 ml-6">
                  <h4 className="color_one text-2xl text-orange-500 font-bold">
                    Outerwear
                  </h4>
                  <h2 className="mb-4 text-4xl font-bold">New</h2>
                  <h4 className="color_one mb-4   text-2xl font-bold">
                    Collection
                  </h4>
                  <a
                    className="theme-btn-one bg-black text-white  btn_md p-2"
                    href="/shop"
                  >
                    SHOP NOW
                  </a>
                </div>
                <img
                  src="https://andshop-reactjs.netlify.app/static/media/woman.285f1a7d.png"
                  alt="Outerwear"
                />
              </div>
              {/* Second product variation */}
              <div className="col-span-1">
                <div className="product_variation_one_boxed img-zoom-hover flex relative">
                  <div className="product_var_one_text absolute bg-white bg-opacity-10 text-black p-4 mb-12 mt-6 ml-6">
                    <h4 className="color_one text-2xl text-orange-500 font-bold">
                      Summer
                    </h4>
                    <h2 className="color_one mb-2 font-bold text-4xl">Hot</h2>
                    <h4 className="color_one mb-4 font-bold text-2xl">
                      Collection
                    </h4>
                    <a
                      className="theme-btn-one bg-black text-white text-1xl btn_md p-2"
                      href="/shop"
                    >
                      SHOP NOW
                    </a>
                  </div>
                  <img
                    src="https://andshop-reactjs.netlify.app/static/media/woman1.b58d4262.png"
                    alt="Summer"
                  />
                </div>
              </div>
            </div>
            {/* Third product variation */}
            <div className="col-span-1">
              <div className="product_variation_one_boxed img-zoom-hover flex relative">
                <div className="product_var_one_text absolute bg-white bg-opacity-10 text-black p-4 ml-12 mb-12 mt-80">
                  <h2 className="color_one text-4xl font-bold text-yellow-600">
                    10% Offer
                  </h2>
                  <h4 className="color_one mb-2 text-2xl ">
                    No Selected Models
                  </h4>
                  <a
                    className="theme-btn-one bg-black text-white text-1xl btn_md p-2"
                    href="/shop"
                  >
                    SHOP NOW
                  </a>
                </div>
                <img
                  src="https://andshop-reactjs.netlify.app/static/media/bag.e31a8e04.png"
                  alt="10% Offer"
                />
              </div>
            </div>

            {/* Fifth product variation */}
            <div className="col-span-1">
              {/* Fourth product variation */}
              <div className="col-span-1 mb-12">
                <div className="product_variation_one_boxed img-zoom-hover flex relative">
                  <div className="product_var_one_text absolute bg-white bg-opacity-10 text-black p-4 mb-12 mt-6 ml-6">
                    <h2 className="mb-2 font-bold text-4xl">NEW</h2>
                    <h4 className="color_one mb-4 text-2xl font-bold text-orange-500">
                      ARRIVALS
                    </h4>
                    <a
                      className="theme-btn-one bg-black text-white text-1xl btn_md p-2"
                      href="/shop"
                    >
                      SHOP NOW
                    </a>
                  </div>
                  <img
                    src="https://andshop-reactjs.netlify.app/static/media/woman4.6c41e1ce.png"
                    alt="New Arrivals"
                  />
                </div>
              </div>
              <div className="product_variation_one_boxed img-zoom-hover flex relative">
                <div className="product_var_one_text absolute bg-white bg-opacity-10 text-black p-4 mb-12 mt-6 ml-6">
                  <h2 className="mb-2 text-4xl font-bold">HOT</h2>
                  <h4 className="color_one mb-4 text-orange-500 font-bold text-2xl ">
                    OFFER
                  </h4>
                  <a
                    className="theme-btn-one bg-black text-white text-1xl btn_md p-2"
                    href="/shop"
                  >
                    SHOP NOW
                  </a>
                </div>
                <img
                  src="https://andshop-reactjs.netlify.app/static/media/kids.d99e7e66.png"
                  alt="Hot Offer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-300 ">
        <div className="container mx-auto bg-gray-300 py-30">
          <div className="flex flex-wrap bg-gray-300 ">
            <div className="lg:w-2/2 md:w-full px-30 bg-gray-300">
              <div className="product_shot flex justify-center bg-gray-300">
                <div className="product_shot_title text-4xl font-sans font-bold text-center absolute">
                  <h1>
                    HOT PRODUCT <br></br>
                  </h1>
                  <div className="product_shot_title text-xl font-sans font-bold justify-start ">
                    <p className="relative group text-xl mt-6 mr-10 text-gray-500">
                      Mauris luctus nisi sapien tristique dignissim ornare
                    </p>
                  </div>
                </div>
                <div className="product_shot_title text-2xl font-sans font-bold justify-center relative mt-36">
                  <ul className="flex justify-center space-x-7">
                    <li className="relative group">
                      <a
                        href="/#"
                        className="hover:text-yellow-400  font-serif font-bold underline text-pink-500"
                      >
                        New Arrival
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/shop"
                        className="hover:text-yellow-400 space-x-8 text-black font-serif font-bold"
                      >
                        Trending
                      </a>
                    </li>
                    <li className="relative group ">
                      <a
                        href="/feature"
                        className="hover:text-yellow-400 space-x-8 text-black font-serif font-bold"
                      >
                        Best Sellers
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="/#"
                        className="hover:text-yellow-400 text-black font-serif font-bold"
                      >
                        On sall
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="/#"
                        className="hover:text-yellow-400 text-black font-serif font-bold "
                      >
                        Pages
                      </a>
                    </li>
                  </ul>
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
      {/* // <section id="offer_timer_one" className="bg-gray-100 mt-40"> */}

      <section
        id="banner_one"
        className="py-16 mt-40"
        style={{
          // Set the background image using inline styles
          backgroundImage: `url("https://andshop-reactjs.netlify.app/static/media/t-shirt.7a6c302e.png")`, // Reference the image in the public folder
          backgroundSize: 'cover', // Adjust background image size as needed
          backgroundPosition: 'center center', // Adjust background image position as needed
        }}
      >
        {' '}
        <div className="container mx-auto py-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 ml-40">
            {/* Counter Clock */}
            <div className="lg:w-1/4 lg:pl-2 ml-80">
              <div className="count_down p-4  text-center  rounded-lg   ">
                <div className="countdown-box border p-2 mb-4 rounded-lg border-black">
                  <div className="text-xl font-bold border-black">
                    <span>00</span> <br /> days
                  </div>
                </div>
                <div className="countdown-box border p-2 mb-4 rounded-lg border-black">
                  <div className="text-xl font-bold">
                    <span>00</span> <br /> Hours
                  </div>
                </div>
                <div className="countdown-box border p-2 mb-4 rounded-lg border-black">
                  <div className="text-xl font-bold">
                    <span>
                      00 <br />
                    </span>{' '}
                    Minutes
                  </div>
                </div>
                <div className="countdown-box border p-2 mb-4 rounded-lg border-black">
                  <div className="text-xl font-bold">
                    <span>
                      00 <br />
                    </span>{' '}
                    Seconds
                  </div>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="lg:w-3/4 lg:pl-38">
              <div className="offer_timer_text p-6   border-gray-300 rounded-lg mt-1  ">
                <h2 className="text-3xl font-semibold teext-left">
                  20% OFF FOR ALL T-SHIRT COLLECTION
                </h2>
                <span>
                  {' '}
                  <p className="text-gray-600 mt-6 mb-12 text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Porro quisquam, odit assumenda sit modi commodi esse
                    necessitatibus temporibus aperiam veritatis eveniet!
                  </p>
                </span>
                <a
                  href="#!"
                  className="theme-btn-one bg-black btn_md text-white px-4 py-2   mr-60 hover:bg-gray-900 mt-4"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Home;
