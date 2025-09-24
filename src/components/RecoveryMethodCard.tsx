import { useState } from 'react';
import CategoryBadge from './CategoryBadge';
import { Checkbox } from './ui/checkbox';

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
      className={`p-4 border rounded-lg flex items-center gap-3 cursor-pointer ${isChecked ? 'bg-gray-100 opacity-60' : ''}`}
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
      </div>
    </div>
  );
}