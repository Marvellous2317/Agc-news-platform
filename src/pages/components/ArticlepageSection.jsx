import React from "react";
import AdBanner from "../../shared/components/AdBanner";
import Images from "../../assets/images";

/**
 * ArticlePage
 *
 * The template for a single article — every article uses this same
 * component, with the actual words/images coming in through `article`.
 *
 * The body isn't just a block of text: it's an array of pieces
 * (`article.content`), each one either a paragraph or an inline ad.
 * That's what lets the ad sit in the middle of the article without any
 * special-case "insert ad after paragraph 3" logic — it's just another
 * item in the list, rendered based on its `type`.
 *
 * Props:
 * - article: {
 *     category: string,        // "World News"
 *     title: string,
 *     postedAt: string,        // "1:32 AM, Sun March 10, 2024"
 *     readTime: string,        // "4 minute read"
 *     author: string,          // "Osazie Ogechi"
 *     heroImage: string,
 *     heroCaption: string,     // "Russia-Africa Forum. Photo: Getty Images"
 *     content: [
 *       { type: "paragraph", text: "..." },
 *       { type: "ad", image: "...", href: "#" },
 *       { type: "paragraph", text: "..." },
 *     ],
 *   }
 * - topStories : [{ title, href }]      — sidebar list
 * - sidebarAds : [{ image, href, alt }] — sidebar ad stack, natural heights
 */
export default function ArticlepageSection({ article, topStories, sidebarAds }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* ---- main article column ---- */}
        <article className="flex-1">
          {/* category badge + share button */}
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-900">
              {article.category}
            </span>
            <button className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Share
            </button>
          </div>

          {/* headline */}
          <h1 className="mt-4 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
            {article.title}
          </h1>

          {/* meta + byline */}
          <p className="mt-3 text-xs text-gray-500">
            Posted {article.postedAt} &nbsp;•&nbsp; {article.readTime}
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-900">By {article.author}</p>

          {/* hero image + caption */}
          <img
            src={article.heroImage}
            alt={article.title}
            className="mt-5 w-full rounded-sm object-cover"
          />
          {article.heroCaption && (
            <p className="mt-2 text-xs italic text-gray-500">{article.heroCaption}</p>
          )}

          {/* body: paragraphs and inline ads, in whatever order `content` says */}
          <div className="mt-6 space-y-4">
            {article.content.map((block, i) => {
              if (block.type === "ad") {
                return (
                  <a key={i} href={block.href} className="block">
                   <AdBanner imageSrc={Images.adbannerImage} className="mt-4 bg-primary-100" />
                  </a>
                );
              }
              // default: paragraph
              return (
                <p key={i} className="text-sm leading-relaxed text-gray-700">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* share icons */}
          <div className="mt-8 flex items-center gap-3 border-t border-gray-200 pt-5">
            {["X", "IG", "FB", "PIN", "LI", "🔗"].map((label) => (
              <a
                key={label}
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-[10px] font-semibold text-gray-700"
              >
                {label}
              </a>
            ))}
          </div>
        </article>

        {/* ---- sidebar: top stories + ads ---- */}
        <aside className="w-full lg:w-64 lg:shrink-0">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-900">Top Stories</p>

          <div className="mt-3 space-y-3">
            {topStories.map((story) => (
              <a key={story.title} href={story.href} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-red-600" />
                <span className="text-sm font-semibold text-gray-900 hover:text-red-600">
                  {story.title}
                </span>
              </a>
            ))}
          </div>

          {/* ad stack — same "let natural height stack" trick as before */}
          <div className="mt-6 flex flex-col gap-6">
            {sidebarAds.map((ad) => (
              <a key={ad.image} href={ad.href}>
                <img src={ad.image} alt={ad.alt} className="w-full rounded-sm" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}