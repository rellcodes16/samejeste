import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ thumbnail, title, lead, author, createdAt, tags, slug, authorName, authorPfps }) {
  const capitalizeWords = (str) => str
    ?.split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(" ");

    const authorNames = author?.name || authorName
    const authorpfp = author?.pfp || authorPfps

  return (
    <div className="rounded-xl overflow-hidden font-montserrat shadow-md w-full max-w-sm bg-white">
      <img src={thumbnail} alt={`${title}-blog`} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 italic">{lead}...</p>
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
          <div className="flex gap-2">
            <img
              src={
                  authorpfp?.trim()
                  ? authorpfp
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(authorNames || 'Author')}`}
                alt={authorpfp || 'Author'}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p>{capitalizeWords(authorNames)}</p>
              <p>
                {new Date(createdAt).toLocaleDateString(navigator.language, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <Link to={`/blogs/${slug}`}>
            <button className="bg-[#FF4F5A] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e84752] transition">
              Read Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
