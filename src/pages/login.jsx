import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Get registered user
    const savedUser = localStorage.getItem("jobportalUser");

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    // Check email and password
    if (
      email !== user.email ||
      password !== user.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    // Go directly to application page
    navigate("/application");
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Login</h1>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;