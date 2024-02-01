import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App-v1.js";
// import App from "./App-v3.js";
import App from "./App-v2.js";
import "./index.css";
import StarRating from "./StarRating.js";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} />
//       {movieRating > 0 && <p>This movie is rated {movieRating}</p>}
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating messages={["Terrible", "bad", "Okay", "Good", "Amazing"]} />
    <StarRating maxRating={10} color="green" />
    <StarRating defaultRating={4} />
     <Test />  */}
  </React.StrictMode>
);
