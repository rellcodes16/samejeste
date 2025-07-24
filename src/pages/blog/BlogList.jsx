import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { FiSearch } from "react-icons/fi";

const blogData = [
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "7 secrets to having a perfect glowing skin – at all times",
    description: "These women may not be famous, but their stories will stick something in you.",
    author: "Rihanna Dolls",
    date: "3 Days Ago",
    tags: ["Feminism", "Empowerment", "Social Justice"],
  },
  // Duplicate or add more blog objects here...
];

const CARDS_PER_PAGE = 9;

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / CARDS_PER_PAGE);

  const currentData = blogData.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages.map((num, idx) =>
      typeof num === "string" ? (
        <span key={idx} className="px-2 text-gray-400">
          {num}
        </span>
      ) : (
        <button
          key={num}
          onClick={() => goToPage(num)}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
            currentPage === num
              ? "border text-[#FF4F5A] border-[#f7eeee]"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {num}
        </button>
      )
    );
  };

  return (
    <div className="px-6 py-10">
      {/* Title */}
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold mr-4 whitespace-nowrap">Blogs</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Search */}
      <div className="flex flex-wrap gap-4 items-center mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Blogs"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {currentData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 text-sm py-4 rounded-md">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-1 text-gray-600 bg-gray-200 rounded-full disabled:opacity-50"
          >
            &lt; Back
          </button>

          {renderPageNumbers()}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-1 text-gray-600 bg-gray-200 rounded-full disabled:opacity-50"
          >
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogList;