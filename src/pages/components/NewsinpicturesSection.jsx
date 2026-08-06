import React from "react";
import ImageCard from "../../shared/components/ImageCard";

/**
 * NewsInPicturesSection
 *
 * Mobile:  first story shown big (badge over the image, title in plain
 *          text below it) — same pattern as your News In Videos hero —
 *          then the next 3 stories as a small stacked list.
 * Desktop: first story is a tall image on the left with its title
 *          overlaid on the photo, next to a 2x2 grid of smaller images
 *          (also with overlaid titles).
 *
 * Props:
 * - stories: [{ image, tag, title, href }]
 *     Needs at least 5 — story[0] is the "hero", the rest fill the
 *     mobile list (uses first 3) and the desktop grid (uses first 4).
 */



// paste this above your HomePage component, alongside newsVideos / featuredStories



// then pass it in:
// <NewsinpicturesSection stories={newsInPictures} />

export default function NewsInPicturesSection({ stories }) {
  const [heroStory, ...restStories] = stories;

  return (
    <section className="w-full">
      {/* header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold uppercase tracking-wide text-gray-900">
          News In Pictures
        </span>
        <a href="#" className="text-sm text-gray-500">
          View more <span className="text-gray-400">{">"}</span>
        </a>
      </div>

      {/* ---- Desktop: tall image left + 2x2 grid right, titles overlaid ---- */}
      <div className="mt-5 hidden h-80 grid-cols-3 grid-rows-2 gap-4 md:grid">
        <div className="col-span-1 row-span-2">
          <ImageCard
            image={heroStory.image}
            tag={heroStory.tag}
            title={heroStory.title}
            href={heroStory.href}
            size="fill"
            className="h-full"
          />
        </div>

        {restStories.slice(0, 4).map((story) => (
          <ImageCard
            key={story.title}
            image={story.image}
            tag={story.tag}
            title={story.title}
            href={story.href}
            size="fill"
            className="h-full"
          />
        ))}
      </div>

      {/* ---- Mobile: hero card, title in plain text below the image ---- */}
      <div className="mt-5 md:hidden">
        <a href={heroStory.href} className="block">
          <div className="relative">
            <span className="absolute left-2 top-2 rounded bg-pink-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              {heroStory.tag}
            </span>
            <ImageCard image={heroStory.image} alt={heroStory.title} size="lg" />
          </div>
          <h4 className="mt-2 text-sm font-bold leading-snug text-gray-900">
            {heroStory.title}
          </h4>
        </a>

        {/* small stacked list underneath */}
        <div className="mt-4 space-y-4">
          {restStories.slice(0, 3).map((story) => (
            <a key={story.title} href={story.href} className="flex items-start gap-3">
              <img
                src={story.image}
                alt={story.title}
                className="h-16 w-20 shrink-0 rounded-sm object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-pink-600">{story.tag}</p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-gray-900">
                  {story.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}