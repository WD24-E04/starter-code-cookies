import React, { useState } from "react";

const AuthForm = ({ onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        required
        type="email"
        value={email}
        className="input"
        placeholder="Email"
        autoComplete="new-email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required
        type="password"
        value={password}
        className="input"
        placeholder="Password"
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="button">
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
