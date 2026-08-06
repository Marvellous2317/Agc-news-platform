import React, { useState, useEffect } from "react";
import Icons from "../../assets/icons";
import AdBanner from "../../shared/components/AdBanner";
import Images from "../../assets/images";

function TopNav() {
  const utilityLinks = [
    "About Us",
    "Contact Us",
    "AGC Archive",
    "Advert Rate",
    "Privacy Policy",
    "AGC VIP",
  ];

  const socialIcons = [
    { icon: Icons.instagram, label: "Instagram" },
    { icon: Icons.facebook, label: "Facebook" },
    { icon: Icons.twitter, label: "Twitter" },
    { icon: Icons.location, label: "Location" },
    { icon: Icons.linkedin, label: "LinkedIn" },
  ];

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-[#D6127D] text-white font-euclidcircular font-medium text-xs">
      <div className="w-full flex items-center justify-between px-4 py-2">
        <nav className="hidden md:flex items-center gap-5">
          {utilityLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:underline whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 ml-auto">
          <span className="hidden sm:inline whitespace-nowrap">{today}</span>
          <span className="hidden sm:inline w-px h-4 bg-white/40" />
          <div className="flex items-center gap-2.5">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="hover:opacity-75"
              >
                <img src={Icon} alt={label} className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  const primaryLinks = [
    "Home",
    "Africa",
    "Politics",
    "Business",
    "Sport",
    "Health",
    "Tech",
    "Opinion",
  ];

  const mediaLinks = ["Photos", "Videos", "Audio"];

  return (
    <div className="bg-black text-white font-euclidcircular font-bold text-lg">
      <div className="w-full flex items-center justify-between px-4 py-3">
        

        {/* Primary nav */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {/* Logo */}
        <a href="#" className="flex items-center shrink-0 mr-8">
          <img src={Icons.agcLogo} className="w-20 h-10 object-contain" />
        </a>
          {primaryLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`pb-1 ${
                i === 0
                  ? "border-b-2 border-red-600 text-white"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Media links + actions */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium ml-6">
          <span className="w-px h-5 bg-white/30" />
          {mediaLinks.map((link) => (
            <a key={link} href="#" className="text-gray-200 hover:text-white">
              {link}
            </a>
          ))}
          <button
            aria-label="Search"
            className="text-gray-200 hover:text-white"
          >
            <img src={Icons.search} className="w-3 h-3 object-contain" />
          </button>
          <a href="#" className="text-gray-200 hover:text-white">
            Log in
          </a>
          <span className="text-gray-500">/</span>
          <a href="#" className="text-gray-200 hover:text-white">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <div>
      <TopNav />
      <AdBanner imageSrc={Images.adbannerImage} />
      <BottomNav />
    </div>
  );
}

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <nav className="bg-primary-400 shadow-sm w-full md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section - Logo and Menu */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <img
                src={Icons.hamburgerMenu}
                className="w-10 h-10 object-contain"
              />
            )}
          </button>
          <button className="p-1">
            <img src={Icons.search} className="w-5 h-5 object-contain" />
          </button>
        </div>

        <div className="flex items-center">
          <img src={Icons.agcLogo} className="object-contain w-15 h-15 " />
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-4">
          {/* <button className="p-1 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button> */}
          <button className="p-1">
            <img src={Icons.userProfile} className="w-10 h-7 object-contain" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Track your expenses as you go and claim even deduction
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-blue-600">
                INTUIT
              </span>
              <span className="text-sm font-bold">quickbooks</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium">
              Buy now and save
            </button>
          </div>
        </div>
      )}
    </nav>
    <AdBanner imageSrc={Images.adbannerImage} className="mt-4 bg-primary-100" />
</div>
  );
}

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the 'md' breakpoint in Tailwind
    };

    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>;
}
