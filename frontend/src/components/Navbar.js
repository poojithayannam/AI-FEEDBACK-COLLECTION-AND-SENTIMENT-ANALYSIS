import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        💬 AI Feedback
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>🏠 Home</Link>
        <Link to="/about" style={styles.link}>ℹ️ About</Link>
        <Link to="/submit" style={styles.link}>📝 Submit Feedback</Link>
        <Link to="/dashboard" style={styles.link}>📊 Dashboard</Link>
        <Link to="/login" style={styles.link}>🔐 Admin Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#6c5ce7",
  },
  links: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },
  link: {
    color: "#555",
    fontWeight: "500",
    fontSize: "14px",
    textDecoration: "none",
  },
};

export default Navbar;