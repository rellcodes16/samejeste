import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full bg-whitess px-6 md:px-20 py-24 flex flex-col md:flex-row justify-between items-center gap-12">

      <div className="md:w-1/2 space-y-6">
        <div className="grid">
        <img src="Group.png" alt="top-quote" />
        
        <h1 className="text-3xl md:text-4xl w-[450px] pl-15 font-bold text-gray-900 leading-snug">
          I'm Not Going To Limit Myself Just Because People Won't Accept The Fact That I Can Do Something Else.
        </h1>

        <img src="mingcute_quote-left-fill.png" alt="bottom-quote" className="ml-120"/>
        
        <p className="text-lg font-semibold text-gray-600">
          Discover Daily Writing From Women Around The Globe With Aura And Self Confidence
        </p>
                    
        </div>

        <div className="flex gap-4">
          <button className="bg-[#FF4F5A] text-white px-6 py-2 rounded-full text-sm cursor-pointer transition">
            Go to Blogs
          </button>
          <button className="border border-gray-800 text-black px-6 py-2 cursor-pointer rounded-full text-sm hover:bg-gray-100 transition">
            Contact us
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-[300px]">
          <img
            src=""
            alt="Dolly Parton"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-4 py-3 rounded-full shadow-md flex items-center gap-3 w-[90%]">
            <div className="w-6 h-6 rounded-full border-2 border-pink-500 flex items-center justify-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full" />
            </div>
            <div>
              <p className="text-sm font-semibold">Dolly Parton</p>
              <p className="text-xs text-gray-500">Songwriter & Artist</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;
