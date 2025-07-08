import { Target, Sparkles } from 'lucide-react';

function About() {
  return (
    <section className="mx-10 px-6 md:px-20 mt-16 py-16 font-montserrat text-[#1c1c2c]">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c2c]">About Us</h2>
          <div className="flex-grow h-px bg-[#1c1c2c] opacity-30"></div>
        </div>

      <div className="grid md:grid-cols-2 bg-[#E2E2E2] p-3 rounded-xl gap-3 mb-20">
        <img
          src="tems.png"
          alt="Woman"
          className="w-full h-[620px] rounded-xl object-cover"
        />

        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-center">
          <span className="inline-block text-[#FF5C5C] bg-[#f7eeee] w-[17%] text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Overview
          </span>
          <div className="text-sm leading-7 text-gray-700 space-y-4">
            <p>
              Hi, welcome to Samejesté — a space created for women, by women, and with women in mind.
              We started Samejesté because we were tired of watching powerful stories go unheard. The quiet ones. The loud ones. The bold, messy, beautiful unfinished ones. All of it matters.Every woman’s voice deserves a platform — not just the perfect ones, not just the famous ones — every single one.
            </p>
            <p>
              Here, you will find stories that reflect who we are and what we fight for: feminism, growth, identity
              healing, courage and community. You will meet women breaking limits in tech, politics, art, education and
              women just trying to get through the day and still showing up for themselves.
            </p>
            <p>
              Our name, Samejesté, is a reminder: there’s royalty in all of us.
              It’s not about crowns or titles — it’s about owning your story, finding your voice and lifting others as you
              rise. So whether you are here to read or feel seen, to learn something new or just to breathe, you're in
              the right place
            </p>
            <p>
              This is more than a blog. This is sisterhood. This is power in progress.
              Welcome to Samajesté. Where women reign.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 bg-[#E2E2E2] rounded-xl p-3">
        <div className="flex flex-col gap-3 flex-1">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Target className="text-[#FF5C5C]" />
              <h3 className="text-lg font-semibold text-[#FF5C5C]">The Mission</h3>
            </div>
            <p className="text-sm text-gray-700 leading-6">
              To create a safe, honest, and empowering space where women’s voices, stories, and struggles are heard, celebrated, and amplified.
            </p>
            <p className="mt-3 text-sm text-gray-700 leading-6">
              Through storytelling, dialogue, and community, we aim to challenge stereotypes, inspire growth, and redefine what it means to be a woman in today’s world — unapologetically and with grace.
            </p>
          </div>


          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-[#9b5de5]" />
           <h3 className="text-lg font-semibold text-[#9b5de5]">The Vision</h3>
            </div>
            <p className="text-sm text-gray-700 leading-6">
              A world where every woman feels seen, valued, and powerful — not just in headlines or hashtags, but in her everyday life.
            </p>
            <p className="mt-3 text-sm text-gray-700 leading-6">
              We envision a global sisterhood where storytelling becomes a tool for healing, learning, and building a more equal, empathetic society — one voice at a time.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="tems.png"
            alt="Another Woman"
            className="w-full h-[437px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
