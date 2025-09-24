import CategoryBadge from './CategoryBadge';

interface RecoveryMethodCardProps {
  recoveryMethod: {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
  };
}

export default function RecoveryMethodCard({ recoveryMethod }: RecoveryMethodCardProps) {
  return (
    <div className="p-4 border rounded-lg">
      <p className="font-medium text-lg">{recoveryMethod.name}</p>
      <CategoryBadge category={recoveryMethod.category} subcategory={recoveryMethod.subcategory} />
    </div>
  );
}