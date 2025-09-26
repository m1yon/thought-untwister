import { useState } from 'react';
import CategoryBadge from './CategoryBadge';
import MatchingDistortionBadge from './MatchingDistortionBadge';
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
        <CategoryBadge
          category={recoveryMethod.category}
          subcategory={recoveryMethod.subcategory}
          disabled={isChecked}
        />
        {matchingDistortions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {matchingDistortions.map(distortionId => (
              <MatchingDistortionBadge
                key={distortionId}
                distortionId={distortionId}
                score={recoveryMethod.scores[distortionId]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
