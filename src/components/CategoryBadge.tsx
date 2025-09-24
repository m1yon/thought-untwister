interface CategoryBadgeProps {
  category: string;
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Cognitive': 'bg-blue-300 text-blue-950',
      'Truth Based': 'bg-green-300 text-green-950',
      'Logic Based': 'bg-red-300 text-red-950',
      'Semantic': 'bg-yellow-300 text-yellow-950',
      'Quantitative': 'bg-purple-300 text-purple-950',
      'Human Based': 'bg-pink-300 text-pink-950',
      'Role Play': 'bg-indigo-300 text-indigo-950',
      'Philosophical/Spiritual': 'bg-orange-300 text-orange-950',
      'Uncovering': 'bg-teal-300 text-teal-950',
      'Habits and Addictions': 'bg-cyan-300 text-cyan-950',
      'Motivational': 'bg-rose-300 text-rose-950',
      'Interpersonal': 'bg-emerald-300 text-emerald-950',
    };
    return colorMap[category] || 'bg-gray-300 text-gray-950';
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getCategoryColor(category)}`}>
      {category}
    </span>
  );
}

export default CategoryBadge;
