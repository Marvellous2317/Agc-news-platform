import React from "react";

/**
 * StoriesYouMayHaveMissedSection
 *
 * Mobile:  items stacked in one column, "Show more" button underneath.
 * Desktop: items laid out in a row of 4 columns, with dots + an arrow
 *          on the header instead of a "Show more" button (these dots
 *          are just visual here, not a working carousel — say the word
 *          if you actually want it to slide).
 *
 * Props:
 * - stories: [{ title, href, date, category }]
 */
export default function StoriesyoumayhavemissedSection({ stories }) {
  return (
    <section className="w-full mt-10">
      {/* header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold uppercase tracking-wide text-gray-900">
          Stories You May Have Missed
        </span>

        {/* dots + arrow — desktop only */}
        <div className="hidden items-center gap-1.5 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="ml-2 text-gray-400">{">"}</span>
        </div>
      </div>

      {/* ---- Mobile: single column ---- */}
      <div className="mt-4 space-y-4 md:hidden">
        {stories.map((story) => (
          <a key={story.title} href={story.href} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 bg-gray-900" />
            <div>
              <p className="text-sm font-bold leading-snug text-gray-900">{story.title}</p>
              <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {story.date}
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {story.category}
              </p>
            </div>
          </a>
        ))}
      </div>

      <button className="mt-5 w-full rounded-full border border-gray-300 py-2 text-sm font-semibold text-gray-700 md:hidden">
        Show more
      </button>

      {/* ---- Desktop: 4-column row ---- */}
      <div className="mt-5 hidden grid-cols-4 gap-6 md:grid">
        {stories.slice(0, 4).map((story) => (
          <a key={story.title} href={story.href} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 bg-gray-900" />
            <div>
              <p className="text-sm font-bold leading-snug text-gray-900">{story.title}</p>
              <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {story.date}
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {story.category}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}