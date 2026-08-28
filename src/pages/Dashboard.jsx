import { Link } from "react-router-dom";

function Dashboard() {
  const application = JSON.parse(
    localStorage.getItem("jobApplication")
  );

  return (
    <div className="job-details">

      <h1>My Dashboard</h1>

      <h2>My Applications</h2>

      {!application ? (
        <p>
          You haven't applied for any jobs yet.
        </p>
      ) : (
        <div className="job-card">

          <h3>
            {application.job.title}
          </h3>

          <p>
            🏢 {application.job.company}
          </p>

          <p>
            📍 {application.job.location}
          </p>

          <p>
            📌 Status: {application.status}
          </p>

        </div>
      )}

      <Link
        to="/"
        className="view-button"
      >
        Back to Jobs
      </Link>

    </div>
  );
}

export default Dashboard;