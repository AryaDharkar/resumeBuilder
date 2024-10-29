import React from "react";
import landingImage from "./resImgFinal.jpg";
import "../App.css";
import SubjectIcon from "@mui/icons-material/Subject";
const Landing = () => {
  return (
    <div>
      {/* Main Hero Section */}
      <div className="justify-center flex flex-col md:flex-row w-full px-7 md:px-10 mx-auto pt-10 lg:pb-10 lg:w-full lg:pt-10">
        <div className="landing-right flex flex-col items-center md:items-center p-6 md:p-6 w-full md:w-1/2 lg:w-3/4">
          <h1 className="font-opensans 2xl:text-7xl xl:text-5xl lg:text-5xl text-4xl md:text-4xl text-black text-center">
            Free <span className="resume-word-gradient">Resume</span> Builder.
            Create your free resume online.
          </h1>

          {/* <SubjectIcon color="action" sx={{ fontSize: 150 }} /> */}
          {/* <h1 className="text-2xl mt-6 md:text-2xl text-black font-serif mb-6 text-center md:text-left">
            Unlimited Resumes
          </h1>
          <h1 className="text-2xl md:text-2xl text-black font-serif mb-6 text-center md:text-left">
            Multiple Templates
          </h1>
          <h1 className="text-2xl md:text-2xl text-black font-serif mb-6 text-center md:text-left">
            Gen AI Support
          </h1> */}
        </div>
      </div>
      {/* Feature Section */}
      <div className="feature-section w-full flex flex-col items-center md:p-10 lg:p-0">
        {/* Feature 1 */}
        <p className="text-lg 2xl:text-2xl md:text-xl text-gray-800 text-center w-3/4 md:w-full max-w-7xl">
          Our online resume builder offers a quick and easy way to create your
          professional resume from multiple design templates. Create a resume
          using our AI resume builder feature, plus take advantage of expert
          suggestions and customizable modern and professional resume templates.
          All the users have complete descretion to customize their resume as
          per their choice and no charges are applied for the same.
        </p>
        <button className="buildMyResume-button bg-blue-600 font-semibold mt-10 text-sm">
          <a href="/steps">Build Now</a>
        </button>
        <div className="w-3/4">
          <img
            src={landingImage}
            alt="image"
            className="h-3/4 object-cover w-full rounded-lg hover:scale-105 hover:shadow-stone-400 hover:shadow-lg my-10 transition-transform duration-400 "
          />
        </div>

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
