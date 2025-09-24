interface CategoryBadgeProps {
  category: string;
  subcategory?: string;
  disabled?: boolean;
}

function CategoryBadge({ category, subcategory, disabled }: CategoryBadgeProps) {
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Basic': 'bg-blue-300 text-blue-950',
      'Cognitive': 'bg-green-300 text-green-950',
      'Uncovering': 'bg-teal-300 text-teal-950',
      'Motivational': 'bg-rose-300 text-rose-950',
      'Exposure': 'bg-purple-300 text-purple-950',
      'Interpersonal': 'bg-emerald-300 text-emerald-950',
    };

    if (disabled) {
      return 'bg-gray-200 text-gray-500';
    }

    return colorMap[category] || 'bg-gray-300 text-gray-950';
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getCategoryColor(category)}`}>
      {category}{subcategory ? ` - ${subcategory}` : ''}
    </span>
  );
}

export default CategoryBadge;
