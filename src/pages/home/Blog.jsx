import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: "7 secrets to having a perfect glowing skin - at all times",
    description: "These women may not be famous, but their stories will shift something in you",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Environmentalism", "Social Justice"],
    imageUrl: "https://images.unsplash.com/photo-1616710848592-7b813e488ebf?auto=format&fit=crop&w=800&q=80",
    avatarUrl: "https://ui-avatars.com/api/?name=Rihanna+Dolls",
  },
  {
    id: 2,
    title: "7 secrets to having a perfect glowing skin - at all times",
    description: "These women may not be famous, but their stories will shift something in you",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Environmentalism", "Social Justice"],
    imageUrl: "https://images.unsplash.com/photo-1616710848592-7b813e488ebf?auto=format&fit=crop&w=800&q=80",
    avatarUrl: "https://ui-avatars.com/api/?name=Rihanna+Dolls",
  },
  {
    id: 3,
    title: "7 secrets to having a perfect glowing skin - at all times",
    description: "These women may not be famous, but their stories will shift something in you",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Environmentalism", "Social Justice"],
    imageUrl: "https://images.unsplash.com/photo-1616710848592-7b813e488ebf?auto=format&fit=crop&w=800&q=80",
    avatarUrl: "https://ui-avatars.com/api/?name=Rihanna+Dolls",
  },
];

export default function Blog() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold mr-4 whitespace-nowrap">Recent Blogs</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-2xl shadow-lg overflow-hidden">
            <motion.img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm mb-4">{blog.description}...</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="text-xs text-[#FF4F5A] bg-[#f7eeee] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.avatarUrl}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-xs">
                    <p className="font-medium">{blog.author}</p>
                    <p className="text-gray-500">{blog.date}</p>
                  </div>
                </div>
                <button className="bg-[#FF4F5A] text-white text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-[#FF4F5A]">
                  Read Blog
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button className="border-[2px] font-semibold px-6 py-2 rounded-full hover:bg-gray-100">
          Go to Blogs
        </button>
      </div>
    </section>
  );
}
