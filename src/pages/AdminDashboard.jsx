import { Link } from "react-router-dom";

function AdminDashboard() {

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TCS",
      location: "Chennai",
    },
    {
      id: 2,
      title: "Python Developer",
      company: "Infosys",
      location: "Chennai",
    },
    {
      id: 3,
      title: "React Developer",
      company: "Accenture",
      location: "Bangalore",
    },
  ];

  return (
    <div className="job-details">

      <h1>
        Admin Dashboard
      </h1>

      <div className="jobs-grid">

        <div className="job-card">
          <h2>3</h2>
          <p>Total Jobs</p>
        </div>

        <div className="job-card">
          <h2>0</h2>
          <p>Total Applicants</p>
        </div>

        <div className="job-card">
          <h2>3</h2>
          <p>Active Jobs</p>
        </div>

      </div>

      <h2>
        Manage Jobs
      </h2>

      <Link
        to="/admin/add-job"
        className="view-button"
      >
        Add New Job
      </Link>

      <div className="jobs-grid">

        {jobs.map((job) => (

          <div
            className="job-card"
            key={job.id}
          >

            <h3>
              {job.title}
            </h3>

            <p>
              🏢 {job.company}
            </p>

            <p>
              📍 {job.location}
            </p>

            <button>
              Edit
            </button>

            <button>
              Delete
            </button>

          </div>

        ))}

      </div>

      <br />

      <Link to="/">
        Back to Home
      </Link>

    </div>
  );
}

export default AdminDashboard;