import ResumeImage from "./landingImage.png";

function Templates() {
  return (
    <>
      <div className="min-h-screen hero-background p-8">
        <h1 className="text-4xl font-thin font-serif text-center mb-8 text-gray-100">
          Select Your Resume
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {/* Placeholder for image */}
              <div className="w-full h-80 rounded-lg mb-4 flex items-center justify-center">
                {/* <span className="text-gray-500 text-lg">Image</span> */}
                <img src={ResumeImage} alt="Resume Template" className="" />
              </div>
              {/* Template label */}
              <span className="text-xl font-semibold text-gray-800">
                Template {index + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gray-800 text-white text-2xl mt-8 py-2 px-4 rounded-lg shadow-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Choose Resume
          </button>
        </div>
      </div>
    </>
  );
}
export default Templates;
