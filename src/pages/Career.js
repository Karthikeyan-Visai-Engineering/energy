import React from "react";

const jobListings = [
  {
    title: "Structural Design Engineer",
    location: "Chennai, India",
    type: "Full-Time",
    description:
      "Design and analyze structural systems for buildings and infrastructure. Knowledge of STAAD.Pro and AutoCAD required.",
  },
  {
    title: "MEP Engineer",
    location: "Remote / Hybrid",
    type: "Contract",
    description:
      "Design MEP systems for commercial and industrial buildings. Proficiency in HVAC, plumbing, and fire protection design is preferred.",
  },
  {
    title: "Site Supervisor",
    location: "Coimbatore, India",
    type: "Full-Time",
    description:
      "Manage on-site activities and ensure safety and quality compliance. Previous construction experience is a must.",
  },
];

const Career = () => {
  return (
    <div className="bg-[#DBD8E3]  text-gray-800 py-40 mt-0 px-4 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-500">
          Join Our Team
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          At Visai Engineering, we're building a team of passionate individuals
          committed to innovation and sustainability. If you're driven and
          talented, we want to work with you.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              {job.title}
            </h2>
            <p className="text-sm text-gray-600 mb-1">{job.location}</p>
            <p className="text-sm text-gray-600 mb-4">{job.type}</p>
            <p className="text-base text-gray-700 mb-4">{job.description}</p>
            <a
              href="mailto:careers@visaiengineering.com"
              className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Didn’t find a suitable role?
        </h3>
        <p className="mb-6">
          We're always open to talented professionals. Send us your resume at{" "}
          <a
            href="mailto:careers@visaiengineering.com"
            className="text-yellow-600 font-medium hover:underline"
          >
            careers@visaiengineering.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Career;
