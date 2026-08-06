import React from "react";

/**
 * NewsInVideosSection
 *
 * Desktop: a 3-column grid of video cards (thumbnail + tag + play icon + title).
 * Mobile:  the FIRST video shown big like a hero, the rest shown as a
 *          compact stacked list (small thumbnail + tag + title in a row).
 *
 * Props:
 * - videos      : [{ image, tag, title, href }]   (design uses 6 for desktop)
 * - viewMoreHref: string — link for the "View more" text top-right
 */
export default function NewsInVideosSection({ videos, viewMoreHref = "#" }) {
  const [firstVideo, ...restVideos] = videos;

  return (
    <section className="w-full">
      {/* header — no purple bar this time, just bold text + "View more" */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold uppercase tracking-wide text-gray-900">
          News In Videos
        </span>
        <a href={viewMoreHref} className="text-sm text-gray-500">
          View more <span className="text-gray-400">{">"}</span>
        </a>
      </div>

      {/* ---- Desktop: 3-column grid, all videos the same size ---- */}
      <div className="mt-5 hidden grid-cols-3 gap-x-6 gap-y-6 md:grid">
        {videos.map((video) => (
          <a key={video.title} href={video.href} className="block">
            <div className="relative">
              <img
                src={video.image}
                alt={video.title}
                className="h-40 w-full rounded-sm object-cover"
              />
              <span className="absolute left-2 top-2 rounded bg-gray-900/75 px-2 py-0.5 text-[10px] font-semibold text-white">
                {video.tag}
              </span>
              {/* play button */}
              <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80">
                <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-10 border-y-transparent border-l-gray-900" />
              </span>
            </div>
            <h4 className="mt-2 border-b border-gray-200 pb-3 text-sm font-semibold leading-snug text-gray-900">
              {video.title}
            </h4>
          </a>
        ))}
      </div>

      {/* ---- Mobile: first video big, rest in a compact list ---- */}
      <div className="mt-5 md:hidden">
        <a href={firstVideo.href} className="block">
          <div className="relative">
            <img
              src={firstVideo.image}
              alt={firstVideo.title}
              className="h-56 w-full rounded-sm object-cover"
            />
            <span className="absolute left-2 top-2 rounded bg-gray-900/75 px-2 py-0.5 text-[10px] font-semibold text-white">
              {firstVideo.tag}
            </span>
            <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80">
              <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-10 border-y-transparent border-l-gray-900" />
            </span>
          </div>
          <h4 className="mt-2 border-b border-gray-200 pb-3 text-sm font-semibold leading-snug text-gray-900">
            {firstVideo.title}
          </h4>
        </a>

        <div className="mt-4 space-y-4">
          {restVideos.map((video) => (
            <a
              key={video.title}
              href={video.href}
              className="flex items-start gap-3 border-b border-gray-200 pb-3"
            >
              <img
                src={video.image}
                alt={video.title}
                className="h-16 w-20 shrink-0 rounded-sm object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-indigo-600">{video.tag}</p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-gray-900">
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}