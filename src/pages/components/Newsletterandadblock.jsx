import React from "react";

/**
 * NewsletterAndAdBlock
 *
 * Just a <div> (not a <section>) — it's a promo block, not a content section.
 * Mobile: subscribe card, then the ad image, stacked.
 * Desktop: subscribe card on the left, ad image on the right, side by side.
 *
 * Props:
 * - adImage : string — the ad banner image URL
 * - adHref  : string — where the ad links to
 */
export default function Newsletterandadblock({ adImage, adHref = "#" }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
      {/* subscribe card */}
      <div className="flex flex-1 items-start gap-3 md:max-w-sm">
        <svg viewBox="0 0 24 24" fill="none" className="mt-1 h-6 w-6 shrink-0 text-gray-400">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="flex-1">
          <p className="text-sm text-gray-600">
            Get the latest news and stories from around Africa directly into your inbox daily.
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            className="mt-3 w-full rounded border border-gray-300 px-3 py-2 text-sm"
          />

          <button className="mt-3 w-full rounded bg-pink-600 py-2 text-sm font-semibold text-white">
            Get Me In
          </button>
        </div>
      </div>

      {/* ad banner */}
      <a href={adHref} className="flex-1">
        <img src={adImage} alt="Advertisement" className="h-full w-full rounded-sm object-cover" />
      </a>
    </div>
  );
}