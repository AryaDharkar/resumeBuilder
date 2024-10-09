import React from "react";
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

export default function Template2() {
  // Dummy data (you can replace this with props or fetch from an API)
  const data = {
    name: "John Doe",
    title: "Full Stack Developer",
    photo: "/placeholder.svg?height=200&width=200",
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
        technologies: [
          "React",
          "Socket.io",
          "Express",
          "PostgreSQL",
          "Chart.js",
        ],
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

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Header */}
          <header className="flex items-center">
            <img
              src={data.photo}
              alt={data.name}
              className="w-32 h-32 rounded-full mr-8"
            />
            <div>
              <h1 className="text-4xl font-bold">{data.name}</h1>
              <p className="text-xl text-gray-600">{data.title}</p>
            </div>
          </header>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-600" />
                <span>{data.contact.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-600" />
                <span>{data.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                <span>{data.contact.location}</span>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p className="text-gray-700">{data.summary}</p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {data.education.map((edu, index) => (
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
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            {data.experience.map((job, index) => (
              <div key={index} className="mb-6">
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

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            {data.projects.map((project, index) => (
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
          <section>
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            {data.certifications.map((cert, index) => (
              <div key={index} className="mb-2 flex items-center">
                <Award className="w-4 h-4 mr-2 text-gray-600" />
                <span>
                  {cert.name} - {cert.issuer} ({cert.date})
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
