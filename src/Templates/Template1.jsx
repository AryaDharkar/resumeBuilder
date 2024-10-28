import React from "react";
import PropTypes from "prop-types";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Code,
} from "lucide-react";

const ResumeTemplate = ({
  name,
  title,
  photo,
  contact,
  summary,
  experience,
  education,
  skills,
  projects,
  // certifications,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      {/* Header */}
      <header className="flex items-center mb-8">
        <img src={photo} alt={name} className="w-32 h-32 rounded-full mr-8" />
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-xl text-gray-600">{title}</p>
        </div>
      </header>

      {/* Contact Information */}
      <section className="mb-8">
        <div className="flex flex-wrap">
          <div className="flex items-center mr-4 mb-2">
            <Mail className="w-5 h-5 mr-2 text-gray-600" />
            <span>{contact.email}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <Phone className="w-5 h-5 mr-2 text-gray-600" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            <span>{contact.location}</span>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-700">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{job.company}</span>
              <Calendar className="w-4 h-4 ml-4 mr-2" />
              <span>{job.date}</span>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>{edu.school}</span>
              <Calendar className="w-4 h-4 ml-4 mr-2" />
              <span>{edu.date}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
            <div className="flex items-center text-gray-600 mt-2">
              <Code className="w-4 h-4 mr-2" />
              <span>{project.technologies.join(", ")}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-2 flex items-center">
            <Award className="w-4 h-4 mr-2 text-gray-600" />
            <span>
              {cert.name} - {cert.issuer} ({cert.date})
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

// Dummy data for testing
const dummyData = {
  name: "John Doe",
  title: "Full Stack Developer",
  photo: "/placeholder.svg?height=128&width=128",
  contact: {
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
  },
  summary:
    "Experienced Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications. Skilled in JavaScript, React, Node.js, and database management.",
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      date: "2019 - Present",
      responsibilities: [
        "Lead development of complex web applications using React and Node.js",
        "Implement and maintain RESTful APIs and microservices",
        "Mentor junior developers and conduct code reviews",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions Co.",
      date: "2016 - 2019",
      responsibilities: [
        "Developed and maintained multiple client websites",
        "Collaborated with design team to implement responsive UI/UX",
        "Optimized database queries and improved application performance",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      date: "2012 - 2016",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    "TypeScript",
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description:
        "Developed a full-featured e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    },
    {
      name: "Task Management App",
      description:
        "Created a real-time task management application with collaborative features and data visualization.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Chart.js"],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2021",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2020",
    },
  ],
};

ResumeTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  summary: PropTypes.string.isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      issuer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Component to render the resume template with dummy data
const Template1 = () => {
  return <ResumeTemplate {...dummyData} />;
};

export default Template1;
