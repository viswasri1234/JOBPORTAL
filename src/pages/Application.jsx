import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Application() {
  const navigate = useNavigate();

  const selectedJob = JSON.parse(
    localStorage.getItem("selectedJob")
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    coverLetter: "",
    resume: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.education ||
      !formData.skills ||
      !formData.resume
    ) {
      setError(
        "Please fill in all required fields."
      );
      return;
    }

    const application = {
      job: selectedJob,
      applicant: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
        experience: formData.experience,
        skills: formData.skills,
        coverLetter: formData.coverLetter,
        resume: formData.resume.name,
      },
      status: "Applied",
    };

    localStorage.setItem(
      "jobApplication",
      JSON.stringify(application)
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Job Application</h1>

        {selectedJob && (
          <div>
            <h2>{selectedJob.title}</h2>
            <p>{selectedJob.company}</p>
            <p>📍 {selectedJob.location}</p>
          </div>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <label>Full Name *</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email *</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone Number *</label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Education *</label>

          <input
            type="text"
            name="education"
            placeholder="Example: B.E Computer Science"
            value={formData.education}
            onChange={handleChange}
          />

          <label>Experience</label>

          <input
            type="text"
            name="experience"
            placeholder="Example: Fresher"
            value={formData.experience}
            onChange={handleChange}
          />

          <label>Skills *</label>

          <input
            type="text"
            name="skills"
            placeholder="Example: React, JavaScript, Python"
            value={formData.skills}
            onChange={handleChange}
          />

          <label>Cover Letter</label>

          <textarea
            name="coverLetter"
            placeholder="Write a short cover letter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
          />

          <label>Upload Resume *</label>

          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />

          <button type="submit">
            Submit Application
          </button>

        </form>

      </div>

    </div>
  );
}

export default Application;