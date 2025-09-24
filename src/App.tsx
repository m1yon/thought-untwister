import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';
import { getRankedExercises, thoughtDistortions } from './utils/algorithm';

function App() {
  const [selectedDistortions, setSelectedDistortions] = useState<string[]>([]);

  const recommendations = getRankedExercises(selectedDistortions);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Select Thought Distortions</h1>
        <ToggleGroup
          type="multiple"
          value={selectedDistortions}
          onValueChange={setSelectedDistortions}
          className="flex flex-wrap justify-center gap-3 max-w-4xl"
        >
          {thoughtDistortions.map((distortion) => (
            <ToggleGroupItem
              key={distortion.id}
              value={distortion.id}
              className="px-4 py-2 min-w-fit"
            >
              {distortion.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Recommended Exercises</h2>
        {recommendations.length > 0 ? (
          <div className="flex flex-col gap-4">
            {recommendations.map((recommendation) => (
              <div key={recommendation.id} className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg">
                <p className="font-medium">{recommendation.name}</p>
                <p className="text-sm text-gray-600">Category: {recommendation.category}</p>
                <p className="text-sm text-gray-600">Score: {recommendation.totalScore}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Select distortions to see recommended exercises</p>
        )}
      </div>
    </div>
  )
}

export default App
