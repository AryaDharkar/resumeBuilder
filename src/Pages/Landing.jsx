import React from "react";
import landingImage4 from "./landingImage4.png";
import "../App.css";
import SubjectIcon from "@mui/icons-material/Subject";
const Landing = () => {
  return (
    <div>
      {/* Main Hero Section */}
      <div className="hero-background justify-center flex flex-col md:flex-row w-full p-7 md:px-10 mx-auto py-10 lg:pb-10 pb-40 max-w-screen-2xl">
        {/* Left Section */}
        {/* <div className="landing-left hidden md:flex md:w-1/2 w-full text-justify">
          <img
            src={landingImage4}
            alt="landingImage"
            className="ml-10 min-h-96"
          />
        </div> */}

        {/* Right Section */}
        <div className="landing-right flex flex-col items-center md:items-center p-6 md:p-6 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl text-white font-serif mb-6 text-center md:text-left">
            Free Resume Builder
          </h1>
          <button className="bg-gray-800 border-2 border-black text-white px-6 mt-6 mb-6 py-3 rounded-lg text-2xl font-semibold hover:text-blue-600 transition-colors duration-200">
            <a href="/steps">Build My Resume</a>
          </button>
          <SubjectIcon color="action" sx={{ fontSize: 150 }} />
          <h1 className="text-2xl mt-6 md:text-2xl text-white font-serif mb-6 text-center md:text-left">
            Unlimited Resumes
          </h1>
          <h1 className="text-2xl md:text-2xl text-white font-serif mb-6 text-center md:text-left">
            Multiple Templates
          </h1>
          <h1 className="text-2xl md:text-2xl text-white font-serif mb-6 text-center md:text-left">
            Gen AI Support
          </h1>
        </div>
      </div>
      {/* Feature Section */}
      <div className="feature-section w-full flex flex-col items-center p-5 md:p-10">
        {/* Feature 1 */}
        <p className="text-lg md:text-xl text-gray-800 text-center max-w-2xl">
          Our online resume builder offers a quick and easy way to create your
          professional resume from multiple design templates. Create a resume
          using our AI resume builder feature, plus take advantage of expert
          suggestions and customizable modern and professional resume templates.
          All the users have complete descretion to customize their resume as
          per their choice and no charges are applied for the same.
        </p>

        {/* Feature 2 */}
        <button className="bg-black text-white px-6 py-3 mt-6 rounded-lg text-lg hover:text-blue-600 transition-colors duration-200">
          <a href="/templates">See All Templates</a>
        </button>

        {/* Feature 3 */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mt-8">
          Get hired 33% faster with our feature-packed and easy-to-use resume
          builder app
        </h2>

        <div className="w-full p-6 md:p-10">
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Powerful Resume Builder
              </h3>
              <p className="text-gray-600">
                Use our potent creation tools and expert guidance to create the
                perfect resume for your next job application.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Professional Templates
              </h3>
              <p className="text-gray-600">
                Choose from 25+ applicant tracking systems (ATS)-friendly modern
                and professional templates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Customize Fonts and Colors
              </h3>
              <p className="text-gray-600">
                Select custom fonts and colors on any resume template.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Free Resume Examples
              </h3>
              <p className="text-gray-600">
                Use our more than 500 resume examples and templates to see what
                a great resume looks like in your field.
              </p>
            </div>

            {/* Card 5 */}
            <div className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                ATS-Friendly Templates
              </h3>
              <p className="text-gray-600">
                Sail through applicant tracking systems with resume templates
                that appeal to both machines and humans.
              </p>
            </div>

            {/* Card 6 */}
            <div className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Expert Tips and Guidance
              </h3>
              <p className="text-gray-600">
                Get help every step of the way as you build your resume with
                expert tips and suggested phrases.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <button className="bg-black text-white px-8 py-4 mt-6 rounded-lg text-lg hover:text-blue-600 transition-colors duration-200">
          <a href="/steps">Get Started Now</a>
        </button>
      </div>
    </div>
  );
};

export default Landing;
