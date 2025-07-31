import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useGetEvents } from '../../hooks/useGetEvents';

const UpcomingEvents = () => {
  const { data } = useGetEvents();
  const [showAll, setShowAll] = useState(false);

  const events = data?.data?.map((event) => {
    const date = new Date(event.date);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = date.toLocaleString('default', { month: 'short' }); 
    return { ...event, day, month };
  });

  const visibleEvents = showAll ? events : events.slice(0, 5);

  return (
    <section className="bg-white mt-16 px-4 md:px-20 py-16 font-montserrat">
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold mr-4 whitespace-nowrap">Upcoming Events</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="space-y-20">
        {visibleEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={event._id} className="relative flex items-start gap-3">
              <div className="w-24 text-center flex flex-col items-center justify-start relative">
                <div className="pt-2">
                  <p className="text-4xl font-bold text-[#FF4F5A] leading-none">{event.day}</p>
                  <p className="text-xs font-semibold text-gray-600 uppercase">{event.month}</p>
                </div>
                <div className="w-2 h-2 bg-[#FF4F5A] rounded-full mt-3"></div>
                <div className="w-px h-50 bg-[#FF4F5A]"></div>
                <div className="w-2 h-2 bg-[#FF4F5A] rounded-full"></div>
              </div>
              <div
                className={`flex flex-col md:flex-row items-start gap-6 w-full ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <img
                    src={event.thumbnail}
                    alt={event.name}
                    className="rounded-xl w-full h-48 md:h-60 object-cover object-center shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-[#1a1a1a]">{event.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3 leading-relaxed">{event.description}</p>
                  <div className="lg:flex items-center gap-6 text-sm text-gray-500 mb-5">
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-[#FF4F5A]" /> {event.venue}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-2 text-[#FF4F5A]" /> {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  <div className="space-x-4">
                    <button className="bg-[#FF4F5A] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#e84752] transition">
                      Register now
                    </button>
                    <button className="border border-gray-400 text-gray-700 px-4 py-1.5 rounded-full text-xs hover:bg-gray-100 transition">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {events.length > 5 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-sm text-[#FF4F5A] border border-[#FF4F5A] px-6 py-2 rounded-full hover:bg-[#FF4F5A] hover:text-white transition"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;
