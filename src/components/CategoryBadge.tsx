import { Badge } from './ui/badge';

interface CategoryBadgeProps {
  category: string;
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
      'Cognitive': 'default',
      'Truth Based': 'secondary',
      'Logic Based': 'destructive',
      'Semantic': 'outline',
      'Quantitative': 'default',
      'Human Based': 'secondary',
      'Role Play': 'destructive',
      'Philosophical/Spiritual': 'outline',
      'Uncovering': 'default',
      'Habits and Addictions': 'secondary',
      'Motivational': 'destructive',
      'Interpersonal': 'outline',
    };
    return colorMap[category] || 'default';
  };

  return (
    <Badge variant={getCategoryColor(category)}>
      {category}
    </Badge>
  );
}

export default CategoryBadge;
