import React, { useState } from "react";
import axios from "axios";

function Submit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async () => {
    if (!text) {
      alert("Please enter your feedback!");
      return;
    }
    await axios.post("http://localhost:5000/feedback", {
      name,
      text,
      rating,
    });
    alert("Feedback Submitted Successfully! ✅");
    setName("");
    setEmail("");
    setText("");
    setRating(5);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>We value your input</h2>
        <p style={styles.subtitle}>
          Your feedback helps us improve and deliver better experiences.
        </p>

        <div style={styles.row}>
          <div style={styles.half}>
            <label style={styles.label}>Name (Optional)</label>
            <input
              style={styles.input}
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={styles.half}>
            <label style={styles.label}>Email (Optional)</label>
            <input
              style={styles.input}
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <label style={styles.label}>Rating (1-5)</label>
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ width: "100%", marginBottom: "8px" }}
        />
        <div style={styles.ratingRow}>
          <span>1 (Poor)</span>
          <span>3 (Fair)</span>
          <span>5 (Excellent)</span>
        </div>
        <p style={styles.ratingValue}>{rating} / 5</p>

        <label style={styles.label}>Your Feedback *</label>
        <textarea
          style={styles.textarea}
          placeholder="Tell us what you liked or what we can do better..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleSubmit} style={styles.btn}>
          🚀 Complete AI Analytics
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "40px",
    width: "600px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    color: "#333",
    marginBottom: "8px",
  },
  subtitle: {
    textAlign: "center",
    color: "#888",
    marginBottom: "30px",
  },
  row: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
  },
  half: { flex: 1 },
  label: {
    display: "block",
    color: "#555",
    fontWeight: "600",
    marginBottom: "6px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  ratingRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#888",
  },
  ratingValue: {
    textAlign: "center",
    color: "#6c5ce7",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "10px 0",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    height: "120px",
    marginBottom: "20px",
    resize: "vertical",
  },
  btn: {
    width: "100%",
    padding: "16px",
    background: "#6c5ce7",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Submit;