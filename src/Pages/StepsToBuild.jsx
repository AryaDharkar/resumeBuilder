import resumeImage from "./resumeImage.png";

function StepsToBuild() {
  return (
    <>
      <div className="w-full p-6 md:p-10 max-w-screen-lg mx-auto mt-16 flex flex-col md:flex-row items-center md:items-start justify-center">
        {/* Text Section (Left) */}
        <div className="w-full md:w-2/3 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Just three simple steps
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <span className="text-3xl font-bold text-gray-900 mr-4 mb-2 md:mb-0">
                1
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Select
                </h3>
                <p className="text-gray-600">
                  Choose a template from our library of professional designs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start">
              <span className="text-3xl font-bold text-gray-900 mr-4 mb-2 md:mb-0">
                2
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Build
                </h3>
                <p className="text-gray-600">
                  Fill out your resume with industry-specific bullet points.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start">
              <span className="text-3xl font-bold text-gray-900 mr-4 mb-2 md:mb-0">
                3
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Customize
                </h3>
                <p className="text-gray-600">
                  Customize the details, and when you're ready, export your
                  resume.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image & Button Section (Right) */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-60 h-72 bg-gray-200 flex items-center justify-center shadow-md rounded-lg mb-6 hidden lg:flex">
            {/* This is where you can put the image or placeholder */}
            <img
              src={resumeImage}
              alt="Resume Example"
              className="w-60 h-72 object-cover shadow-xl hidden lg:flex"
            />
          </div>

          {/* Next Button */}
          <button className="bg-red-500 text-white px-10 py-4 rounded-full text-2xl md:text-3xl font-semibold hover:bg-red-600 transition-colors duration-200">
            <a href="/templates">Next</a>
          </button>
        </div>
      </div>
    </>
  );
}
export default StepsToBuild;
