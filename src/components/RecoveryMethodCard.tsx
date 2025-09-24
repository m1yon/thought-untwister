import { useState } from 'react';
import CategoryBadge from './CategoryBadge';
import { Checkbox } from './ui/checkbox';
import { cn } from '@/lib/utils';

interface RecoveryMethodCardProps {
  recoveryMethod: {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
  };
}

export default function RecoveryMethodCard({ recoveryMethod }: RecoveryMethodCardProps) {
  const [isChecked, setIsChecked] = useState(false);

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
        <p className={`font - medium text - lg ${isChecked ? 'line-through' : ''}`}>
          {recoveryMethod.name}
        </p>
        <CategoryBadge
          category={recoveryMethod.category}
          subcategory={recoveryMethod.subcategory}
          disabled={isChecked}
        />
      </div>
    </div>
  );
}
