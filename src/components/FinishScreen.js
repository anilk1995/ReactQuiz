function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percenteage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percenteage === 100) emoji = "🏆";
  if (percenteage >= 80 && percenteage < 100) emoji = "🥳";

  return (
    <>
      <p className="result">
        <spam>{emoji}</spam> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percenteage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
