import { useState } from "react";

const mockAI = (sentences) => {
  return sentences
    .slice(0, 5)
    .map((s) => "• " + s)
    .join("\n");
};

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const structureContent = () => {
    if (!input.trim()) {
      setOutput("Please enter some content first.");
      return;
    }

    const cleanSentences = input
      .replace(/\n/g, " ")
      .split(".")
      .map((s) => s.trim())
      .filter((s) => s.length > 10);

    const formatted = `
TITLE: Structured Content

SUMMARY:
${cleanSentences.slice(0, 2).join(". ")}...

KEY POINTS:
${mockAI(cleanSentences)}

FULL CONTENT:
${input}
    `;

    setOutput(formatted);
  };

  return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#f4f7fb",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <div
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <h1
        style={{
          marginBottom: "10px",
          color: "#222",
        }}
      >
        AI Content Structuring Tool
      </h1>

      <p
        style={{
          color: "#555",
          marginBottom: "20px",
          lineHeight: "1.6",
        }}
      >
        Paste unstructured content below to automatically generate a summary,
        key points, and a cleaner structured format.
      </p>

      <textarea
        rows={10}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste raw article, blog, or document here..."
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          resize: "vertical",
          fontSize: "15px",
          lineHeight: "1.5",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={structureContent}
        style={{
          marginTop: "15px",
          padding: "12px 18px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#2563eb",
          color: "white",
          fontSize: "15px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Structure Content
      </button>

      {output && (
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#f9fafb",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ marginBottom: "15px", color: "#222" }}>
            Structured Output
          </h2>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.7",
              fontSize: "14px",
              color: "#333",
            }}
          >
            {output}
          </pre>
        </div>
      )}
    </div>
  </div>
);
}