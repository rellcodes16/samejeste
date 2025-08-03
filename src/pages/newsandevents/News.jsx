import React from "react";
import { useGetNews } from "../../hooks/useGetNews";
import NewsCard from "./NewsCard";

function News() {
  const { data, isLoading, isError } = useGetNews();
  const newsItems = data?.data || [];

  return (
    <section className="px-4 sm:px-6 md:px-14 py-10 sm:py-12 mt-14">
      <div className="flex items-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mr-4 whitespace-nowrap">
          Latest News
        </h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            thumbnail={item.thumbnail}
            title={item.title}
            lead={item.lead}
            URL={item.URL}
          />
        ))}
      </div>
    </section>
  );
}

export default News;
