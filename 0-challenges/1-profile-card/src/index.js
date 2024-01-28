import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  { name: "HTML+CSS 💪", color: "royalblue" },
  { name: "JavaScript 💪", color: "yellow" },
  { name: "Web Design 💪", color: "lightgreen" },
  { name: "git and Github 👍", color: "red" },
  { name: "React 💪", color: "lightblue" },
  { name: "Svelte 👶", color: "orangered" },
];

function App() {
  return (
    <div className="container">
      <Image photoName="./profile.jpeg" name="profile-card-image" />
      <ProfileData
        name="Jonas Schemedtmann"
        description="Full-Stack web developer and teacher at Udemy. when not coding or preparing a course,I like to play board gaames , to cook (and eat), or just enjoy the Protuguess sun at the beach."
      />
      <Tags skills={skills} />
    </div>
  );
}

function Image(props) {
  return (
    <figure className="photoContainer">
      <img src={props.photoName} alt={props.name} />
    </figure>
  );
}

function ProfileData(props) {
  return (
    <article className="profileContainer">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </article>
  );
}

function Tags(props) {
  return (
    <div className="tagContainer">
      {props.skills.map((skill) => (
        <article style={{ backgroundColor: skill.color }}>
          <p>{skill.name}</p>
        </article>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
