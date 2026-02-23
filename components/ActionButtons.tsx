export default function ActionButtons({ options, onSelect }: any) {
  return (
    <div className="flex gap-4">
      {options?.map((o: any) => (
        <button
          key={o.id}
          onClick={() => onSelect(o.id)}
          className="px-4 py-2 border border-accent hover:shadow-[0_0_8px_#00A3FF] transition"
        >
          {o.description}
        </button>
      ))}
    </div>
  );
}