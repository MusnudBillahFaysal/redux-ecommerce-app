import React from 'react';
import formatCurrency from '../util';

const Products = ({ products, addToCart }) => {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id} className="group relative">
            <div className="product">
              <a href={'#' + product._id} className="relative">
                <div className="w-full h-auto mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xl text-center">{product.title}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="absolute inset-0 bg-white py-4 ml-6 mt-40 opacity-100 h-1/4 w-3/4 border-black items-center text-xl justify-center font-bold text-black transition duration-300 hidden group-hover:flex"
                >
                  Add To Cart
                </button>
              </a>
              <div className="product-price flex justify-center">
                <div>{formatCurrency(product.price)}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
