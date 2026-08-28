import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError(
        "Please fill in all fields."
      );
      return;
    }

    if (
      formData.password.length < 6
    ) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem(
      "jobportalUser",
      JSON.stringify(user)
    );

    alert(
      "Registration successful!"
    );

    navigate("/login");
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>
          Create Account
        </h1>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
        >

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;