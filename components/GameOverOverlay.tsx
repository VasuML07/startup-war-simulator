export default function GameOverOverlay({
  status,
  onRestart
}: {
  status: string;
  onRestart: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="bg-panel p-8 border border-accent text-center w-[420px]">
        <h2 className="text-2xl mb-4">Game Over</h2>

        <p className="mb-6 text-gray-400">
          {status}
        </p>

        <button
          onClick={onRestart}
          className="px-6 py-2 border border-accent hover:shadow-[0_0_12px_#00A3FF] transition"
        >
          Start New Game
        </button>
      </div>
    </div>
  );
}