import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.left}>
          <div style={styles.tag}>AI-Powered Mental Wellness</div>
          <h1 style={styles.title}>Smart Feedback</h1>
          <h1 style={styles.titlePurple}>Intelligence</h1>
          <p style={styles.desc}>
            Collect feedback from your users and instantly understand their
            sentiment with our AI-powered analysis tool. Discover insights and
            make data-driven decisions.
          </p>
          <div style={styles.buttons}>
            <button onClick={() => navigate("/submit")} style={styles.btnPrimary}>
              Submit Feedback →
            </button>
            <button onClick={() => navigate("/dashboard")} style={styles.btnSecondary}>
              View Dashboard
            </button>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.featureCard}>
            ❤️ Safe & Confidential
          </div>
          <div style={styles.featureCard}>
            ☀️ 24/7 Available
          </div>
          <div style={styles.featureCard}>
            💙 Empathetic AI
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "20px",
    padding: "60px",
    width: "100%",
  },
  left: {
    flex: 1,
    color: "white",
  },
  tag: {
    background: "rgba(255,255,255,0.3)",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    display: "inline-block",
    marginBottom: "20px",
    color: "white",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#1a1a2e",
    lineHeight: 1.2,
  },
  titlePurple: {
    fontSize: "48px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #6c5ce7, #e84393)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
  },
  desc: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "30px",
    maxWidth: "500px",
    lineHeight: 1.6,
  },
  buttons: {
    display: "flex",
    gap: "15px",
  },
  btnPrimary: {
    padding: "14px 28px",
    background: "#6c5ce7",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  btnSecondary: {
    padding: "14px 28px",
    background: "white",
    color: "#333",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginLeft: "40px",
  },
  featureCard: {
    background: "white",
    padding: "20px 30px",
    borderRadius: "15px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    minWidth: "200px",
  },
};

   export default About;
