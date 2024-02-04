function FinishedScreen({ points, maxPoint, highscore, dispatch }) {
  const precentage = (points / maxPoint) * 100;
  let emoji;
  if (precentage === 100) emoji = "🎖️";
  if (precentage >= 100 && precentage < 100) emoji = "😍";
  if (precentage >= 50 && precentage < 80) emoji = "😎";
  if (precentage > 0 && precentage < 50) emoji = "😏";
  if (precentage === 0) emoji = "💀";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        you scored <strong>{points}</strong> out of {maxPoint} (
        {Math.ceil(precentage)}%)
      </p>
      <p className="highscore">(HighScore : {highscore} point)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restar Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
