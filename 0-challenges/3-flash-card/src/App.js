import { useState } from "react";

const questions = [
  { id: 1, question: "What language is React based on?", answer: "JavaScrit" },
  {
    id: 2,
    question: "What the building block of react apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "How to pass data from parent to child components?",
    answer: "React props",
  },
];

export default function App() {
  const [id, setId] = useState(null);
  return (
    <div className="container">
      {questions.map((q) => (
        <div
          className={`card ${q.id !== id ? "" : "flip"}`}
          key={q.id}
          onClick={() => setId(q.id)}
        >
          {q.id !== id ? (
            <div className="face front">{q.question}</div>
          ) : (
            <div className="face back">{q.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
