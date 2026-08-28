import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin({ setIsAdminLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Admin login credentials
    const adminEmail = "admin@jobportal.com";
    const adminPassword = "admin123";

    if (
      email === adminEmail &&
      password === adminPassword
    ) {
      localStorage.setItem(
        "isAdminLoggedIn",
        "true"
      );

      setIsAdminLoggedIn(true);

      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Admin Login</h1>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Admin Login
          </button>

        </form>

        <p>
          <Link to="/">
            Back to Home
          </Link>
        </p>

      </div>

    </div>
  );
}

export default AdminLogin;