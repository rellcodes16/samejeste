import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { FiSearch } from "react-icons/fi";
import { useGetBlogs } from "../../hooks/useGetBlogs";

const CARDS_PER_PAGE = 9;

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const { data, isLoading, isError } = useGetBlogs({
    page: currentPage,
    limit: CARDS_PER_PAGE,
    search,
  });

  const blogs = data?.data || [];
  const totalPages = data?.totalPages || 1;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setSearch(searchInput);
  };

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
          className={`w-8 h-8 rounded-full font-montserrat flex items-center justify-center text-sm ${
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
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold mr-4 whitespace-nowrap">Blogs</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <form onSubmit={handleSearchSubmit} className="flex flex-wrap gap-4 items-center mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Blogs"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-[#FF4F5A] hidden md:block text-white rounded-full cursor-pointer text-sm hover:bg-[#e84752]"
        >
          Search
        </button>
      </form>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500">Failed to load blogs.</p>
      ) : blogs.length === 0 ? (
        <p className="text-center">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogs.map((blog, index) => (
            <BlogCard key={blog._id || index} {...blog} />
          ))}
        </div>
      )}

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
