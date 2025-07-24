import React from "react";

function BlogCard({ image, title, description, author, date, tags }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md w-full max-w-sm bg-white">
      <img src={image} alt="Blog" className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-[#f7eeee] text-[#FF5C5C] px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
            <div>
              <p>{author}</p>
              <p>{date}</p>
            </div>
            <button className="bg-[#FF4F5A] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e84752] transition">
                Read Blog
            </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
