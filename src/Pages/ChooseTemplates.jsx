import ResumeImage from "./landingImage.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Templates() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(-1);

  const handleTemplateClick = (index) => {
    setSelectedTemplate(index);
    console.log(index);

    // Save selectedTemplate to localStorage userData object
    const userData = {};
    userData.selectedTemplate = index;
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <>
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-thin font-serif text-center mb-8">
          Select Your Resume
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              onClick={() => handleTemplateClick(index)}
              className={`bg-white border-1 border-gray-400 p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:border-2 hover:shadow-lg ${
                selectedTemplate === index ? "border-blue-400 border-2" : ""
              }`}
            >
              <div className="w-full h-80 rounded-lg mb-4 flex items-center justify-center">
                <img src={ResumeImage} alt="Resume Template" className="" />
              </div>
              <span
                className={`text-xl ${
                  selectedTemplate === index ? "font-bold" : "font-semibold"
                } text-gray-800`}
              >
                Template {index + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            className="bg-gray-800 text-white text-2xl mt-8 py-2 px-4 rounded-lg shadow-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => navigate("/UserData")}
          >
            Choose Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Templates;
