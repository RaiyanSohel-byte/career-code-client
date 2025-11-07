import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecured from "../hooks/useAxiosSecured";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";

const ApplicationForm = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [applications, setApplications] = useState([]);
  const axiosSecured = useAxiosSecured();
  useEffect(() => {
    axiosSecured.get(`/jobs/${id}`).then((data) => {
      setJob(data.data);
    });
    axiosSecured.get("/applications").then((data) => {
      setApplications(data.data);
    });
  }, [axiosSecured, id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const careerSummary = e.target.careerSummary.value;
    const skills = e.target.skills.value;
    const experience = e.target.experience.value;
    const whyHire = e.target.whyHire.value;
    const min_salary = e.target.min_salary.value;
    const max_salary = e.target.max_salary.value;
    const portfolio_link = e.target.portfolio_link.value;
    const resume_link = e.target.resume_link.value;
    const linkedin_link = e.target.linkedin_link.value;

    const availableApplication = applications.find(
      (app) => app.jobInfo.job_id === job._id
    );
    const newApplication = {
      userInfo: {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      },
      jobInfo: {
        job_id: job._id,
        job_title: job.title,
        job_type: job.job_type,
        category: job.category,
        location: job.location,
        deadline: job.deadline,
      },
      applicationInfo: {
        career_summary: careerSummary,
        skills: skills,
        experience: experience,
        why_hire: whyHire,
        min_salary: min_salary,
        max_salary: max_salary,
        portfolio_link: portfolio_link,
        resume_link: resume_link,
        linkedin_link: linkedin_link,
      },
      submitted_At: new Date().toLocaleDateString(),
      status: "pending",
    };
    if (availableApplication) {
      alert("Already Applied for this job!");
      e.target.reset();
      return;
    }
    axiosSecured
      .post("/applications", newApplication)
      .then((data) => {
        console.log(data.data);
        alert("Application Submitted");
        setApplications([...applications, newApplication]);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 flex justify-center items-start">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Job Application Form
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill out the form carefully and submit your application.
        </p>

        <form className="space-y-5" onSubmit={(e) => handleFormSubmit(e)}>
          {/* Career Summary */}
          <div>
            <label className="label font-medium">Career Summary</label>
            <textarea
              name="careerSummary"
              className="textarea textarea-bordered w-full"
              rows={3}
              placeholder="Summarize your professional experience..."
              required
            ></textarea>
          </div>

          {/* Skills */}
          <div>
            <label className="label font-medium">Skills</label>
            <input
              type="text"
              name="skills"
              className="input input-bordered w-full"
              placeholder="React, Node.js, Tailwind CSS"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="label font-medium">Experience</label>
            <input
              type="text"
              name="experience"
              className="input input-bordered w-full"
              placeholder="2 years as Frontend Developer"
              required
            />
          </div>

          {/* Why Hire You */}
          <div>
            <label className="label font-medium">Why should we hire you?</label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows={3}
              name="whyHire"
              placeholder="Explain why you’re the right fit..."
              required
            ></textarea>
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label font-medium">Minimum Salary</label>
              <input
                type="number"
                name="min_salary"
                className="input input-bordered w-full"
                placeholder="e.g. 30000"
                required
              />
            </div>
            <div>
              <label className="label font-medium">Maximum Salary</label>
              <input
                type="number"
                name="max_salary"
                className="input input-bordered w-full"
                placeholder="e.g. 50000"
                required
              />
            </div>
          </div>

          {/* Portfolio, LinkedIn, Resume */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label font-medium">Portfolio Link</label>
              <input
                type="url"
                name="portfolio_link"
                className="input input-bordered w-full"
                placeholder="https://portfolio.com"
                required
              />
            </div>
            <div>
              <label className="label font-medium">LinkedIn</label>
              <input
                type="url"
                name="linkedin_link"
                className="input input-bordered w-full"
                placeholder="https://linkedin.com/in/username"
                required
              />
            </div>
            <div>
              <label className="label font-medium">Resume Link</label>
              <input
                type="url"
                name="resume_link"
                className="input input-bordered w-full"
                placeholder="https://drive.google.com/resume"
                required
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="form-control mt-6 space-y-3">
            <label className="label cursor-pointer justify-start space-x-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                required
              />
              <span className="mr-3">Ready to work at preferred location</span>
            </label>

            <label className="label cursor-pointer justify-start space-x-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                required
              />
              <span>My skills align with the job requirements</span>
            </label>

            <label className="label cursor-pointer justify-start space-x-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                required
              />
              <span>I can handle all listed job responsibilities</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="btn btn-primary w-full">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
