import { useMutation } from "@apollo/client";
import { SIGNUP } from "../graphql/mutations";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
  });

  const [signup] = useMutation(SIGNUP);

  const handleSignup = async (e) => {
    e.preventDefault()
    const res = await signup({ variables: { data: form } });
    localStorage.setItem("token", res.data.signup.token);
    window.location.href = "/";
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
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
          <input
            placeholder="Age"
            type="number"
            onChange={(e) => setForm({ ...form, age: +e.target.value })}
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}
