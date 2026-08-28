import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setIsLoggedIn }) {

  const navigate = useNavigate();

  useEffect(() => {

    // Remove login status
    localStorage.removeItem("isLoggedIn");

    // Update React state
    setIsLoggedIn(false);

  }, [setIsLoggedIn]);


  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>
          Logged Out
        </h1>

        <p>
          You have been successfully logged out.
        </p>

        <button
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>

      </div>

    </div>
  );
}

export default Logout;