import React from 'react';
import { useFeaturedBlog } from '../../hooks/useGetRecentBlog'
import { Link } from 'react-router-dom';
import { useGetBlogs } from '../../hooks/useGetBlogs';

function Featured() {
  const { data: featuredPost } = useFeaturedBlog();
    const { data} = useGetBlogs({
      page: 1,
      limit: 9,
      search: ''
    });

  const blogs = data?.data || [];
  console.log(blogs[0])

  // if (isLoading) return <p className="text-center">Loading featured blog...</p>;
  // if (isError || !featuredPost) return <p className="text-center">No featured blog available.</p>;

  return (
    <section className="px-4 md:px-20 py-14 bg-white mt-20 font-montserrat">
      <div className="space-y-6">
      <p className="text-[#FF4F5A] bg-[#f7eeee] w-[70px] text-center text-md px-2 py-1 rounded-full shadow-md">Today</p>
        <div className="">
          <img
            src={featuredPost?.thumbnail}
            alt={featuredPost?.title}
            className="rounded-xl w-full object-cover h-[350px]"
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-[#1a1a1a]">{featuredPost?.title}</h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">{featuredPost?.lead}</p>

          <div className="flex flex-wrap gap-2 text-xs">
            {featuredPost?.tags?.map(tag => (
              <span key={tag} className="bg-[#F5F5F5] text-[#FF4F5A] font-semibold px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500 font-medium flex items-center gap-2">
              <img
                src={
                  featuredPost?.author?.pfp?.trim()
                  ? featuredPost.author.pfp
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(featuredPost?.author?.name || 'Author')}`}
                alt={featuredPost?.author?.name || 'Author'}
                className="w-8 h-8 rounded-full"
              />

              <div>
                <p>{featuredPost?.author.name}</p>
                <p>{new Date(featuredPost?.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <Link to={`/blogs/${blogs[0]?.slug}`}>
              <button className="bg-[#FF4F5A] cursor-pointer text-white px-4 py-2 rounded-full text-sm hover:bg-[#e84752] transition">
                Read Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
