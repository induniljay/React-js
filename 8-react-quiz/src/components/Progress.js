function Progress({ index, numQuestion, points, maxPoint, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index}</strong> {numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoint}
      </p>
    </header>
  );
}

export default Progress;
