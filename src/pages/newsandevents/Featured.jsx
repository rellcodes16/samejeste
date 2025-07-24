import React from "react";

function Featured() {
  return (
    <div className="relative mt-35 w-full max-w-5xl mx-auto rounded-3xl shadow-xl">
      <div className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
        Featured
      </div>

      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-6 md:p-10 rounded-3xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 md:pt-13">
          <div className="z-10 max-w-lg text-center md:text-left">
            <h2 className="text-lg font-bold uppercase">Perspektywy</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Women in Tech Summit
            </h1>
            <p className="text-xl font-semibold">Come to Warsaw</p>
            <p className="text-md font-medium mb-6">4-5 June 2025</p>

            <div className="space-x-3">
              <button className="bg-white text-black font-semibold px-4 mb-9 py-2 rounded-full">
                Register now
              </button>
              <button className="border border-white text-white px-4 mb-9 py-2 rounded-full">
                View details
              </button>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <img
              src="/your-image-path.png"
              alt="Summit Visual"
              className="w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl shadow-lg px-10 py-5 flex gap-10 text-center w-11/12 max-w-4xl">
        {[
          { value: 5, label: "Days" },
          { value: 12, label: "Hours" },
          { value: 2, label: "Minutes" },
          { value: 8, label: "Seconds" },
        ].map((item, index) => (
          <div key={index} className="flex md:mr-[155px] flex-col items-center">
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
