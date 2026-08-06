import React from "react";
import ImageCard from "../../shared/components/ImageCard";
import Images from "../../assets/images";
import Icons from "../../assets/icons";


/**
 * EditorsPickSection
 *
 * Replicates the "Editor's Pick" module:
 * - Mobile  (< md):  image card on top, headline/excerpt/byline below it in plain
 *                     text, then the related-story list right underneath (no heading).
 * - Desktop (>= md):  large image with headline/excerpt/byline overlaid on a gradient,
 *                     "Editor's Pick" badge floating top-left, and a "MORE STORIES"
 *                     list in a sidebar column to the right.
 *
 * Data below is placeholder — wire up `editorPick` / `moreStories` to your CMS/API.
 */

const editorPick = {
  image: Images.placeholderImage,
  alt: "Dangote Refinery",
  tag: "Editor's Pick",
  title: "Dangote Refinery's second crude oil shipment leaves US for Nigeria",
  excerpt: "First cargo to arrive next week",
  author: "Ogechi Joseph",
  href: "#",
};

const moreStories = [
  {
    title: "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
    href: "#",
  },
  {
    title: "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
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
    title: "Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog",
    href: "#",
  },
];

function CameraIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2.19a1 1 0 0 0 .8-.4l.9-1.2a1 1 0 0 1 .8-.4h3.62a1 1 0 0 1 .8.4l.9 1.2a1 1 0 0 0 .8.4h2.19A1.5 1.5 0 0 1 20 8.5v8A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function EditorsPickBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-700/35 px-3 py-2 text-sm font-semibold font-euclidcircular text-white backdrop-blur-sm">
      <img src={Icons.editorPick} alt="Editor's Pick" className="w-5 h-5 object-contain" />
      Editor's Pick
    </span>
  );
}

function RedBullet() {
  return (
    <span className="mt-1.5 h-5 w-5 shrink-0 bg-red-600" aria-hidden="true" />
  );
}

function StoryList({ stories, className = "" }) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {stories.map((story) => (
        <li key={story.title} className="flex items-start gap-2">
          <RedBullet />
          <a
            href={story.href}
            className="text-[20px] font-normal font-euclidcircular leading-snug text-gray-900 transition-colors hover:text-red-600"
          >
            {story.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ByLine({ author, light = false }) {
  return (
    <div
      className={`mt-2 flex items-center gap-1.5 font-montserrat font-bold text-xs ${
        light ? "text-white/85" : "text-gray-600"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-red-600" aria-hidden="true" />
      {author}
    </div>
  );
}

export default function EditorsPickSection() {
  return (
    <section className="w-full ">
      <div className="mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* ---------- Mobile card (image on top, text below) ---------- */}
          <div className="md:hidden">
            <a href={editorPick.href} className="block group">
              <div className="relative">
                <span className="absolute left-3 top-3 z-10">
                  <EditorsPickBadge />
                </span>
                <ImageCard
                  image={editorPick.image}
                  alt={editorPick.alt}
                  title=""
                  size="md"
                  href={editorPick.href}
                  className="pointer-events-none"
                />
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900">
                {editorPick.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{editorPick.excerpt}</p>
              <ByLine author={editorPick.author} />
            </a>

            <StoryList stories={moreStories} className="mt-5" />
          </div>

          {/* ---------- Desktop featured card (text overlaid on image) ---------- */}
          <div className="hidden md:col-span-2 md:block">
            <div className="relative">
              <span className="absolute left-4 top-4 z-20">
                <EditorsPickBadge />
              </span>
              <ImageCard
                image={editorPick.image}
                alt={editorPick.alt}
                size="lg"
                href={editorPick.href}
                title={
                  <>
                    <span className="block text-[28px] font-euclidcircular font-semibold ">{editorPick.title}</span>
                    <span className="mt-2 block text-lg font-normal font-euclidcircular text-white/85">
                      {editorPick.excerpt}
                    </span>
                    <ByLine author={editorPick.author} light />
                  </>
                }
              />
            </div>
          </div>

          {/* ---------- Desktop "More stories" sidebar ---------- */}
          <div className="hidden md:col-span-1 md:block">
            <h4 className="mb-4 text-lg font-bold font-euclidcircular text-secondary-100 uppercase tracking-wider ">
              More Stories
            </h4>
            <StoryList stories={moreStories} />
          </div>
        </div>
      </div>
    </section>
  );
}