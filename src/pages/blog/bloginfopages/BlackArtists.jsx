const artists = [
  {
    name: "Polar Pondis",
    img: "/polar.jpg",
    link: 'https://open.spotify.com/artist/7nn9TUJSnUjfwlWa6697J9?si=htmsiRCYRfqdwM-CbKwLgg',
    text: `Polar is a singer/songwriter hailing from Nigeria. She writes songs for “18-29 year olds who are torn
           between finding love and finding themselves”. She was one of the emerging artists that won Leading Vibe Initiative by Grammy Award-winning artist, Tems. 
          It only gets better from there, because now she has an upcoming single “3 Years” coming out this month.`
  },
  {
    name: "Capada C",
    img: "/capada.jpg",
    link: 'https://open.spotify.com/artist/2sYcg1QlaiVp36QGSCJ9c9?si=_s_zDpXMTfKfWnaWoS3HPA',
    text: `Capada is a Ghanaian artist, whom you have probably come across on TikTok Ghana. She is “on a 
    journey to creating music that inspires others to pursue their dreams”. Capada has been in the industry for 3+ years now, with more 
    than a dozen singles to her name. Her latest single “I’m a winner” is available to stream on all platforms.`
  },
  {
    name: "Songo Ananda",
    img: "/songo.jpg",
    link: 'https://open.spotify.com/artist/23eMice1grQrnnshgarlnK?si=uOvwf1tGRJypP9vYpFW3Rw',
    text: `Songo is putting the alte back in pop music. She is a South African producer, singer and songwriter. 
          She self-produced her first EP, “Sof”. She doesn’t have any new releases out for this year, but there’s still a 
          library of all her good hits available on streaming platforms. I recommend starting with “Grief’s delight”.`
  },
  {
    name: "Avera",
    img: "/avera.jpg",
    link: 'https://open.spotify.com/artist/1LEnrg9h7sgXxSpjtfCsZY?si=_8aspgLUTniyN4HjxgVG-w',
    text: `Avera, also known as Purpleave is a Cameroonian artist, who has covered old hits like “Let me love you” by Mario and even more recent ones from this decade like “Show me” by Joeboy. 
    She is also a producer, her latest self-produced single “Paradise” is out for streaming.`
  },
  {
    name: "Eryxia",
    img: "/eryxia.png",
    link: 'https://open.spotify.com/artist/4OjdGfz4nsd7DrRZOLm07x?si=hL9uhnvETxK97JNqu8lyTw',
    text: `Eryxia is an RnB artist from Nigeria. Her go-to mantra is “write what you feel and feel what you 
    write”, which is reflected in the songs she puts out. She has an upcoming untitled rage song she says is 
    for the “bullied and oppressed”. Before you can go give it a listen, you can tune into her already released singles on all platforms. `
  },
  {
    name: "Jade Nova",
    img: "/jade.jpg",
    link: 'https://open.spotify.com/artist/6uJ9gJUQYNeEsyr4JAi53E?si=sDOzkLzASuKtM0mHDneztA',
    text: `Jade is a South African pop artist and self-identified “5ft drama diva”. Despite being new to the music scene, with her oldest release being this year, she is already making waves. 
    Her latest single “ROCKETMAN” is out on all streaming platforms, alongside its music video on YouTube. `
  },
];

function BlackArtists() {
  return (
    <section className="px-2 py-10 md:px-8 mt-10 max-w-3xl mx-auto font-sans text-gray-800 text-lg">
        <h1 className="text-gray-600 mb-12">
            Click on the vinyl to check out each artist’s playlist 🎶🎶
        </h1>
        {artists.map((artist, i) => (
            <div
                key={i}
                className={`mb-16 flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
                <a
                    href={artist.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-60 h-60 flex items-center justify-center"
                >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-lg 
                      before:content-[''] before:absolute before:inset-0 before:rounded-full 
                      before:bg-[radial-gradient(circle_at_center,_#222_20%,_#000_80%)]" />

                    <img
                        src={artist.img}
                        alt={`${artist.name} image`}
                        className="relative w-40 h-40 rounded-full border-2 border-[#fb7b83] object-cover"
                    />
            </a>
            <div className="flex-1">
                <p className="font-semibold text-xl mb-2">{artist.name}</p>
                <p className="text-justify text-base">{artist.text}</p>
            </div>
        </div>
    ))}

    </section>
  );
}

export default BlackArtists;
