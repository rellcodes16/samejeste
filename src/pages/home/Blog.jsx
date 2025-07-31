import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGetThreeRecentBlogs } from '../../hooks/useGetThreeRecentBlogs';

export default function Blog() {
  const { data: blogs } = useGetThreeRecentBlogs();

  // if (isLoading) return <p className="text-center">Loading recent blogs...</p>;
  // if (isError || !blogs) return <p className="text-center">Failed to load blogs.</p>;

  return (
    <section className="font-montserrat px-6 py-12 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold mr-4 whitespace-nowrap">Recent Blogs</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog) => (
          <div key={blog._id} className="rounded-2xl shadow-lg overflow-hidden">
            <motion.img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm mb-4">{blog.lead?.slice(0, 100)}...</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags?.slice(0, 3).map((tag, index) => (
                  <span key={index} className="text-xs text-[#FF4F5A] bg-[#f7eeee] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://ui-avatars.com/api/?name=${blog.author.name}`}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-xs">
                    <p className="font-medium">{blog.author.name}</p>
                    <p className="text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <button className="bg-[#FF4F5A] text-white text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-[#e84752] transition">
                  Read Blog
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Link
          to="/blogs"
          className="border-[2px] border-gray-400 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Go to Blogs
        </Link>
      </div>
    </section>
  );
}
