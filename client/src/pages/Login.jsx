import "../styles/login.css";
import AuthForm from "../components/AuthForm.jsx";

export default function Login() {
  const handleLogin = async () => {};

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>
        <AuthForm onSubmit={handleLogin} buttonText="Login" />
        <div className="link">Forgot Password?</div>
      </div>
    </div>
  );
}
