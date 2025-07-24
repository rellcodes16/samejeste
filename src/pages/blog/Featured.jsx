import React from 'react';

const featuredPost = {
  image: 'https://via.placeholder.com/500x400',
  title: '7 secrets to having a perfect glowing skin – at all times',
  subtitle: 'These women may not be famous, but their stories will shift something in you',
  author: 'Rihanna Dolls',
  time: '2 days ago',
  tags: ['Feminism', 'Environmentalist', 'Social Justice']
};

const mostRead = Array(3).fill(featuredPost); 

function Featured() {
  return (
    <section className="px-4 md:px-20 py-14 bg-white mt-20">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left: Featured Blog */}
        <div className="md:col-span-2 space-y-6">
          <div className="relative">
            <span className="absolute top-2 left-2 text-[#FF4F5A] bg-[#f7eeee] text-md px-2 py-1 rounded-full">Featured</span>
            <img
              src={featuredPost.image}
              alt="Featured"
              className="rounded-xl w-full object-cover h-[350px]"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#1a1a1a]">{featuredPost.title}</h2>
            <p className="text-gray-600 text-sm">{featuredPost.subtitle}</p>

            <div className="flex flex-wrap gap-2 text-xs">
              {featuredPost.tags.map(tag => (
                <span key={tag} className="bg-[#F5F5F5] text-[#FF4F5A] font-semibold px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500 font-medium">
                <img src="" alt="pfp" className='rounded-full'/>
                <div>
                  <p>{featuredPost.author}</p>
                  <p>{featuredPost.time}</p>
                </div>
              </div>

              <div>
                <button className="bg-[#FF4F5A] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e84752] transition">
                  Read Blog
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Most Read Today */}
        <div className="bg-[#F5F5F5] p-4 rounded-xl w-full space-y-4">
          <h3 className="text-lg font-bold mb-2">Most Read Today</h3>
          {mostRead.map((post, idx) => (
            <div key={idx} className="flex items-start gap-4 pb-3 border-b border-gray-200 last:border-none">
              <img src={post.image} alt="thumb" className="w-16 h-16 rounded-md object-cover" />
              <div className="text-sm flex-1">
                <h4 className="font-bold text-lg text-[#1a1a1a]">{post.title}</h4>
                <p className="text-gray-600 text-xs mt-1">{post.subtitle}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] text-[#FF4F5A] bg-white rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
