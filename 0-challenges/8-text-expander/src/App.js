import { useState } from "react";
export default function App() {
  return (
    <div>
      <TextExpander className="box" buttonColor="#ff0456">
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishi
      </TextExpander>

      <TextExpander className="box" expanded={true}>
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishi
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  className = "",
  collapesButtonText = "Show less",
  expandedButtonText = "Show more",
  expanded = false,
  collapedNumberWords = 20,

  buttonColor = "#0000ff",
}) {
  const btnColorStyle = {
    color: buttonColor,
    cursor: "pointer",
  };

  const [isOpen, setIsOpen] = useState(expanded);

  const displayText = isOpen
    ? children
    : children.split(" ").slice(0, collapedNumberWords).join(" ") + "...  ";

  //   const handleToggle = () => {
  //     setIsOpen((open) => !open);
  //   };
  return (
    <div className={className}>
      <p>{displayText}</p>
      <span
        style={btnColorStyle}
        onClick={() => setIsOpen((open) => !open)}
        role="button"
      >
        {isOpen ? collapesButtonText : expandedButtonText}
      </span>
    </div>
  );
}
