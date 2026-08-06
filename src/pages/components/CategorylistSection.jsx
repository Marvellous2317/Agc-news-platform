import React from "react";
import Images from "../../assets/images";

/**
 * CategoryListSection
 *
 * 2 columns on desktop: story list (left, wide) + ad stack (right, narrow).
 * Stacks to 1 column on mobile (ads move below the list).
 *
 * Props:
 * - categoryLabel : string — e.g. "Other Stories in Politics"
 * - stories        : [{ image, tag, title, postedAt, excerpt, href }]
 * - ads            : [{ image, href, alt }]  — any number, any aspect ratio
 * - pagination     : {
 *     showingFrom, showingTo, totalItems,   // for the "Showing 1-10 of 68" text
 *     pages,          // array to render as buttons, e.g. [1,2,3,4,5,"...",7]
 *     currentPage,
 *     onPageChange,   // (page) => void
 *   }
 */
export default function CategoryListSection({
  categoryLabel,
  stories,
  ads,
  pagination,
}) {
  return (
    <section className="w-full">
      {/* header */}
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 bg-purple-700" />
        <span className="text-sm font-bold uppercase tracking-wide text-gray-900">
          {categoryLabel}
        </span>
      </div>

      {/* 2 columns: list + ads */}
      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        {/* ---- left: story list + pagination ---- */}
        <div className="flex-1">
          <div className="divide-y divide-gray-200">
            {stories.map((story) => (
              <a key={story.title + story.postedAt} href={story.href} className="flex gap-4 py-6">
                <div className="relative w-48 shrink-0">
                  <span className="absolute left-2 top-2 rounded bg-gray-900/75 px-2 py-0.5 text-[10px] font-semibold text-white">
                    {story.tag}
                  </span>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-32 w-full rounded-sm object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold leading-snug text-gray-900">
                    {story.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">Posted {story.postedAt}</p>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{story.excerpt}</p>
                  <span className="mt-3 inline-block rounded-full border border-gray-300 px-4 py-1.5 text-xs font-semibold text-gray-700">
                    Continue reading
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing {pagination.showingFrom}-{pagination.showingTo} of {pagination.totalItems}
            </p>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
                className="flex h-7 w-7 items-center justify-center text-gray-400"
              >
                {"<"}
              </button>

              {pagination.pages.map((page, i) =>
                page === "..." ? (
                  <span key={`ellipsis-${i}`} className="px-1 text-sm text-gray-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => pagination.onPageChange(page)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
                      page === pagination.currentPage
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
                className="flex h-7 w-7 items-center justify-center text-gray-400"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>

        {/* ---- right: ad stack, natural heights ---- */}
        <div className="flex w-full flex-col gap-6 lg:w-64 lg:shrink-0">
          {ads.map((ad) => (
            <a key={ad.image} href={ad.href}>
              <img src={ad.image} alt={ad.alt} className="w-full rounded-sm" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}