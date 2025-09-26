import { thoughtDistortionNames } from '@/utils/algorithm';
import type { ThoughtDistortionID } from '@/utils/algorithm';

interface MatchingDistortionBadgeProps {
  distortionId: ThoughtDistortionID;
  score: number;
}

export default function MatchingDistortionBadge({ distortionId, score }: MatchingDistortionBadgeProps) {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      {thoughtDistortionNames[distortionId]}
      <span className="ml-1 font-semibold">
        {score}
      </span>
    </span>
  );
}