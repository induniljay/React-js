export default function App() {
  const [advice, setAdvice] = useState("");
  const [clicks, setClicks] = useState(0);
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    setAdvice(advice.slip.advice);
    setClicks((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice !</button>
      <Message clicks={clicks} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.clicks}</strong> pieces of advice
    </p>
  );
}
