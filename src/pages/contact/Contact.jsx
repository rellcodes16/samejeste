import { Mail, Send } from 'lucide-react';

function Contact() {
  return (
    <section className="px-6 py-16 pt-36 font-montserrat">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c2c]">Send Us A Message</h2>
          <div className="flex-grow h-px bg-[#1c1c2c] opacity-30"></div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="rounded-full px-5 py-3 w-full bg-[#e5e5e5] placeholder-gray-600 outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="rounded-full px-5 py-3 w-full bg-[#e5e5e5] placeholder-gray-600 outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="rounded-full px-5 py-3 w-full bg-[#e5e5e5] placeholder-gray-600 outline-none"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="rounded-full px-5 py-3 w-full bg-[#e5e5e5] placeholder-gray-600 outline-none"
          />

          <div className="md:col-span-2 relative">
            <textarea
              rows="6"
              placeholder="Email address"
              className="w-full bg-[#e5e5e5] rounded-2xl px-5 py-4 resize-none placeholder-gray-600 outline-none"
            ></textarea>

            <button
              type="submit"
              className="absolute bottom-4 right-4 bg-[#FF5C5C] text-white flex items-center gap-2 px-5 py-2 rounded-full text-sm"
            >
              Send <Mail size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
