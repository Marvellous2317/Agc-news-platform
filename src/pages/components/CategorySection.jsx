import React from "react";
import ImageCard from "../../shared/components/ImageCard";

/**
 * CategorySection — a "Politics" / "Business" / "Sports" style block.
 *
 * How to reuse it 3 times: just render <CategorySection ... /> three times
 * with different props. No need for arrays or data-driven mapping — copy,
 * paste, change the props. Simple beats clever here.
 *
 * Props you pass in:
 * - label          : "Politics" (the small heading at the top)
 * - article        : { image, title, excerpt, author, postedAt, href }
 * - relatedStories : [{ title, href, image }, ...]  (5 items max looks best)
 */
export default function CategorySection({ label, article, relatedStories }) {
  return (
    <section className="w-full mx-auto px-4 md:px-8">
      {/* ---- 1. Header: purple bar + label + ">" ---- */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 bg-purple-700" />
          <span className="text-sm font-bold uppercase tracking-wide text-gray-900">
            {label}
          </span>
        </div>
        <span className="text-gray-400">{">"}</span>
      </div>

      {/*
        ---- 2. The body ----
        On mobile this is just one column, stacked top to bottom.
        On desktop ("md:" prefix = medium screens and up) it becomes
        a 3-column grid, and the article takes up 2 of the 3 columns.
      */}
      <div className="mt-5 flex flex-col gap-6 md:flex-row md:gap-8">
        {/* Left side: the main article. md:w-2/3 = two thirds of the row on desktop */}
        <div className="md:w-2/3">
          <a href={article.href} className="block">
            <ImageCard image={article.image} alt={article.title} size="lg" />

            <h3 className="mt-3 text-lg font-bold text-gray-900 md:text-xl">
              {article.title}
            </h3>

            <p className="mt-1.5 text-sm text-gray-500">{article.excerpt}</p>

            <p className="mt-2 text-xs text-gray-500">
              {article.author} &nbsp;•&nbsp; Posted {article.postedAt}
            </p>
          </a>
        </div>

        {/* Right side: the related list. md:w-1/3 = one third of the row on desktop */}
        <div className="md:w-1/3 md:border-l md:border-gray-200 md:pl-6">
          {relatedStories.map((story) => (
            <a
              key={story.title}
              href={story.href}
              className="mb-4 flex items-start justify-between gap-3 last:mb-0"
            >
              <span className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-red-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {story.title}
                </span>
              </span>

              {/* thumbnail only shows up on desktop */}
              {story.image && (
                <img
                  src={story.image}
                  alt=""
                  className="hidden h-14 w-20 shrink-0 rounded-sm object-cover md:block"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}