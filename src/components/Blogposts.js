import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div>
      <ul className="blog-posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {/* Removed .map() here since 'post' is a single object */}
        <li key={post._id} className="group relative">
          <div className="blog-post   w-full border-gray-300 p-4 rounded-lg transition-transform transform hover:scale-105">
            <a href={'#' + post._id} className="relative">
              <div className="w-full h-auto mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <button
                onClick={() => post(post)}
                className="text-center justify-center border border-black mt-4 p-3 font-bold text-bold text-black"
              >
                Read More{'-->'}
              </button>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BlogPost;
