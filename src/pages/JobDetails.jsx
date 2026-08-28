import { useParams, useNavigate } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TCS",
      location: "Chennai",
      type: "Full Time",
      salary: "₹4 - ₹7 LPA",
      skills: "HTML, CSS, JavaScript, React",
      description:
        "We are looking for a passionate Frontend Developer to build modern and responsive web applications.",
    },
    {
      id: 2,
      title: "Python Developer",
      company: "Infosys",
      location: "Chennai",
      type: "Full Time",
      salary: "₹4 - ₹8 LPA",
      skills: "Python, Flask, SQL",
      description:
        "Join our development team and work on Python-based applications and backend systems.",
    },
    {
      id: 3,
      title: "React Developer",
      company: "Accenture",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹5 - ₹9 LPA",
      skills: "React, JavaScript, HTML, CSS",
      description:
        "Work with our team to develop scalable and user-friendly React applications.",
    },
  ];

  const job = jobs.find(
    (job) => job.id === Number(id)
  );

  if (!job) {
    return <h2>Job not found</h2>;
  }

  const handleApply = () => {
    localStorage.setItem(
      "selectedJob",
      JSON.stringify(job)
    );

    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      navigate("/application");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="job-details">

      <h1>{job.title}</h1>

      <h2>{job.company}</h2>

      <p>📍 {job.location}</p>

      <p>💼 {job.type}</p>

      <p>💰 {job.salary}</p>

      <hr />

      <h2>Job Description</h2>

      <p>{job.description}</p>

      <h2>Required Skills</h2>

      <p>{job.skills}</p>

      <button
        className="view-button"
        onClick={handleApply}
      >
        Apply Now
      </button>

    </div>
  );
}

export default JobDetails;