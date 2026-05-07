import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart, Pie, Cell, Legend,
  BarChart, Bar, XAxis, YAxis, Tooltip
} from "recharts";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/feedback").then((res) => {
      setData(res.data);
    });
  }, []);

  const summary = {
    Positive: data.filter((d) => d.sentiment === "Positive").length,
    Negative: data.filter((d) => d.sentiment === "Negative").length,
    Neutral: data.filter((d) => d.sentiment === "Neutral").length,
  };

  const chartData = [
    { name: "Positive", value: summary.Positive },
    { name: "Negative", value: summary.Negative },
    { name: "Neutral", value: summary.Neutral },
  ];

  const COLORS = ["#00b894", "#e17055", "#b2bec3"];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Feedback Dashboard</h2>
        <button onClick={() => window.location.reload()} style={styles.refresh}>
          🔄 Refresh
        </button>
      </div>

      <div style={styles.charts}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Sentiment Distribution</h3>
          <PieChart width={300} height={280}>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>

        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Feedback Volume</h3>
          <BarChart width={380} height={280} data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>

      <div style={styles.listCard}>
        {data.map((item) => (
          <div key={item.id} style={styles.feedbackItem}>
            <div>
              <strong>{item.name || "Anonymous"}</strong>
              <span style={{
                ...styles.badge,
                background: item.sentiment === "Positive" ? "#00b894" :
                  item.sentiment === "Negative" ? "#e17055" : "#b2bec3"
              }}>
                {item.sentiment}
              </span>
              <p style={styles.feedbackText}>{item.text}</p>
            </div>
            <div style={styles.score}>
              Score: {item.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "30px" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: { color: "white", fontSize: "28px" },
  refresh: {
    padding: "10px 20px",
    background: "rgba(255,255,255,0.2)",
    color: "white",
    border: "1px solid white",
    borderRadius: "8px",
    cursor: "pointer",
  },
  charts: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  chartCard: {
    background: "white",
    borderRadius: "15px",
    padding: "20px",
    flex: 1,
  },
  chartTitle: {
    color: "#333",
    marginBottom: "15px",
  },
  listCard: {
    background: "white",
    borderRadius: "15px",
    padding: "20px",
  },
  feedbackItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },
  badge: {
    color: "white",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    marginLeft: "10px",
  },
  feedbackText: {
    color: "#666",
    marginTop: "5px",
  },
  score: {
    color: "#888",
    fontSize: "14px",
  },
};

export default Dashboard;