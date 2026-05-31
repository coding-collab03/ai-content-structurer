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
    <div style={{ padding: 20 }}>
      <h2>AI Content Structuring Tool</h2>

      <button onClick={structureContent} style={{ marginTop: 10, padding: 10 }}>
        Structure Content (AI)
      </button>

      <textarea
        rows={10}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
        placeholder="Paste raw article, blog, or document here..."
        onChange={(e) => setInput(e.target.value)}
      />

      <h3 style={{ marginTop: 20 }}>Structured Output</h3>

      {output && (
        <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
          {output}
        </pre>
      )}
    </div>
  );
}