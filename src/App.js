// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
// import store from './store'; // Import the Redux store
// import ShoppingCart from './components/ShoppingCart';
// import Nav from './components/Nav';
// import Home from './components/Home';
// import Shop from './components/Shop';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <Nav />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/cart" element={<ShoppingCart />} />
//             {/* Add other routes for additional components */}
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Shop from './components/Shop';
// import Nav from './components/Nav';
// import Cart from './components/Cartes';
// import Carts from './components/Cart';
// import Feature from './components/Feature';
// import Footer from './components/Footer';
// import Blog from './components/Blog';
// import About from './components/About';
// import Vendor from './components/Vendor';
// import MyAccount from './components/MyAccount';
// import Login from './components/Login';
// import Register from './components/Register';

// function App() {
//   return (
//     <Router>
//       {' '}
//       <Nav />
//       {/* Wrap your entire application with <Router> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/myaccount" element={<MyAccount />} />
//         <Route path="/vendor" element={<Vendor />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/feature" element={<Feature />} />
//         <Route path="/carts" element={<Carts />} />
//         <Route path="/shop" element={<Shop />} />
//         Feature
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// // export default App;
// import React from 'react';
// import store from './store';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import HomeScreen from './screens/HomeScreen';
// import AdminScreen from './screens/AdminScreen';

// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>

//           <div className="grid-container">
//             <header>
//               <Link to="/">React Shopping Cart</Link>
//               <Link to="/admin">Admin</Link>
//             </header>
//             <main>
//               <Routes>
//                 <Route path="/admin" element={<AdminScreen />} />
//                 <Route path="/" element={<HomeScreen />} />
//               </Routes>
//             </main>
//             <footer>All right is reserved.</footer>
//           </div>
//         </BrowserRouter>
//       </Provider>
//     );
//   }
// }

// export default App;
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cartes';
import Carts from './components/Cart';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
import Vendor from './components/Vendor';
import MyAccount from './components/MyAccount';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="grid-container">
          <header>
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            {/* <Routes>
              <Route path="/admin" element={<AdminScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes> */}

            <Nav />
            {/* Wrap your entire application with <Router> */}
            <Routes>
              <Route path="/admin" element={<AdminScreen />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/feature" element={<Feature />} />
              <Route path="/carts" element={<Carts />} />
              <Route path="/shop" element={<Shop />} />
              Feature
            </Routes>
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
