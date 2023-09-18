// import React from 'react';
//import ProductList from './ProductList';

import React, { useState, useEffect } from 'react';

import formatCurrency from '../util';
import data from './data.json';
import Products from './Products';
//import Filter from './Filter';
import Cart from './Cartes';
import { useNavigate, useLocation } from 'react-router-dom';

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

const About = () => {
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
                <h2>About</h2>
                <ul className="text-white flex space-x-2 items-center justify-center">
                  {' '}
                  <li className="text-center text-2xl">
                    <a href="/">Home</a>
                  </li>
                  <li className="slash">/</li>
                  <li className="active text-center text-yellow-500 text-2xl">
                    About
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          <div className="bg-gray-100 py-0 px-4 sm:px-6 lg:px-0 flex">
            <div className="w-2/2 pr-0">
              <img
                src="https://andshop-reactjs.netlify.app/static/media/img-about.863a42db.jpg"
                alt="img"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-2/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              ABOUT OUR ANDSHOP STORE
            </h2>
            <h4 className="text-lg text-black font-bold mb-6">
              We believe that every project existing in the digital world is a
              result of an idea and every idea has a cause.
            </h4>
            <p className="text-base text-gray-700 mb-4">
              For this reason, our each design serves an idea. Our strength in
              design is reflected by our name, our care for details. Our
              specialists won't be afraid to go the extra mile just to approach
              near perfection. We don't require everything to be perfect, but we
              need them to be perfectly cared for.
            </p>
            <p className="text-base text-gray-700 mb-4">
              That's a reason why we are willing to give contributions at best.
              Not a single detail is missed out under Billey's professional
              eyes. The amount of dedication and effort equals to the level of
              passion and determination. Get better, together as one. Proin eget
              tortor risus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </p>
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
                </div>
              ))}
          </div>
        </main>
      </section>
    </body>
  );
};

export default About;
