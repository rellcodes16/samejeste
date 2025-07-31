import React, { useEffect, useState } from 'react';
import { useGetEvents } from '../../hooks/useGetEvents';

function Featured() {
  const { data, isError } = useGetEvents();
  const event = data?.data?.[0];

  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });

  useEffect(() => {
    if (!event?.date) return;

    const eventDate = new Date(event.date).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [event]);

  return (
    <div className="relative font-montserrat mt-20 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 rounded-3xl shadow-xl overflow-visible">
      <div className="absolute top-2 left-2 z-10 bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
        Featured
      </div>

      <img
        src={event?.thumbnail}
        alt={event?.title}
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl"
      />

      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg px-6 sm:px-8 md:px-10 py-5 flex flex-wrap justify-center gap-6 sm:gap-10 text-center w-11/12 max-w-4xl">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center mr-2 lg:mr-23 md:mr-13">
            <div className="text-4xl md:text-6xl font-extrabold text-[#FF5C5C]">
              {item.value}
            </div>
            <div className="text-sm md:text-base font-semibold text-gray-700">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
