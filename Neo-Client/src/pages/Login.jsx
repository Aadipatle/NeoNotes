import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN);

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await login({ variables: { data: form } });
    localStorage.setItem("token", res.data.login.token);
    window.location.href = "/";
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit" >Login</button>
          <p>
            Create a new account <Link to="/signup">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

// <div className="form-wrapper">
//   <div className="form-container">
//     <h2>Neo CVs Login</h2>
//     {error && <div className="form-error">{error}</div>}

//     <form onSubmit={handleSubmit}>
//       <label>Email *</label>
//       <input
//         name="email"
//         placeholder="email"
//         type="text"
//         value={form.email}
//         onChange={handleChange}
//         required
//       />

//       <label>Password *</label>
//       <input
//         name="password"
//         placeholder="password"
//         type={showPassword ? "text" : "password"}
//         value={form.password}
//         onChange={handleChange}
//         required
//       />

//       <div className="show-password">
//         <input
//           type="checkbox"
//           id="showPassword"
//           checked={showPassword}
//           onChange={() => setShowPassword(!showPassword)}
//         />
//         <label htmlFor="showPassword">Show Password</label>
//       </div>

//       <button type="submit">Login</button>
//     </form>

//     <div style={{ textAlign: "center", padding: "5px" }}>or</div>

//     <div className="google-login">
//       <GoogleLogin
//         onSuccess={handleGoogleSuccess}
//         onError={() => setError("Google login failed.")}
//       />
//     </div>

//     <p>
//       Create a new account <Link to="/register">Register</Link>
//     </p>
//   </div>
// </div>;
