import { useState } from "react";

const DrugInteractionChecker = () => {
  const [drug1, setDrug1] = useState("");
  const [drug2, setDrug2] = useState("");
  const [result, setResult] = useState("");

  // 🔹 Drug interaction database (Hash Map)
  const drugInteractions = {
    "aspirin-ibuprofen": "Increased risk of bleeding.",
    "warfarin-aspirin": "High risk of internal bleeding.",
    "acetaminophen-alcohol": "Liver damage risk.",
  };

  // 🔹 Function to check interaction
  const checkInteraction = () => {
    if (!drug1 || !drug2) {
      setResult("Please enter two drug names.");
      return;
    }

    // Normalize input (lowercase, remove spaces)
    const key1 = `${drug1.trim().toLowerCase()}-${drug2.trim().toLowerCase()}`;
    const key2 = `${drug2.trim().toLowerCase()}-${drug1.trim().toLowerCase()}`;

    // Check if interaction exists in hash map
    setResult(drugInteractions[key1] || drugInteractions[key2] || "No known interaction.");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>💊 Drug Interaction Checker</h2>
      <input
        type="text"
        placeholder="Enter first drug"
        value={drug1}
        onChange={(e) => setDrug1(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Enter second drug"
        value={drug2}
        onChange={(e) => setDrug2(e.target.value)}
        style={styles.input}
      />
      <button onClick={checkInteraction} style={styles.button}>Check Interaction</button>
      <p style={styles.result}>{result}</p>
    </div>
  );
};

// 🔹 CSS-in-JS styling
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "auto",
  },
  heading: {
    color: "#333",
    fontSize: "22px",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    margin: "10px",
    width: "80%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  result: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#444",
  },
};

export default DrugInteractionChecker;
