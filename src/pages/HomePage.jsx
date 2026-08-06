import React, { useState, useRef, useCallback, useEffect } from "react";
import NavBar from "./components/NavBar";
import AdBanner from "../shared/components/AdBanner";
import ImageCard from "../shared/components/ImageCard";
import Images from "../assets/images";
import NewsCard from "../shared/components/NewsCard";
import EditorPickSection from "./components/EditorPick";
import CategorySection from "./components/CategorySection";
import FeaturedStoriesSection from "./components/FeaturedstoriesSection";
import NewsInVideosSection from "./components/NewsInVideosSection";
import NewsinpicturesSection from "./components/NewsinpicturesSection";
import StoriesyoumayhavemissedSection from "./components/StoriesyoumayhavemissedSection";
import Newsletterandadblock from "./components/Newsletterandadblock";


const mainStory = {
  tag: "LATEST TODAY",
  title: "Putin promises grains, debt write-off as Russia seeks Africa allies",
  image: Images.placeholderImage,
};

const secondaryStories = [
  {
    tag: "NEWS TODAY",
    title: "Tinubu mourns actors, John Okafor and Quadri Oyebamiji",
    image: Images.placeholderImage,
  },
  {
    tag: "NEWS TODAY",
    title: "Tinubu mourns actors, John Okafor and Quadri Oyebamiji",
    image: Images.placeholderImage,
  },
  {
    tag: "NEWS TODAY",
    title: "Tinubu mourns actors, John Okafor and Quadri Oyebamiji",
    image: Images.placeholderImage,
  },
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

const featuredStories = [
  {
    image: Images.placeholderImage,
    title:
      "Dozens of Russian tourists were recently allowed to visit North Korea. Here's what they saw",
    author: "Ogechi Joseph",
    postedAt: "13 mins ago",
    href: "#",
    relatedStories: [
      {
        title: "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
        href: "#",
      },
      {
        title:
          "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
        href: "#",
      },
      {
        title: "Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest",
        href: "#",
      },
      {
        title: "Foden Sparkles As Man City Crush Spineless Man United",
        href: "#",
      },
      {
        title:
          "Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog",
        href: "#",
      },
    ],
  },
  {
    image: Images.placeholderImage,
    title: "Scrap Constituency Projects",
    badge: "Opinion",
    author: "Ogechi Joseph",
    postedAt: "13 mins ago",
    href: "#",
    relatedStories: [
      {
        title: "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
        href: "#",
      },
      {
        title:
          "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
        href: "#",
      },
      {
        title: "Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest",
        href: "#",
      },
    ],
  },
];

// 6 videos — desktop shows all 6 in the 3-column grid.
// Mobile uses videos[0] as the big hero, and videos[1..5] as the compact list.
const newsVideos = [
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "US storm: Massive blizzard hits California and Nevada",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "US storm: Massive blizzard hits California and Nevada",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "US storm: Massive blizzard hits California and Nevada",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "US storm: Massive blizzard hits California and Nevada",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "US storm: Massive blizzard hits California and Nevada",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "US storm: Massive blizzard hits California and Nevada",
    href: "#",
  },
];

const newsInPictures = [
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "Best red carpet looks at the 2024 Oscars",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "Putin promises grains, debt write-off as Russia seeks Africa allies",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "Putin promises grains, debt write-off as Russia seeks Africa allies",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "Putin promises grains, debt write-off as Russia seeks Africa allies",
    href: "#",
  },
  {
    image: Images.placeholderImage,
    tag: "World News",
    title: "Putin promises grains, debt write-off as Russia seeks Africa allies",
    href: "#",
  },
];

// paste this alongside newsInPictures / newsVideos / featuredStories

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

// then pass it in:
// <StoriesyoumayhavemissedSection stories={storiesYouMayHaveMissed} />


