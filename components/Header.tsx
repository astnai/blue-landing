import { useState, useEffect } from "react";
import { ShoppingCartIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 transition-colors duration-300 ${
        isScrolled ? "bg-blue-600/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">all blue</h1>
        <form className="hidden md:block flex-grow mx-4">
          <div className="relative max-w-md mx-auto">
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
          </div>
        </form>
        <div className="flex items-center space-x-4">
          <button
            className="hover:text-blue-200 transition-colors text-white"
            aria-label="Shopping Cart"
          >
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          <button
            className="md:hidden hover:text-blue-200 transition-colors text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700/90 backdrop-blur-sm p-4">
          <form className="mt-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
            </div>
          </form>
        </div>
      )}
    </header>
  );
}
