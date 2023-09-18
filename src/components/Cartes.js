import React from 'react';
import formatCurrency from '../util';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

//import '../path-to-your-tailwind-css-file.css'; // Import your Tailwind CSS file

// const Cart = ({ cartItems, removeFromCart, addToCart }) => {
//   const navigate = useNavigate();

//   // const handleLogout = () => {
//   //   localStorage.removeItem('isLoggedIn');
//   //   // Add any additional logout logic if needed
//   //   // Redirect the user to the login page or any other appropriate page
//   // };

//   // const handleCreateOrder = () => {
//   //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//   //   if (!isLoggedIn) {
//   //     // Redirect the user to the login page if not logged in
//   //     navigate('/loginform');
//   //   } else {
//   //     // Proceed with the checkout
//   //     const order = {
//   //       cartItems,
//   //     };
//   //     createOrder(order);

//   //     // Redirect the user to the checkout form
//   //     navigate('/checkoutform', { state: { cartItems } });
//   //   }
//   // };

//   return (
//     <div>
//       {cartItems.length === 0 ? (
//         <div className="cart cart-header">Cart is empty</div>
//       ) : (
//         <div className="cart cart-header">
//           You have {cartItems.length} items in the cart
//         </div>
//       )}

//       <div>
//         <div>
//           <div className="cart">
//             <ul className="cart-items">
//               {cartItems.map((item) => (
//                 <li key={item._id}>
//                   <div>
//                     <img src={item.image} alt={item.title}></img>
//                   </div>
//                   <div>
//                     <div>{item.title}</div>
//                     <div className="price">
//                       {formatCurrency(item.price)} x {item.count}
//                     </div>
//                     <div className="right">
//                       <button
//                         className="button"
//                         onClick={() => removeFromCart(item)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {cartItems.length !== 0 && (
//             <div>
//               <div className="cart">
//                 <div className="total">
//                   <div>
//                     <b>
//                       Total:{' '}
//                       {formatCurrency(
//                         cartItems.reduce((a, c) => a + c.price * c.count, 0)
//                       )}
//                     </b>
//                   </div>
//                   <button
//                     // onClick={handleCreateOrder}
//                     className="button primary"
//                   >
//                     <b>Proceed</b>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

const Cart = ({ cartItems, removeFromCart }) => {
  // const navigate = useNavigate();

  // const handleCreateOrder = () => {
  //   const order = {
  //     cartItems,
  //   };
  //   createOrder(order);

  //   navigate('/checkoutform', { state: { cartItems } });
  // };

  return (
    <div className="container mx-auto py-4">
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-2xl">Cart is empty</div>
      ) : (
        <div className="text-center text-gray-500 text-2xl">
          You have {cartItems.length} items in the cart
        </div>
      )}

      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover mx-auto"
              />
              <div className="text-center mt-2 font-semibold">{item.title}</div>
              <div className="text-center mt-2">
                {formatCurrency(item.price)} x {item.count}
              </div>
              <div className="mt-2 text-center">
                <button
                  className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-red-700 "
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cartItems.length !== 0 && (
        <div className="mt-4 text-center">
          <div className="text-xl font-bold">
            Total:{' '}
            {formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
          </div>
          <button
            // onClick={handleCreateOrder}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-2 justify-center"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
