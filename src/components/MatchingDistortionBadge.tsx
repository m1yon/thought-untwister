import { thoughtDistortionNames } from '@/utils/algorithm';
import type { ThoughtDistortionID } from '@/utils/algorithm';

interface MatchingDistortionBadgeProps {
  distortionId: ThoughtDistortionID;
  score: number;
}

export default function MatchingDistortionBadge({ distortionId, score }: MatchingDistortionBadgeProps) {
  const getScoreText = (score: number) => {
    switch (score) {
      case 3:
        return 'Works for almost everyone';
      case 2:
        return 'Works for most people';
      case 1:
        return 'Works for some people';
      default:
        return '';
    }
  };

  const getScoreStyles = (score: number) => {
    switch (score) {
      case 3:
        return 'bg-green-100 text-green-800 border-green-200';
      case 2:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 1:
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${getScoreStyles(score)}`}>
      <span className="mr-1.5">{thoughtDistortionNames[distortionId]}</span>
      <span className="font-semibold">• {getScoreText(score)}</span>
    </span>
  );
}