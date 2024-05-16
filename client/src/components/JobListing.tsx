import React from "react";

type TJobProps = {
  job: {
    id: string;
    title: string;
    type: string;
    description: string;
    salary: string;
    location: string;
    // company: {
    //   "name": "Port Solutions INC",
    //   "description": "Port Solutions is a leading technology company specializing in softwaredevelopment and digital marketing. We are committed to providing our clients with cutting-edgesolutions and our employees with a supportive and rewarding work environment.",
    //   "contactEmail": "contact@ipsumlorem.com",
    //   "contactPhone": "555-555-5555"
    // }
  };
};

const JobListing: React.FC<TJobProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{job.description}</div>

        <button className="text-indigo-500 mb-5 hover:text-indigo-600"></button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">{job.location}</div>
          <a
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            href={`/jobs/${job.id}`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
