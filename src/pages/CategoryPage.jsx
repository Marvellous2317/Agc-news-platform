import { React, useState, useEffect } from "react";
import ImageCard from "../shared/components/ImageCard";
import CategoryListSection from "./components/CategorylistSection";
import Images from "../assets/images";
import { GetPageNumbers } from "../shared/utils/getPageNumbers";

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

// Stand-in for your full dataset — imagine this is 68 items for now.
// Once the API is ready, this whole array goes away.
const allPoliticsStories = Array.from({ length: 68 }, (_, i) => ({
  image: Images.placeholderImage,
  tag: "World News",
  title:
    "Dozens of Russian tourists were recently allowed to visit North Korea. Here's what they saw",
  postedAt: "1:32 AM, Sun March 10, 2024",
  excerpt:
    "Former President John Dramani Mahama has emphasized the importance of education to the country's development...",
  href: "#",
  id: i + 1, // real API data will already have a unique id — use that instead of index
}));

const PAGE_SIZE = 10;

export default function CategoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [stories, setStories] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Runs once on mount, and again every time currentPage changes.
  useEffect(() => {
    // ---- FOR NOW: slice the local array ----
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setStories(allPoliticsStories.slice(start, end));
    setTotalItems(allPoliticsStories.length);

    // ---- LATER: replace the 3 lines above with something like ----
    // fetch(`/api/politics?page=${currentPage}&pageSize=${PAGE_SIZE}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setStories(data.stories);       // the API's stories for this page
    //     setTotalItems(data.totalItems); // the API's total count, for "Showing X of Y"
    //   });
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  const showingFrom = totalItems === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(currentPage * PAGE_SIZE, totalItems);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional, but nice on a paginated list
  };

  return (
    <div>
      <section className="w-full max-w-6xl mx-auto px-4 py-6 lg:px-8 lg:py-10">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4 lg:mb-6">
          <span className="w-1 h-5 bg-pink-600 inline-block" />
          <h2 className="text-base lg:text-xl font-bold tracking-wide text-gray-900">
            TOP STORIES
          </h2>
        </div>

        {/* ===== MOBILE LAYOUT (hero + stacked list) ===== */}
        <div className="lg:hidden">
          {/* Hero */}
          <a href="#" className="block group">
            <div className="overflow-hidden rounded-sm">
              <img
                src={mainStory.image}
                alt={mainStory.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-xs font-semibold text-pink-600 tracking-wide">
              {mainStory.tag}
            </p>
            <h3 className="mt-1 text-lg font-bold text-gray-900 leading-snug">
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
                    <p className="text-[11px] font-semibold text-pink-600 tracking-wide">
                      {story.tag}
                    </p>
                    <h4 className="mt-1 text-sm font-semibold text-gray-900 leading-snug group-hover:text-pink-600 transition-colors">
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
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:h-100
        
        ">
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

      <section>
        <div className="mx-auto max-w-6xl px-4 py-8">
          <CategoryListSection
            categoryLabel="Other Stories in Politics"
            stories={stories}
            ads={[
              {
                image: Images.adbanner,
                href: "#",
                alt: "Cornflakes ad",
              },
              {
                image: Images.adbannerImage,
                href: "#",
                alt: "Valentine's ad",
              },
              {
                image: Images.adbannerImage,
                href: "#",
                alt: "SoccaBet ad",
              },
            ]}
            pagination={{
              showingFrom,
              showingTo,
              totalItems,
              pages: GetPageNumbers(currentPage, totalPages),
              currentPage,
              onPageChange: handlePageChange,
            }}
          />
        </div>
      </section>
    </div>
  );
}