export default function HomePage() {
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

  const totalPages = Math.ceil(articles.length / cardsPerView);

  const scrollToPage = useCallback(
    (pageIndex) => {
      const track = trackRef.current;
      if (!track) return;
      const pageWidth = track.scrollWidth / totalPages;
      track.scrollTo({ left: pageWidth * pageIndex, behavior: "smooth" });
      setActiveIndex(pageIndex);
    },
    [totalPages],
  );

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

  return (
    <div>
      <section className="w-full  px-4 py-6 lg:px-8 lg:py-10">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4 lg:mb-6 ">
          <span className="w-1 h-5 inline-block" />
          <h2 className="text-[22px] lg:text-[28px] font-bold tracking-wide text-gray-900 font-euclidcircular ">
            TOP STORIES
          </h2>
        </div>

        {/* ===== MOBILE LAYOUT (hero + stacked list) ===== */}
        <div className="lg:hidden ">
          {/* Hero */}
          <a href="#" className="block group">
            <div className="overflow-hidden rounded-sm font-euclidcircular">
              <img
                src={mainStory.image}
                alt={mainStory.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 "
              />
            </div>
            <p className="mt-3 text-sm font-medium font-euclidcircular text-pink-600 tracking-wide">
              {mainStory.tag}
            </p>
            <h3 className="mt-1 text-xl font-euclidcircular font-semibold text-gray-900 leading-snug">
              {mainStory.title}
            </h3>
          </a>

          {/* Stacked list */}
          <ul className="mt-5 ">
            {secondaryStories.map((story, i) => (
              <li key={i} className="py-4 first:pt-4">
                <a href="#" className="flex gap-3 group">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-20 h-16 object-cover rounded-sm shrink-0"
                  />
                  <div>
                    <p className=" text-[13px] font-medium font-euclidcircular text-pink-600 tracking-wide">
                      {story.tag}
                    </p>
                    <h4 className="mt-1 text-[17px] font-semibold font-euclidcircular text-gray-900 leading-snug group-hover:text-pink-600 transition-colors">
                      {story.title}
                    </h4>
                  </div>
                </a>
              </li>
            ))}
            <div className="w-full border border-gray-200 mt-5" />
          </ul>
        </div>

        {/* ===== DESKTOP LAYOUT (grid gallery) ===== */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:h-100">
          {/* Large left story */}
          <a href="#" className="block group h-full">
            <div className="overflow-hidden rounded-sm h-full">
              <ImageCard
                image={mainStory.image}
                tag={mainStory.tag}
                title={mainStory.title}
                size="lg"
              />
            </div>
          </a>

          {/* Right column: two square cards on top, one wide card filling the rest */}
          <div className="flex flex-col gap-6 h-full min-h-0">
            <div className="grid grid-cols-2 gap-6 shrink-0">
              {secondaryStories.slice(0, 2).map((story, i) => (
                <ImageCard
                  key={i}
                  image={story.image}
                  tag={story.tag}
                  title={story.title}
                  orientation="vertical"
                  size="md"
                  className="overflow-hidden rounded-sm"
                />
              ))}
            </div>

            <ImageCard
              image={secondaryStories[2].image}
              alt={secondaryStories[2].title}
              tag={secondaryStories[2].tag}
              title={secondaryStories[2].title}
              size="fill"
              className="flex-1 min-h-0"
            />
          </div>
        </div>
      </section>

      <section className="w-full items-center justify-center  mx-auto px-4 py-6 lg:px-8 lg:py-10">
        {/* Header: title + nav controls */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="flex items-center gap-2 text-lg font-bold font-euclidcircular text-gray-900">
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

        {/* Ad banners — own div, stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 mb-10 justify-center max-w-6xl mx-auto">
          <img
            src={Images.adbannerImage}
            alt="Eversend ad"
            className="w-full md:w-1/2 lg:w-1/2 rounded-lg object-cover"
          />
          <img
            src={Images.adbannerImage}
            alt="IC Markets ad"
            className="w-full md:w-1/2 lg:w-1/2 rounded-lg object-cover"
          />
        </div>

        <EditorPickSection />
      </section>

      <section className="px-4 md:px-8 lg:px-16">
        <div className="py-8">
          <CategorySection
            label="Politics"
            article={{
              image: Images.placeholderImage,
              title: "Falana Asks FG To Review Fuel Subsidy Removal",
              excerpt:
                "Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy...",
              author: "Ogechi Joseph",
              postedAt: "13 mins ago",
              href: "#",
            }}
            relatedStories={[
              {
                title:
                  "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
                href: "#",
                image: Images.placeholderImage,
              },
              {
                title:
                  "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
                href: "#",
                image: Images.placeholderImage,
              },
              {
                title:
                  "Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest",
                href: "#",
                image: Images.placeholderImage,
              },
              {
                title: "Foden Sparkles As Man City Crush Spineless Man United",
                href: "#",
                image: Images.placeholderImage,
              },
              {
                title:
                  "Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog",
                href: "#",
                image: Images.placeholderImage,
              },
            ]}
          />
        </div>

        <div className="border-t border-gray-200 py-8">
          <CategorySection
            label="Business"
            article={{
              image: Images.placeholderImage,
              title: "Your Business headline here",
              excerpt: "Your Business excerpt here...",
              author: "Ogechi Joseph",
              postedAt: "20 mins ago",
              href: "#",
            }}
            relatedStories={[
              {
                title: "Related business story 1",
                href: "#",
                image: Images.placeholderImage,
              },
              {
                title: "Related business story 2",
                href: "#",
                image: Images.placeholderImage,
              },
            ]}
          />
        </div>

        <div className="border-t border-gray-200 py-8">
          <CategorySection
            label="Sports"
            article={{
              image: Images.placeholderImage,
              title: "Your Sports headline here",
              excerpt: "Your Sports excerpt here...",
              author: "Ogechi Joseph",
              postedAt: "1 hr ago",
              href: "#",
            }}
            relatedStories={[
              {
                title: "Related sports story 1",
                href: "#",
                image: Images.placeholderImage,
              },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4" >
        <FeaturedStoriesSection
          stories={featuredStories}
          ads={[
            { image: Images.placeholderImage, href: "#", alt: "Ad" },
            {
              image: Images.placeholderImage,
              href: "#",
              alt: "Domino's Pizza ad",
            },
          ]}
        />
        <div className="mt-10">
        <NewsInVideosSection videos={newsVideos} viewMoreHref="/videos" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 flex flex-col gap-10 mb-5">
        <NewsinpicturesSection stories={newsInPictures} />
        <StoriesyoumayhavemissedSection stories={storiesYouMayHaveMissed} />
        <Newsletterandadblock
         adImage= {Images.adbannerImage}
          adHref="#"
        />
      </section>
    </div>
  );
}
