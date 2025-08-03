import { useGetRelatedBlogs } from '../../hooks/useGetRelatedBlogs';
import { Link } from 'react-router-dom';

function RelatedBlogs({ tags, slug }) {
  const { data: relatedBlogs } = useGetRelatedBlogs({ tags, slug });
  console.log(relatedBlogs)

  return (
    <div className="bg-white rounded-xl mt-10 shadow-md p-4 font-montserrat sm:p-6 md:p-8 space-y-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
        Related Blogs
      </h3>

      {relatedBlogs?.length === 0 && (
        <p className="text-sm text-gray-500">No related blogs found.</p>
      )}

      {relatedBlogs?.map((blog, i) => (
        <Link
          to={`/blogs/${blog.slug}`}
          key={blog._id}
          className={`flex flex-col sm:flex-row gap-4 items-start py-4 cursor-pointer px-3 rounded-md hover:bg-gray-50 transition ${
            i !== relatedBlogs.length - 1 ? 'border-b border-gray-200' : ''
          }`}
        >
          <img
            src={blog.thumbnail || 'https://via.placeholder.com/150'}
            alt={blog.title}
            className="w-full sm:w-28 sm:h-28 md:w-36 md:h-36 object-cover rounded-lg"
          />
          <div className="flex-1 space-y-2">
            <h4 className="text-base sm:text-md md:text-lg font-semibold text-gray-900 leading-snug">
              {blog.title}
            </h4>
            <p className="text-sm text-gray-600 italic line-clamp-3">
              {blog.lead}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {blog.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs bg-[#f7eeee] text-[#FF5C5C] px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RelatedBlogs;
