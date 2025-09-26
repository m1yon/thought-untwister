import { thoughtDistortionNames } from '@/utils/algorithm';
import type { ThoughtDistortionID } from '@/utils/algorithm';
import { Trophy } from 'lucide-react';

interface MatchingDistortionBadgeProps {
  distortions: ThoughtDistortionID[];
  score: number;
}

export default function MatchingDistortionBadge({ distortions, score }: MatchingDistortionBadgeProps) {
  const getScoreText = (score: number) => {
    switch (score) {
      case 3:
        return 'Amazing at untwisting';
      case 2:
        return 'Great at untwisting';
      case 1:
        return 'Good at untwisting';
      default:
        return '';
    }
  };

  const getScoreStyles = (score: number) => {
    switch (score) {
      case 3:
        return 'bg-yellow-100 text-yellow-900 border-yellow-300';
      case 2:
        return 'bg-gray-100 text-gray-700 border-gray-300';
      case 1:
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const distortionNames = distortions.map(id => thoughtDistortionNames[id]).join(', ');

  return (
    <div className={`px-3 py-1.5 mb-1 w-fit rounded-full text-xs font-medium border inline-flex items-center ${getScoreStyles(score)}`}>
      <Trophy className="w-4 h-4 mr-2 flex-shrink-0" />
      <span className="inline">
        <strong>{getScoreText(score)}:</strong>&nbsp;{distortionNames}
      </span>
    </div>
  );
}
