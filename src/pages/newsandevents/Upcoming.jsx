import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const events = [
  {
    id: 1,
    date: '12',
    month: 'JULY',
    title: 'The Dawn of Transformation',
    description: 'These women may not be famous, but their stories will shift something in you.',
    location: 'South park Carolina, LA',
    time: '7:00AM – 8:00PM',
    image: 'image 8.png',
  },
  {
    id: 2,
    date: '12',
    month: 'JULY',
    title: 'The Dawn of Transformation',
    description: 'These women may not be famous, but their stories will shift something in you.',
    location: 'South park Carolina, LA',
    time: '7:00AM – 8:00PM',
    image: 'image 8.png',
  },
  {
    id: 3,
    date: '12',
    month: 'JULY',
    title: 'The Dawn of Transformation',
    description: 'These women may not be famous, but their stories will shift something in you.',
    location: 'South park Carolina, LA',
    time: '7:00AM – 8:00PM',
    image: 'image 8.png',
  },
  {
    id: 4,
    date: '12',
    month: 'JULY',
    title: 'The Dawn of Transformation',
    description: 'These women may not be famous, but their stories will shift something in you.',
    location: 'South park Carolina, LA',
    time: '7:00AM – 8:00PM',
    image: 'image 8.png',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-white mt-30 px-4 md:px-30 py-16">
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold mr-4 whitespace-nowrap">Upcoming Events</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-[#FF4F5A]"></div>

        <div className="space-y-20">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={event.id} className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10">
                <div className="w-24 text-center flex flex-col items-center justify-start relative z-10">
                  <div className="w-3 h-3 bg-[#FF4F5A] rounded-full absolute top-2 left-[45%] transform -translate-x-1/2"></div>
                  <div className="pt-6">
                    <p className="text-3xl font-bold text-[#FF4F5A] leading-none">{event.date}</p>
                    <p className="text-xs font-semibold text-gray-600 uppercase">{event.month}</p>
                  </div>
                </div>

                <div className={`flex flex-col-reverse md:flex-row items-start gap-6 w-full ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <img src={event.image} alt={event.title} className="rounded-xl w-full md:w-72 h-48 object-cover" />

                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold text-[#1a1a1a]">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3">{event.description}</p>

                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-5">
                      <span className="flex items-center"><FaMapMarkerAlt className="mr-2 text-[#FF4F5A]" /> {event.location}</span>
                      <span className="flex items-center"><FaClock className="mr-2 text-[#FF4F5A]" /> {event.time}</span>
                    </div>

                    <div className="space-x-4">
                      <button className="bg-[#FF4F5A] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e84752] transition">Register now</button>
                      <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">View details</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
