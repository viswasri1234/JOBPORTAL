import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Application from "./pages/Application";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";


function Home({ isLoggedIn }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TCS",
      location: "Chennai",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Python Developer",
      company: "Infosys",
      location: "Chennai",
      type: "Full Time",
    },
    {
      id: 3,
      title: "React Developer",
      company: "Accenture",
      location: "Bangalore",
      type: "Full Time",
    },
  ];


  const filteredJobs = jobs.filter(
    (job) =>
      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      job.location
        .toLowerCase()
        .includes(location.toLowerCase())
  );


  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          JOBPORTAL
        </div>


        <ul className="nav-links">

          <li>
            <Link to="/">
              Home
            </Link>
          </li>


          <li>
            Jobs
          </li>


          <li>
            Companies
          </li>


          {isLoggedIn ? (
            <>

              <li>
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </li>


              <li>
                <Link to="/logout">
                  Logout
                </Link>
              </li>

            </>
          ) : (
            <>

              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>


              <li>
                <Link to="/register">
                  Register
                </Link>
              </li>

<li>
  <Link to="/admin/login">
    Admin
  </Link>
</li>
            </>
          )}

        </ul>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <h1>
          Find Your Dream Job
        </h1>


        <p>
          Discover thousands of opportunities
          and start your career.
        </p>


        <div className="search-box">

          <input
            type="text"
            placeholder="Job title or keyword"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />


          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          />


          <button>
            Search Jobs
          </button>

        </div>

      </section>


      {/* ================= JOBS ================= */}

      <section className="jobs-section">

        <h2>
          Latest Jobs
        </h2>


        <div className="jobs-grid">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (

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


                <p>
                  💼 {job.type}
                </p>


                <Link
                  to={`/job/${job.id}`}
                  className="view-button"
                >
                  View Job
                </Link>

              </div>

            ))

          ) : (

            <p>
              No jobs found.
            </p>

          )}

        </div>

      </section>

    </div>
  );
}


function App() {

  {/* ================= USER LOGIN STATE ================= */}

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );


  {/* ================= ADMIN LOGIN STATE ================= */}

  const [isAdminLoggedIn, setIsAdminLoggedIn] =
    useState(
      localStorage.getItem("isAdminLoggedIn") === "true"
    );


  return (
    <BrowserRouter>

      <Routes>

        {/* ================= USER HOME ================= */}

        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
            />
          }
        />


        {/* ================= JOB DETAILS ================= */}

        <Route
          path="/job/:id"
          element={
            <JobDetails />
          }
        />


        {/* ================= USER LOGIN ================= */}

        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />


        {/* ================= REGISTER ================= */}

        <Route
          path="/register"
          element={
            <Register />
          }
        />


        {/* ================= APPLICATION ================= */}

        <Route
          path="/application"
          element={
            <Application />
          }
        />


        {/* ================= USER DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />


        {/* ================= USER LOGOUT ================= */}

        <Route
          path="/logout"
          element={
            <Logout
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />


        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/admin/login"
          element={
            <AdminLogin
              setIsAdminLoggedIn={
                setIsAdminLoggedIn
              }
            />
          }
        />


        {/* ================= ADMIN DASHBOARD ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminDashboard />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;