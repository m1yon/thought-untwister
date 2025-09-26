import { useState } from 'react';
import MatchingDistortions from './MatchingDistortions';
import { Checkbox } from './ui/checkbox';
import { cn } from '@/lib/utils';
import type { RecoveryMethod, ThoughtDistortionID } from '@/utils/algorithm';

interface RecoveryMethodCardProps {
  recoveryMethod: RecoveryMethod
  selectedDistortions?: ThoughtDistortionID[];
}

export default function RecoveryMethodCard({ recoveryMethod, selectedDistortions = [] }: RecoveryMethodCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const matchingDistortions = selectedDistortions.filter(distortionId =>
    recoveryMethod.scores[distortionId] > 0
  );

  const distortionsByScore = matchingDistortions.reduce((acc, distortionId) => {
    const score = recoveryMethod.scores[distortionId];
    if (!acc[score]) {
      acc[score] = [];
    }
    acc[score].push(distortionId);
    return acc;
  }, {} as Record<number, ThoughtDistortionID[]>);

  return (
    <div
      className={cn('p-4 border rounded-lg flex items-center gap-4 cursor-pointer hover:bg-gray-50', isChecked ? 'bg-gray-100 opacity-60' : '')}
      onClick={() => setIsChecked(!isChecked)}
    >
      <Checkbox
        checked={isChecked}
        onCheckedChange={(checked) => setIsChecked(checked as boolean)}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="flex-1">
        <p className={`font-medium text-lg ${isChecked ? 'line-through' : ''}`}>
          {recoveryMethod.name}
        </p>
        <p className={`text-sm text-gray-600 mb-3 ${isChecked ? 'opacity-60' : ''}`}>
          {recoveryMethod.category}{recoveryMethod.subcategory ? ` • ${recoveryMethod.subcategory}` : ''}
        </p>
        {Object.keys(distortionsByScore).length > 0 && (
          <>
            {Object.entries(distortionsByScore)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([score, distortions]) => (
                <MatchingDistortions
                  key={score}
                  distortions={distortions}
                  score={Number(score)}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
}
