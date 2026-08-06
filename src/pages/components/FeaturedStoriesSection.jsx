import React from "react";
import ImageCard from "../../shared/components/ImageCard";

/**
 * FeaturedStoriesSection
 *
 * Desktop only — this whole section is hidden on mobile (the design just
 * shows stacked ad images there instead, which live outside this component).
 *
 * Shows 2 feature cards side by side, plus a 3rd column with 2 ad images
 * stacked on top of each other.
 *
 * Props:
 * - stories : [{
 *     image, title, author, postedAt, href,
 *     badge?: string,                 // optional small label over the image, e.g. "Opinion"
 *     relatedStories: [{ title, href }]
 *   }]
 * - ads     : [{ image, href, alt }]   // exactly 2 — top ad and bottom ad
 */
export default function FeaturedStoriesSection({ stories, ads }) {
  return (
    // hidden by default, only shows up from "md" screens up
    <section className="hidden w-full md:block">
      {/* header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 bg-purple-700" />
          <span className="text-sm font-bold uppercase tracking-wide text-gray-900">
            Featured Stories
          </span>
        </div>
        <span className="text-gray-400">{">"}</span>
      </div>

      {/* the 2 story cards + 1 ads column, side by side */}
      <div className="mt-5 grid grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.title}>
            <a href={story.href} className="block">
              <div className="relative">
                {story.badge && (
                  <span className="absolute left-2 top-2 rounded bg-gray-900/85 px-2 py-1 text-[10px] font-semibold uppercase text-white">
                    {story.badge}
                  </span>
                )}
                <ImageCard image={story.image} alt={story.title} size="md" />
              </div>

              <h3 className="mt-3 text-base font-bold leading-snug text-gray-900">
                {story.title}
              </h3>

              <p className="mt-1.5 text-xs text-gray-500">
                {story.author} &nbsp;•&nbsp; Posted {story.postedAt}
              </p>
            </a>

            {/* related list under this card — plain text, no images */}
            <div className="mt-3 space-y-2.5">
              {story.relatedStories.map((related) => (
                <a
                  key={related.title}
                  href={related.href}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-red-600" />
                  <span className="text-sm text-gray-800">{related.title}</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* 3rd column: 2 ad images, stacked */}
        <div className="flex flex-col gap-6">
          {ads.map((ad) => (
            <a key={ad.image} href={ad.href}>
              <img
                src={ad.image}
                alt={ad.alt}
                className="w-full rounded-sm object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
