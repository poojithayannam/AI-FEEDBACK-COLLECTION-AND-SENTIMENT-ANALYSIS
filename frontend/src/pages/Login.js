import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "admin") {
      navigate("/dashboard");
    } else {
      alert("Invalid login!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconBox}>🔒</div>
        <h2 style={styles.title}>Admin Login</h2>
        <p style={styles.subtitle}>Restricted access. Administrators only.</p>

        <div style={styles.form}>
          <label style={styles.label}>Username</label>
          <input
            style={styles.input}
            placeholder="Enter admin username"
            onChange={(e) => setUser(e.target.value)}
          />

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter admin password"
            onChange={(e) => setPass(e.target.value)}
          />

          <button onClick={handleLogin} style={styles.btn}>
            → Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    padding: "20px",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "40px",
    width: "420px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  iconBox: {
    background: "#6c5ce7",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    margin: "0 auto 20px",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "8px",
  },
  subtitle: {
    textAlign: "center",
    color: "#888",
    marginBottom: "30px",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    color: "#555",
    fontWeight: "600",
    fontSize: "14px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
  },
  btn: {
    padding: "14px",
    background: "#6c5ce7",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Login;