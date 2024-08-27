import { Link } from "react-router-dom";

function Navbar() {
  let navFields = [
    { name: "Home", link: "/" },
    { name: "Steps", link: "/steps" },
    { name: "Templates", link: "/templates" },
  ];

  return (
    <div className="bg-white shadow-md py-4 px-8">
      <div className="flex items-center flex-col md:flex-row ">
        {/* Title on the Left */}
        <div className="text-3xl font-semibold text-slate-700 mb-3 md:my-0">
          Free Resume Builder
        </div>
        {/* Navbar Links in the Center */}
        <nav className="flex justify-center items-center flex-grow">
          {navFields.map((field) => (
            <Link
              key={field.name}
              to={field.link}
              className="text-gray-700 text-xl font-medium mx-8 hover:text-blue-600 transition-colors duration-300"
            >
              {field.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
