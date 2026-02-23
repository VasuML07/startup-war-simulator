export default function EventCard({ event }: any) {
  return (
    <div className="bg-panel p-6 border border-accent">
      <h2 className="text-xl mb-2">{event?.event_title}</h2>
      <p className="text-gray-400">{event?.event_description}</p>
    </div>
  );
}