const profiles = [
    {
      name: "Harriet Tubman",
      years: "(1822–1913)",
      img: "https://i.pinimg.com/736x/c7/c2/ea/c7c2ea3b3008e0c9b2990f15360cfd10.jpg",
      text: `Harriet Tubman was an American abolitionist who escaped slavery and went on to rescue 
            approximately 70 enslaved people through the Underground Railroad. She was also involved in the women’s suffrage 
            movement of the late 19th century - a movement criticized for centering white women while sidelining women of 
            color. Yet, that did not deter her. Nor did the fact that Black men had gained the right to vote while she, as a woman, remained disenfranchised. 
            Tubman continued to fight, undeterred by exclusion from both racial and gender justice movements.`
    },
    {
      name: "Rosa Parks",
      years: "(1913–2005)",
      img: "https://i.pinimg.com/736x/3f/3f/3d/3f3f3d01f18692517a04c8625d0623f4.jpg",
      text: `Rosa Parks was an American civil rights activist 
            who became widely known for refusing to give up her seat to a white man on a segregated bus in Montgomery, 
            Alabama. Her calm resistance led to the Montgomery Bus Boycott and made her a symbol of protest. But even before 
            that incident, she had been actively involved in cases of sexual assault against Black women and serving as a 
            secretary for the National Association for the Advancement of Colored People (NAACP). Although history tried to describe her as just a 
            tired seamstress who acted without planning, she was actually purposeful and helped make black liberation possible.`
    },
    {
      name: "Funmilayo Ransom-Kuti",
      years: "(1900–1978)",
      img: "https://bapproduction.com/wp-content/uploads/2024/04/Chief-Funmilayo-Ransome-Kuti-.png",
      text: `Funmilayo Ransome-Kuti is often reduced to a fun fact, that she was the first Nigerian woman to drive a car. But that car wasn't just for show. 
            She drove it to the palace gates of the Alake of Egbaland, leading thousands of women in protest against unfair 
            taxation and colonial oppression. She founded the Abeokuta Women’s Union, a grassroots movement with over 20,000 members, mostly market women, demanding justice, dignity, and 
            economic rights. She was a revolutionary in her own right, challenging colonizers abroad and misogynists at home.`
    },
    {
      name: "Sojourner Truth",
      years: "(1797–1883)",
      img: "https://i.pinimg.com/736x/b1/b3/7a/b1b37a9c8337f39f57b3fba917551707.jpg",
      text: `Sojourner Truth is mostly remembered for her famous speech “Ain’t I a Woman?”, but she was much more than just that. Born into slavery, she escaped and 
            became an abolitionist and a women’s rights advocate. While many overlooked the challenges faced by Black women 
            who dealt with both racism and sexism, she understood that being Black and a woman meant facing twice the 
            struggle, but she never gave up. She reminded everyone that true freedom would only come when Black women were free.`
    }
  ]

function BlackWomenInspire() {
  return (
    <section className="px-2 py-10 md:px-8 mt-10 max-w-3xl mx-auto font-sans text-gray-800 text-lg">
      {/* <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Black Women Who Inspire</h1> */}
      <p className="mb-6 leading-relaxed text-justify">
        <span className="text-5xl text-[#FF4F5A] font-permanent-marker">W</span>ith Juneteenth around the corner, a day set aside to commemorate the emancipation of Black people, 
        it's a fitting time to take a trip down memory lane and reflect on the inspirational work that Black women 
        have done in the ongoing fight for Black liberation..
      </p>

      <img
        src="https://i.pinimg.com/736x/e6/f3/46/e6f346a7802e21ab6aecffb4f3501795.jpg"
        alt="women-who-inspire"
        className="w-full max-w-3xl mx-auto rounded-lg mb-6"
      />

      <div className="mb-6 text-justify space-y-4">
        <p>
          These women's struggles were twofold: to topple both white supremacy and male supremacy. Their unique experiences 
          navigating these intersecting systems of oppression shaped a unique approach to liberation, one that differed 
          from their male counterparts. 
        </p>
        <p>
          As Martin Luther King Jr. famously said, “Injustice anywhere is a threat to justice everywhere”. This means that 
          the injustice inflicted on Black women, even by Black men, poses a threat to the liberation of all Black people. 
          True freedom for the Black community cannot exist without the freedom of women, a 
          truth these women recognized even when others did not.
        </p>
        <p>
          This tension between racial justice and gender justice remains visible even in more contemporary times. Take, 
          for instance, the late Nigerian artist Fela Kuti, who was an adamant critic of white colonial powers yet 
          reinforced a different power imbalance - patriarchy - in his own way. From how he depicted women in his music, 
          the same medium he used for his activism, Kuti inadvertently became the colonial 
          power he was fighting by holding on to colonial ideas of strict gender norms—“masculine men” and “feminine women”.
        </p>
      </div>

      <img
        src="https://www.cms.qazini.com/uploads/African_women_rise_up_in_Forbes_Most_Powerful_Women_rankings_01_84ece97a69_eeb0485292.jpg"
        alt="women who inspire"
        className="w-full max-w-3xl mx-auto rounded-lg mb-6"
      />

      <div className="mb-6 text-justify space-y-4">
        <p>
          Several black women knew that the same systems that dehumanized them as Black people also devalued them as women. 
          They understood that the struggle for justice could not be singularly focused. It had to be holistic. 
          Throughout history, these women have led movements, organized communities, challenged 
          both state and cultural violence, and dared to imagine a world where Blackness and womanhood were not burdens. 
        </p>
        <p>Here are just a few of the many Black women who have made inspiring contributions to the fight for liberation:</p>
      </div>

      {profiles.map((person, i) => (
        <div key={i} className="mb-8">
          <img
            src={person.img}
            alt={`${person.name} image`}
            className="w-full max-w-3xl mx-auto rounded-lg mb-4"
          />
          <p className="text-justify">
            <span className="font-semibold">{person.name} {person.years}:</span> {person.text}
          </p>
        </div>
      ))}

      <img
        src="https://i.pinimg.com/736x/51/0e/22/510e22db1203e9b25f8c2551a1f4967a.jpg"
        alt="women who inspire"
        className="w-full max-w-3xl mx-auto rounded-lg mb-6"
      />

      <div className="space-y-4">
        <p className="text-justify">
          <span className="text-2xl font-semibold text-center mr-3">Conclusion:</span>
          Black women inspire us by modeling what it means to keep showing up, even when history tries to erase them. In boardrooms and classrooms, 
          at protest grounds and poetry slams, in healing circles and government halls — they are still leading, still dreaming, still building.
        </p>
        <p className="text-justify">
          When we celebrate Juneteenth, we honor the Black women who dared to believe in freedom for everyone, even when it seemed impossible.There are many of them that we never got to know but 
          we will remember them by holding them as a source of inspiration. We stand taller today because they stood first.
        </p>
      </div>
    </section>
  );
}

export default BlackWomenInspire;
