export default function StatBar({ value }: { value: number }) {
  return (
    <div className="w-full h-3 bg-gray-800 rounded">
      <div
        className="h-3 bg-accent transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}