import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function BackToBlog() {
  return (
    <div className="mt-30 ml-27">
      <Link
        to="/blogs"
        className="inline-flex font-montserrat items-center gap-2 bg-gray-200 text-sm text-black px-4 py-3 rounded-full hover:bg-gray-300 transition"
      >
        <ArrowLeft size={16} />
        Back to blogs
      </Link>
    </div>
  );
}

export default BackToBlog;
