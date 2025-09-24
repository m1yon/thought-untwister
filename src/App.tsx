import { getRankedExercises } from './utils/algorithm';

function App() {
  const userSelection: string[] = [
    "all-or-nothing",
    "should-statements",
    "self-blame",
  ];
  const recommendations = getRankedExercises(userSelection);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {recommendations.map((recommendation) => (
        <div className="flex flex-col items-center justify-center gap-4">
          <p>{recommendation.name}</p>
          <p>Category: {recommendation.totalScore}</p>
        </div>
      ))}
    </div>
  )
}

export default App
