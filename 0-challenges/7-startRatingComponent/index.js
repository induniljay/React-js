import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.js";
// import "./index.css";

import StarRating from "./StarRating.js";

function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setRating} />
      <p>This movie was rated {rating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating messages={["Terrible", "bad", "Okay", "Good", "Amazing"]} />

    <Test />
  </React.StrictMode>
);
