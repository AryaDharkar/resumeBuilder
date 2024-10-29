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

export default function Template2({ data }) {
  // Dummy data (you can replace this with props or fetch from an API)
  // const data = {
  //   "name": "Mithil Salunkhe",
  //   "title": "Linux Engineer",
  //   "photo": "",
  //   "contact": {
  //     "email": "mithilsalunke@gmail.com",
  //     "phone": "9653141218",
  //     "location": "Mulund, Maharashtra"
  //   },
  //   "summary": "Senior Linux Engineer with expertise in chipset driver development and system optimization, backed by Red Hat certification.",
  //   "experience": [
  //     {
  //       "title": "Linux Engineer",
  //       "company": "AMD",
  //       "date": "2024-01 - 2024-11",
  //       "responsibilities": [
  //         "Designed and developed optimized AMD chipset drivers, ensuring compatibility with various GPU configurations.",
  //         "Enhanced Linux support for AMD CPUs, significantly improving overall system performance and reliability."
  //       ]
  //     },
  //     {
  //       "title": "Linux Engineer",
  //       "company": "lksjdf",
  //       "date": "2024-01 - 2024-02",
  //       "responsibilities": [
  //         "",
  //         ""
  //       ]
  //     }
  //   ],
  //   "educationDetails": [
  //     {
  //       "degree": "BTech",
  //       "institution": "Terna",
  //       "year": "2026"
  //     }
  //   ],
  //   "skills": [
  //     "C",
  //     "C++",
  //     "Bash",
  //     "Linux"
  //   ],
  //   "projects": [
  //     {
  //       "projectName": "Linux From Scratch",
  //       "description": "Built an LFS system following the latest guide which has multiple package manager support like apt, pacman, dnf",
  //       "technologies": [
  //         "Linux",
  //         "Bash"
  //       ],
  //       "startDate": "2023-01",
  //       "endDate": "2023-12"
  //     }
  //   ],
  //   "certifications": [
  //     {
  //       "name": "Red Hat® Certified System Administrator (RHCSA®)",
  //       "issuer": "Red Hat",
  //       "date": "2024-10"
  //     }
  //   ]
  // };

  return (
    <div className="text-sm">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Header */}
          <header className="flex items-center">
            {/* <img
              src={data.photo}
              alt={data.name}
              className="w-32 h-32 rounded-full mr-8"
            /> */}
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

          {/* educationDetails */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {data.educationDetails.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>{edu.institution}</span>
                  <Calendar className="w-4 h-4 ml-4 mr-2" />
                  <span>{edu.year}</span>
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
