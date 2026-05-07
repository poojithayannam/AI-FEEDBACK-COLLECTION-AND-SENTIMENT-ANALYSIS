// backend/sentiment.js
const Sentiment = require("sentiment");
const sentiment = new Sentiment();

module.exports = (text) => {
  const result = sentiment.analyze(text);

  let type = "Neutral";
  if (result.score > 0) type = "Positive";
  else if (result.score < 0) type = "Negative";

  return { sentiment: type, score: result.score };
};