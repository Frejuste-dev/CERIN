interface Props {
  count: number;
}

export function ResultCount({ count }: Props) {
  return (
    <p className="text-gray-600 text-center mb-8">
      {count} {count === 1 ? "résultat trouvé" : "résultats trouvés"}
    </p>
  );
}
