<<<<<<< HEAD
// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
=======
// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
>>>>>>> 2e8f9bf525a53d12091a731fe9033120337c8b98
