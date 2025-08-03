import { Link, useParams } from "react-router-dom";
import { Timer } from "lucide-react";
import { useGetBlogBySlug } from "../../hooks/useGetBlogBySlug";

function BlogIntroPage({ blog, readTime }) {
  const capitalizeWords = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  return (
    <div className="max-w-6xl mx-auto mt-3 p-4 font-montserrat">
      <div className="bg-[#E2E2E2] shadow-md rounded-xl overflow-hidden flex flex-col lg:flex-row gap-4 p-4">
        <img
          src={blog.thumbnail}
          alt="Blog thumbnail"
          className="w-full lg:w-[60%] h-64 sm:h-80 md:h-[22rem] object-cover rounded-xl"
        />

        <div className="flex flex-col justify-between w-full lg:w-[40%] bg-white p-4 rounded-xl">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">{blog.title}</h1>

            <div className="flex items-center italic text-gray-400 mb-2">
              <Timer className="w-5 mr-2" />
              <p>{readTime || "5 mins read"}</p>
            </div>

            <p className="text-gray-700 mb-3 italic">{blog.lead}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#f7eeee] text-[#FF5C5C] px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            <div className="flex items-center space-x-3 bg-[#E2E2E2] min-w-[60%] rounded-4xl text-sm py-2 px-3 w-full sm:w-auto">
              <img
                src={
                  blog?.author?.pfp?.trim()
                  ? blog.author.pfp
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(blog?.author?.name || 'Author')}`}
                alt={blog?.author?.name || 'Author'}
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm">
                <p className="font-semibold">{capitalizeWords(blog.author.name)}</p>
                <p className="text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString(navigator.language, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <Link to={`/author/${blog.author.id}`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#FF5C5C] cursor-pointer text-white text-sm px-4 py-4 rounded-full">
                View Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogIntroPage;
