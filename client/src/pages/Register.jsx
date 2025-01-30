import React from "react";
import AuthForm from "../components/AuthForm";
import "../styles/register.css";

export default function Register() {
  const handleRegister = async () => {};

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Register</h2>
        <AuthForm onSubmit={handleRegister} buttonText="Register" />
        <div className="link">Forgot Password?</div>
      </div>
    </div>
  );
}
