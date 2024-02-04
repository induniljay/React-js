import { useEffect } from "react";
function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const clear = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(clear);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}: {sec < 10 ? `0${sec}` : sec}
    </div>
  );
}

export default Timer;
