import { React, useRef, useState, useEffect } from "react";
import ArticlepageSection from "./components/ArticlepageSection";
import Images from "../assets/images";
import NewsCard from "../shared/components/NewsCard";
import StoriesyoumayhavemissedSection from "./components/StoriesyoumayhavemissedSection";

const article = {
  category: "World News",
  title: "Putin promises grains, debt write-off as Russia seeks Africa allies",
  postedAt: "1:32 AM, Sun March 10, 2024",
  readTime: "4 minute read",
  author: "Osazie Ogechi",
  heroImage: Images.placeholderImage,
  heroCaption: "Russia-Africa Forum. Photo: Getty Images",
  content: [
    {
      type: "paragraph",
      text: "Former President John Dramani Mahama has emphasized the importance of education to the country's development, noting that the sector consistently receives a significant portion of budgetary capital for accelerated development.",
    },
    {
      type: "paragraph",
      text: "He highlighted that the education sector remains instrumental in producing human capital for accelerated development. Mahama expressed appreciation for individuals who contribute their resources to supplement the government's efforts in educating the youth.",
    },
    {
      type: "paragraph",
      text: "Mahama made these remarks on Saturday at the 40th Anniversary of the enstoolment of Togbe Dzegblade IV of Adaklu Kodzobi. His address was delivered by Mr. Kwame Agbodza, the Member of Parliament for Adaklu.",
    },
    {
      type: "paragraph",
      text: "He commended Togbe Dzegblade for establishing an educational fund to assist brilliant but needy students in the area.",
    },
    // the ad — just another item in the list, placed right where it
    // should appear in the flow of the article
    {
      type: "ad",
      image: "/assets/ad-quickbooks.jpg",
      href: "#",
    },
    {
      type: "paragraph",
      text: "The former President urged students to take advantage of the fund to enhance their skills.",
    },
    {
      type: "paragraph",
      text: "Mahama noted that prior to the political dispensation, chiefs played a prominent role in community leadership, ensuring development in their respective areas.",
    },
    {
      type: "paragraph",
      text: "He applauded Togbe Dzegblade for his 40-year tenure on the stool without chieftaincy disputes, which contributed to the rapid development of the community.",
    },
    {
      type: "paragraph",
      text: "Togbe Gbogbi Atsa V, Paramount Chief and President of the Adaklu Traditional Council, praised Togbe Dzegblade for his significant contributions to the development of Adaklu across various sectors.",
    },
    {
      type: "paragraph",
      text: "I commend you for your hard work and excellent demonstration of neighbourliness that have helped to establish and maintain peaceful coexistence with other traditional areas,\u201d he stated.",
    },
  ],
};

const topStories = [
  {
    title: "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
    href: "#",
  },
  {
    title: "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
    href: "#",
  },
  { title: "Foden Sparkles As Man City Crush Spineless Man United", href: "#" },
  {
    title: "Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog",
    href: "#",
  },
];

const sidebarAds = [
  { image: Images.adbannerImage, href: "#", alt: "Eversend ad" },
  { image: Images.adbannerImage, href: "#", alt: "Valentine's ad" },
];

const articles = [
  {
    id: 1,
    tag: "Entertainment",
    title: "Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji",
    image: Images.placeholderImage,
  },
  {
    id: 2,
    tag: "World News",
    title: "Gunfire near Haiti airport disrupts flights for second day",
    image: Images.placeholderImage,
  },
  {
    id: 3,
    tag: "World News",
    title: "The worst wildfire in Texas history could get even more dangerous",
    image: Images.placeholderImage,
  },
  {
    id: 4,
    tag: "Entertainment",
    title: "Moses Bliss ties the knot with Marie Wiseborn in classy wedding",
    image: Images.placeholderImage,
  },
  // add more — dots/pages are derived from this array, nothing hardcoded
];


const storiesYouMayHaveMissed = [
  {
    title: "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
    href: "#",
    date: "Feb 20, 2024",
    category: "Finance",
  },
  {
    title: "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
    href: "#",
    date: "Feb 20, 2024",
    category: "Finance",
  },
  {
    title: "Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest",
    href: "#",
    date: "Feb 20, 2024",
    category: "Finance",
  },
  {
    title: "Foden Sparkles As Man City Crush Spineless Man United",
    href: "#",
    date: "Feb 26, 2024",
    category: "Finance",
  },
];


export default function ArticlePage() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // cardsPerView drives how many "pages" of dots we show
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 768 ? 4 : 1);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // keep dots in sync if the user swipes/drags the track manually
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const pageWidth = track.scrollWidth / totalPages;
    const nearestPage = Math.round(track.scrollLeft / pageWidth);
    setActiveIndex(nearestPage);
  };

  const goPrev = () => scrollToPage(Math.max(activeIndex - 1, 0));
  const goNext = () => scrollToPage(Math.min(activeIndex + 1, totalPages - 1));

    const totalPages = Math.ceil(articles.length / cardsPerView);

  return (
    <div>
      <ArticlepageSection
        article={article}
        topStories={topStories}
        sidebarAds={sidebarAds}
      />
      ;
      <section className="w-full max-w-6xl items-center justify-center  mx-auto px-4 py-6 lg:px-8 lg:py-10">
        {/* Header: title + nav controls */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <span className="w-1 h-5 bg-purple-700 inline-block" />
            LATEST NEWS
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="hidden md:flex items-center justify-center text-gray-400 hover:text-gray-700"
            >
              ←
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToPage(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === activeIndex ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next"
              className="hidden md:flex items-center justify-center text-gray-400 hover:text-gray-700"
            >
              →
            </button>
          </div>
        </div>

        {/* Card track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {articles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>

        <StoriesyoumayhavemissedSection stories={storiesYouMayHaveMissed}  />
      </section>
    </div>
  );
}
