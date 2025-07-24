import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { ChevronUp, ChevronDown, CircleUser } from 'lucide-react';
import { useGetQuotes } from '../../hooks/useGetQuotes'; 
import { RiProfileFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const quoteSwiperRef = useRef(null);
  const imageSwiperRef = useRef(null);

  const { data, isLoading, error } = useGetQuotes();

  if (isLoading) {
    return <div className="text-center py-20 text-gray-600">Loading quotes...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Failed to load quotes.</div>;
  }

  const quotes = data?.data || [];

  const goToSlide = (index) => {
    quoteSwiperRef.current?.slideToLoop(index);
    imageSwiperRef.current?.slideToLoop(index);
  };

  const getVisibleAvatars = (currentIndex, total) => {
  if (total <= 3) return Array.from({ length: total }, (_, i) => i);

  if (currentIndex === 0) return [0, 1, 2];
  if (currentIndex === total - 1) return [total - 3, total - 2, total - 1];

  return [currentIndex - 1, currentIndex, currentIndex + 1];
  };

  return (
    <section className="bg-[url('noise-bg2.webp')] w-full px-6 md:px-20 py-24 flex flex-col md:flex-row justify-between items-center gap-12 font-montserrat">
      <div className="w-full md:w-1/2 space-y-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          onSwiper={(swiper) => (quoteSwiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            const newIndex = swiper.realIndex;
            setActiveIndex(newIndex);
            imageSwiperRef.current?.slideToLoop(newIndex);
          }}
          className="h-[280px]"
        >
          {quotes.map((quote, idx) => (
<SwiperSlide key={idx}>
  <div className="flex flex-col justify-between h-[220px] md:h-[280px] max-w-md mx-auto">
    <FaQuoteLeft className="text-4xl md:ml-[-70px] md:text-6xl text-[#FF4F5A]" />
    <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-snug text-start md:ml-[-60px]">
      {quote.quote}
    </h1>
    <div className="flex items-center justify-center gap-3 mt-4">
</div>

    <FaQuoteRight className="text-4xl md:text-6xl text-[#FF4F5A] self-end" />
  </div>
    <div className="mt-10 md:hidden">
    <p className="text-sm font-semibold italic text-gray-800 text-end">-{quote.name}</p>
  </div>
</SwiperSlide>

          ))}
        </Swiper>

        <p className="text-lg mt-10 font-semibold text-gray-600">
          Discover Daily Writing From Women Around The Globe With Aura And Self Confidence
        </p>

        <div className="flex gap-4">
          <Link to='/blogs' className="bg-[#FF4F5A] text-white px-6 py-2 rounded-full text-sm">
            Go to Blogs
          </Link>
          <Link to='/contact' className="border border-gray-800 text-black px-6 py-2 rounded-full text-sm hover:bg-gray-100">
            Contact us
          </Link>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 justify-center items-center relative">
        <div className="relative w-[300px] h-[420px]">
          <div className="absolute top-3 left-3 w-full h-full bg-gray-200 rounded-3xl blur-sm z-0 shadow-md" />
          <div className="absolute top-1 left-1 w-full h-full bg-gray-100 rounded-3xl blur-sm z-0 shadow-inner" />

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop
            allowTouchMove={false}
            onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
            className="relative z-10 w-full h-full"
          >
            {quotes.map((quote, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={quote.photo}
                    alt={quote.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-full shadow-lg flex items-center gap-4 backdrop-blur-md min-w-[240px]">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                      <CircleUser className='text-[#FF4F5A] w-[70px]'/>
                    </div>
                    <div className="text-sm leading-tight">
                      <p className="font-semibold text-gray-800">{quote.name}</p>
                      <p className="text-xs text-gray-600">{quote.occupation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
          <div className="w-[2px] h-20 bg-gray-300" />

          <button
            onClick={() => {
              quoteSwiperRef.current?.slidePrev();
              imageSwiperRef.current?.slidePrev();
            }}
            className="bg-gray-300 text-white p-1 rounded-full shadow hover:bg-gray-500 transition"
          >
            <ChevronUp size={22} />
          </button>

<div className="flex flex-col gap-3 py-2 transition-all duration-500">
  {getVisibleAvatars(activeIndex, quotes.length).map((i) => {
    const quote = quotes[i];
    return (
      <img
        key={quote._id}
        src={quote.photo}
        alt={quote.name}
        onClick={() => goToSlide(i)}
        className={`object-cover rounded-full transition-all duration-300 cursor-pointer ${
          i === activeIndex
            ? "w-10 h-10 scale-110 shadow-md"
            : "w-8 h-8 opacity-60"
        }`}
      />
    );
  })}
</div>


          <button
            onClick={() => {
              quoteSwiperRef.current?.slideNext();
              imageSwiperRef.current?.slideNext();
            }}
            className="bg-gray-300 text-white p-1 rounded-full shadow hover:bg-gray-500 transition"
          >
            <ChevronDown size={22} />
          </button>

          <div className="w-[2px] h-20 bg-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
