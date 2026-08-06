import React from "react";

/**
 * Footer
 *
 * Dark footer with logo, social icons, a search bar, a grid of links,
 * and a copyright line. Responsive: link grid goes from 2 columns on
 * mobile up to 5 on desktop.
 *
 * Props:
 * - links: [{ label, href }]   — flat list, rendered into the grid in order
 */
const defaultLinks = [
  { label: "Home", href: "#" },
  { label: "Business", href: "#" },
  { label: "Tech", href: "#" },
  { label: "Photos", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Africa", href: "#" },
  { label: "Sport", href: "#" },
  { label: "Opinion", href: "#" },
  { label: "AGC Archive", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Politics", href: "#" },
  { label: "Health", href: "#" },
  { label: "Videos", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Advert Rate", href: "#" },
];

export default function Footer({ links = defaultLinks }) {
  return (
    <footer className= "w-full bg-gray-900 py-8 text-gray-300 mt-auto">
      <div className="mx-auto max-w-6xl px-4">
        {/* top row: logo + social icons */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold text-white">AGC NEWSNET</span>

          <div className="flex items-center gap-3">
            {["IG", "FB", "X", "TG", "LI"].map((label) => (
              <a
                key={label}
                href="#"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* search bar */}
        <input
          type="search"
          placeholder="Search AGC Newsnet"
          className="mt-5 w-full rounded border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-500"
        />

        {/* link grid */}
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-5">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-gray-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AGC Newsnet. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}