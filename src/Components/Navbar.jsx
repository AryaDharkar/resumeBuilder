import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navFields = [
    { name: "Home", link: "/" },
    { name: "Steps", link: "/steps" },
    { name: "Templates", link: "/templates" },
    { name: "Template", link: "/template" },
  ];

  // This function simulates the behavior of checking the current path
  // Replace this with your actual routing logic if available
  const isActivePath = (path) => window.location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Free Resume Builder
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navFields.map((field) => (
              <a
                key={field.name}
                href={field.link}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActivePath(field.link)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300"
                }`}
              >
                {field.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navFields.map((field) => (
            <a
              key={field.name}
              href={field.link}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActivePath(field.link)
                  ? "text-white bg-blue-600"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {field.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
