import Countdown from './Countdown';
import { motion } from 'framer-motion';

function EventCard({ event }) {
  console.log(event)
  return (
    <motion.div
      className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={event.thumbnail}
        alt={event.name}
        className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 z-10" />
        <div className="absolute bottom-6 left-6 z-20 bg-white text-[#FF4F5A] font-bold px-4 py-3 rounded-xl shadow-md text-center text-xs md:text-sm">
          <Countdown targetDate={event.date} />
        </div>

      <a
        href={event.registerURL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 md:top-auto bottom-auto md:bottom-6  right-6 z-20 bg-white font-semibold px-4 py-3 rounded-full transition text-xs md:text-sm"
      >
        Register now
      </a>
    </motion.div>
  );
}

export default EventCard;
