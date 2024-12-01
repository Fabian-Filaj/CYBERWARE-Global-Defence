"use client";
import React, { useState } from "react";

const jobData = [
  {
    id: 1,
    title: "Cybersecurity Analyst",
    description:
      "Monitor and analyze security systems to identify vulnerabilities and respond to incidents.",
    salary: 12,
    date: "April, 2024",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Security Engineer",
    description:
      "Implement robust security solutions to protect infrastructure and data from cyber threats.",
    salary: 10,
    date: "April, 2024",
    type: "Hybrid",
  },
  {
    id: 3,
    title: "Penetration Tester",
    description:
      "Simulate attacks on digital systems to identify vulnerabilities and enhance security posture.",
    salary: 8,
    date: "May, 2024",
    type: "On-Site",
  },
  {
    id: 4,
    title: "Incident Response Specialist",
    description:
      "Manage and respond to security incidents, conducting investigations and mitigating threats.",
    salary: 10,
    date: "May, 2024",
    type: "Hybrid",
  },
  {
    id: 5,
    title: "Threat Intelligence Analyst",
    description:
      "Collect security data to stay ahead of emerging cyber threats and strengthen defense strategies.",
    salary: 9,
    date: "June, 2024",
    type: "Full-Time",
  },
  {
    id: 6,
    title: "Information Security Officer",
    description:
      "Lead security initiatives, develop policies, and ensure compliance while safeguarding sensitive data.",
    salary: 7,
    date: "June, 2024",
    type: "On-Site",
  },
];

const Jobs = () => {
  const [filters, setFilters] = useState({
    title: "Job Title",
    salary: "Salary Range",
    date: "Posted Date",
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    filterType: keyof typeof filters
  ) => {
    setFilters({ ...filters, [filterType]: e.target.value });
  };

  const filteredJobs = jobData.filter((job) => {
    const matchesTitle =
      filters.title === "Job Title" || job.title === filters.title;
    const matchesSalary =
      filters.salary === "Salary Range" ||
      (filters.salary === "7-8K" && job.salary >= 7 && job.salary <= 8) ||
      (filters.salary === "9-10K" && job.salary >= 9 && job.salary <= 10) ||
      (filters.salary === "11-12K" && job.salary >= 11 && job.salary <= 12) ||
      (filters.salary === "12-13K" && job.salary >= 12 && job.salary <= 13);
    const matchesDate =
      filters.date === "Posted Date" || job.date === filters.date;

    return matchesTitle && matchesSalary && matchesDate;
  });

  return (
    <div>
      <div className="container py-5">
        <div className="jobsHero text-center">
          <h1>
            <span className="orangeText">Join Our Team</span> of Cybersecurity
            Innovators
          </h1>
          <h4>Protecting the Digital World, One Threat at a Time</h4>
        </div>
        {/* Filters */}
        <div className="jobFilters">
          {/* Job Title */}
          <select
            className="form-select"
            value={filters.title}
            onChange={(e) => handleFilterChange(e, "title")}
          >
            <option>Job Title</option>
            <option>Cybersecurity Analyst</option>
            <option>Security Engineer</option>
            <option>Penetration Tester</option>
            <option>Incident Response Specialist</option>
            <option>Threat Intelligence Analyst</option>
            <option>Information Security Officer</option>
          </select>

          {/* Salary Range */}
          <select
            className="form-select"
            value={filters.salary}
            onChange={(e) => handleFilterChange(e, "salary")}
          >
            <option>Salary Range</option>
            <option>7-8K</option>
            <option>9-10K</option>
            <option>11-12K</option>
            <option>12-13K</option>
          </select>

          {/* Posted Date */}
          <select
            className="form-select"
            value={filters.date}
            onChange={(e) => handleFilterChange(e, "date")}
          >
            <option>Posted Date</option>
            <option>April, 2024</option>
            <option>May, 2024</option>
            <option>June, 2024</option>
          </select>
        </div>

        {/* Job Listing */}
        <div className="jobListing pt-5 text-white">
          <div className="row">
            {filteredJobs.map((job) => (
              <div key={job.id} className="col-md-6 py-3">
                <div className="jobListingCard">
                  <div className="postedDate">{job.date}</div>
                  <h1 className="jobTitle boldText">
                    <span>{job.title.split(" ")[0]}</span>{" "}
                    {job.title.split(" ").slice(1).join(" ")}
                  </h1>
                  <p className="jobDescription">{job.description}</p>
                  <p className="salaryRange">
                    <span className="orangeText">Salary:</span> {job.salary}K
                  </p>
                  {/* Job Type */}
                  <div className="jobType d-flex justify-content-between">
                    {["Full-Time", "On-Site", "Hybrid"].map((type) => (
                      <div
                        key={type}
                        className={type === job.type ? "activeJobType" : ""}
                      >
                        {type}
                      </div>
                    ))}
                  </div>

                  <button className="orangeButton">Apply</button>
                </div>
              </div>
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-5">
                No jobs match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
