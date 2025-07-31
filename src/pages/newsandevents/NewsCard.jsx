function NewsCard({ thumbnail, title, lead, URL }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm w-full bg-white flex flex-col border border-gray-100">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-52 sm:h-60 object-cover"
        onError={(e) => (e.target.src = "https://via.placeholder.com/400x250?text=Image+Unavailable")}
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          {lead && (
            <p className="text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed italic">
              {lead}
            </p>
          )}
        </div>
        <div className="mt-auto flex justify-end">
          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF4F5A] text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-[#e84752] transition"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
