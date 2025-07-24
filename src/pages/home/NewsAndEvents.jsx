import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EventCard from './EventCard';
import { useGetEvents } from '../../hooks/useGetEvents';

export default function NewsAndEvents() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance) return;
    swiperInstance.params.navigation.prevEl = prevRef.current;
    swiperInstance.params.navigation.nextEl = nextRef.current;
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, [swiperInstance]);

    const { data, error } = useGetEvents();

  // if (isLoading) {
  //   return <div className="text-center py-20 text-gray-600">Loading events...</div>;
  // }

  // if (error) {
  //   return <div className="text-center py-20 text-red-500">Failed to load events.</div>;
  // }

  const events = data?.data || [];
  console.log(events)

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <motion.div
        className="flex items-center mb-6 w-full"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-semibold text-gray-900 whitespace-nowrap mr-4">
          News & Events
        </h2>
        <div className="h-px bg-gray-300 flex-grow"></div>
      </motion.div>



      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSwiper={setSwiperInstance}
        pagination={{
          el: '.swiper-custom-pagination',
          clickable: true,
          renderBullet: (index, className) => `<span class="${className} w-3 h-3 rounded-full mx-1 inline-block"></span>`
        }}
        allowTouchMove={true}
        grabCursor={true}
        touchStartPreventDefault={false}
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        className="flex flex-col items-center justify-between mt-6 gap-3 md:flex-row md:gap-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-1">
          <button
            ref={prevRef}
            className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="swiper-custom-pagination flex items-center pr-0"></div>
          <button
            ref={nextRef}
            className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button className="border-[2px] font-semibold border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
          Go to events
        </button>
      </motion.div>
    </section>
  );
}
