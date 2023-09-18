import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1   md:col-span-1">
            <a href="/">
              <img src="/logo.png" alt="Logo" className="w-32 h-auto mb-4" />
            </a>
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur<br></br> adipisicing elit.
              Obcaecati culpa assumenda voluptas placeat.
            </p>
            <div className="mt-4">
              <ul className="flex space-x-4 ">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2x"
                      className="text-golden hover:text-pink-400"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGoogle}
                      size="2x"
                      className="text-golden hover:text-pink-400   "
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="2x"
                      className="text-golden hover:text-pink-400  "
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      className="text-golden hover:text-pink-400   "
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/faqs">Frequently Questions</a>
              </li>
              <li>
                <a href="/order-tracking">Order Tracking</a>
              </li>
              <li>
                <a href="/compare">Compare</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">SHOP</h3>
            <ul>
              <li>
                <a href="/">Cart View One</a>
              </li>
              <li>
                <a href="/about">Cart View Two</a>
              </li>
              <li>
                <a href="/privacy-policy">Empty Cart</a>
              </li>
              <li>
                <a href="/faqs">Checkout View One</a>
              </li>
              <li>
                <a href="/order-tracking">Checkout View Two</a>
              </li>
              <li>
                <a href="/compare">Compare</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <div class="col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="footer_one_widget">
                <h3 class="text-xl font-semibold text-white mb-6 ">
                  NEWSLETTER
                </h3>
                <div id="mc_embed_signup" class="subscribe-form">
                  <form>
                    <div class="mc-form mb-6">
                      <input
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="email"
                        placeholder="Your Mail*"
                        name="EMAIL"
                        value=""
                      />
                      <div class="clear mt-6">
                        <button
                          class="w-full mt-2 py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
                          type="submit"
                          name="subscribe"
                          value=""
                        >
                          Send Mail
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex space-x-4"></ul>
          {/* Add similar sections for "SHOP" and "NEWSLETTER" */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
