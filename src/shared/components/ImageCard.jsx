import React from "react";

/**
 * ImageCard
 *
 * Props:
 * - image      : string  (required) — image URL
 * - alt        : string  — alt text for the image (defaults to title)
 * - tag        : string  — small label above the title (e.g. "LATEST TODAY")
 * - title      : string | node — headline text (can be a string or JSX for richer overlays)
 * - href       : string  — link target (defaults to "#")
 * - orientation: "vertical" | "horizontal" — vertical: image on top, text below (grid cards).
 *                horizontal: image on the left, text on the right (list rows). Default: "vertical"
 * - size       : "sm" | "md" | "lg" | "fill" — controls image height (vertical) or thumbnail size (horizontal). Default: "md"
 * - className  : string — extra classes appended to the root element
 */
export default function ImageCard({
  image,
  alt,
  tag,
  title,
  href = "#",
  orientation = "vertical",
  size = "md",
  className = "",
}) {
  const verticalHeight = {
    sm: "h-32",
    md: "h-40",
    lg: "h-[400px]",
    fill: "h-full",
  };

  const horizontalThumb = {
    sm: "w-16 h-14",
    md: "w-20 h-16",
    lg: "w-28 h-20",
  };

  const titleSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-[20px]",
  };

  if (orientation === "horizontal") {
    return (
      <a href={href} className={`flex items-start gap-3 group ${className}`}>
        <div
          className={`relative overflow-hidden rounded-sm shrink-0 ${horizontalThumb[size] || horizontalThumb.md}`}
        >
          <img
            src={image}
            alt={alt || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="min-w-0">
          {tag && (
            <p className="text-xs font-semibold text-pink-600 tracking-wide">
              {tag}
            </p>
          )}
          <h3
            className={`mt-1 font-bold text-gray-900 leading-snug ${titleSize[size] || titleSize.md}`}
          >
            {title}
          </h3>
        </div>
      </a>
    );
  }

  return (
    <a href={href} className={`block group ${className}`}>
      <div
        className={`relative overflow-hidden rounded-sm ${size === "fill" ? "h-full" : ""}`}
      >
        <img
          src={image}
          alt={alt || title}
          className={`w-full ${verticalHeight[size] || verticalHeight.md} object-cover group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute z-0 inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/83 to-black/30 blur-[10px]" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          {tag && (
            <p className="mt-2 text-sm font-semibold font-euclidcircular text-pink-600 tracking-wide">
              {tag}
            </p>
          )}
          {title && (
            <h3
              className={`mt-1 font-bold font-euclidcircular text-primary-100 leading-snug ${titleSize[size] || titleSize.md}`}
            >
              {title}
            </h3>
          )}
        </div>
      </div>
    </a>
  );
}

