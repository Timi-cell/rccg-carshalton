import React, { useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const History = () => {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    return (
      <>
      <Header />
    <section className="history bg-light py-8">
      <div className="px-4 md:px-8">
        <h1 className="underline text-2xl w-full sm:text-3xl md:text-4xl text-center">
          OUR HISTORY
        </h1>
        <div className="text-base md:text-lg mt-5">
          <p>
            In July 1909, a son was born into the Akindayomi family of Ondo
            State in Nigeria. Even though this child grew up surrounded by idol
            worshippers, he knew there existed a greater power and yearned to
            know.
          </p>
          <p>
            “The God who created the earth and everyone on it”. This pursuit for
            God led him to the Church Missionary Society where he was baptized
            in 1927. Still spiritually unfulfilled, he joined the Cherubim and
            Seraphim church in 1931.
          </p>
          <p>
            Whilst there, he began to hear a voice within him saying, “You will
            be my servant.” Since this was not his intention, he decided to
            ignore the voice. This went on for seven years during which all the
            business ventures that he tried resulted into failure. In debt and
            without peace of mind, he found himself totally dependent on the
            grace of God. Here marked the beginning of a definite relationship
            with God.Totally broken, he yielded saying, “Lord, I will go
            wherever you want me to go.” He asked for signs to confirm that this
            was indeed God’s call. The confirmation came through the Bible
            passages of Jeremiah 1:4-10, Isaiah 41:10-13 and Romans 8:29-31. The
            Lord assured him that He would provide for all his needs, as he
            would not receive any salary from that point on. This proved to be a
            comforting reminder during the trials in the months ahead. He became
            married in 1941. He continued to worship with the Cherubim and
            Seraphim. In 1947, he started to become concerned that the church
            was departing from the true Word of God in some of its practices.
          </p>
          <p>
            By 1952, he felt totally persuaded to leave the church. He started
            at Willoughby Street, Ebute-Metta, Lagos a housefellowship called,
            the Glory of God Fellowship. Initially there were nine members but
            before long the fellowship rapidly grew as the news of the miracles
            that occurred in their midst spread.
          </p>
          <p>
            {" "}
            Akindayomi also had a vision of words that appeared to be written on
            a blackboard. The words were “The Redeemed Christian Church of God.”
            Amazingly, Pa Akindayomi who could not read or write was
            supernaturally able to write these words down.
          </p>
          <p>
            In this visitation, God also said to him that this church would go
            to the ends of the earth and that when the Lord Jesus Christ
            appeared in glory, He would meet the church.
          </p>
          <p>
            The Lord then established a covenant with Pa Akindayomi, synonymous
            to the Abrahamic covenant in the Bible. He said that He the Lord
            would meet all the needs of the church in an awesome way if only
            members would serve Him faithfully and be obedient to His Word. It
            is upon this covenant that the Redeemed Christian Church of God was
            built.
          </p>
          <p>
            Thus, the Redeemed Christian Church of God was born in 1952,
            destined by the Lord Himself to take the world for Him. The church
            continued to meet at 9 Willoughby Street until they were able to
            acquire some land thereby witnessing a relocation to the present
            site of the Headquarters of the church at 1-5 Redemption Way,
            Ebute-Metta, Lagos (formerly 1a, Cemetery Street).
          </p>
          <p>
            Sometime in the early 70s, God had spoken to Pa Akindayomi about his
            successor. The Lord told him that this man who was not a member of
            the church then, would be a young educated man. Thus when a young
            university lecturer joined the church in 1973, Papa was able to
            recognize him in the Spirit as the one that the Lord had spoken
            about in the past.
          </p>
          <p>
            This man, Enoch Adejare Adeboye who was then a lecturer of
            Mathematics at the University of Lagos soon became involved in the
            church. He became one of the interpreters translating Pa
            Akindayomi’s sermons from Yoruba to English. He was ordained a
            pastor of the church in 1975.
          </p>
          <p>
            Papa was preparing to meet his Creator. He sent for Pastor Adeboye
            and spent several hours sharing with him details of the covenant and
            the plans of the Lord for the church. Even though a year before
            this, the Lord had revealed to Pastor Adeboye that he would be
            Papa’s successor, it was still too difficult for him to fully
            contemplate such an awesome responsibility.
          </p>
          <p>
            Pa Josiah Akindayomi was 71 years old when he died. Amidst
            controversy, Pastor Adeboye’s appointment was formalized by the
            reading of Pa Akindayomi’s sealed pronouncement after his burial.
          </p>
          <p>
            Since 1981, an open explosion began with the number of parishes
            growing in leaps and bounds. At the last count, there are at least
            about 2000 parishes of the Redeemed Christian Church of God in
            Nigeria.
          </p>
          <p>
            On the International scene, the church is present in African nations
            including Nigeria, C’ote D’Ivoire, Ghana, Zambia, Malawi, Zaire,
            Tanzania, Kenya, Uganda, Gambia, Cameroon, and South Africa. In
            Europe the church is spread in England, Germany, and France. In the
            United States there are parishes in Dallas, Tallahassee, Houston,
            New York, Washington, and Chicago and also in the Caribbean states
            of Haiti and Jamaica.
          </p>
          <p>
            Today, God is still doing marvelous deeds through The Redeemed
            Christian Church of God, worldwide. One of the well-known programs
            of the church is the Holy Ghost Service, an all night miracle
            service that holds on the first Friday of every month at the
            Redemption Camp at Km. 46, Lagos-Ibadan expressway. The average
            headcount of those who attend the Service is over 500,000.
          </p>
          <p>
            The Holy Ghost Service now holds in different parts of the world
            which includes the United Kingdom(Festival of life), India, USA,
            Canada, South Africa, Australia, Dubai, Ghana, Philippines and many
            more.
          </p>
        </div>
      </div>
              </section>
      <Footer />
    </>
  );
}

export default History