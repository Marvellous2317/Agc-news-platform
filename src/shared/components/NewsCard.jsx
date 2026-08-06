import React from 'react';

export default function NewsCard({ tag, title, image }) {
  return (
    <div className="relative shrink-0 w-[85%] sm:w-[45%] md:w-1/4 snap-start rounded-3xl overflow-hidden h-56">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <span className="absolute top-2 left-2 bg-primary-500/80 text-white text-xs px-3 py-2 rounded-3xl">
        {tag}
      </span>
      <div className="absolute items-center justify-center bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-2 mx-2">
        <p className="text-white text-lg font-semibold leading-snug pb-2">
          {title}
        </p>
      </div>
    </div>
  );
}