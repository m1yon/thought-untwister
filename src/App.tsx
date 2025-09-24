import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';
import { Tooltip, TooltipTrigger, TooltipContent } from './components/ui/tooltip';
import CategoryBadge from './components/CategoryBadge';
import { getRankedExercises as getRankedRecoveryMethods, thoughtDistortions, type ThoughtDistortionID } from './utils/algorithm';

function App() {
  const [selectedDistortions, setSelectedDistortions] = useState<ThoughtDistortionID[]>([]);

  const recommendedRecoveryMethods = getRankedRecoveryMethods(selectedDistortions);

  return (
    <div className="p-8 max-w-4xl mx-auto mt-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold pb-4">Select Thought Distortions</h1>
        <ToggleGroup
          type="multiple"
          value={selectedDistortions}
          onValueChange={(distortions) => setSelectedDistortions(distortions as ThoughtDistortionID[])}
          className="flex flex-wrap gap-3 justify-center"
        >
          {thoughtDistortions.map((distortion) => (
            <Tooltip key={distortion.id} delayDuration={700}>
              <ToggleGroupItem
                value={distortion.id}
                className="px-4 py-2 min-w-fit flex-0"
              >
                <TooltipTrigger>
                  {distortion.name}
                </TooltipTrigger>
              </ToggleGroupItem>
              <TooltipContent>
                {distortion.description}
              </TooltipContent>
            </Tooltip>
          ))}
        </ToggleGroup>
      </div>

      <div>
        <h2 className="text-center text-xl font-semibold pb-4">Recommended Recovery Methods</h2>
        {recommendedRecoveryMethods.length > 0 ? (
          <div className="flex flex-col gap-4 w-full">
            {recommendedRecoveryMethods.map((recoveryMethod) => (
              <div key={recoveryMethod.id} className="p-4 border rounded-lg">
                <p className="font-medium text-lg">{recoveryMethod.name}</p>
                <CategoryBadge category={recoveryMethod.category} subcategory={recoveryMethod.subcategory} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Select distortions to see recommended exercises</p>
        )}
      </div>
    </div>
  )
}

export default App
