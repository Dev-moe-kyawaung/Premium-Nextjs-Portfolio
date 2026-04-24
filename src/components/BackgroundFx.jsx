export default function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[25%] h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
    </div>
  );
}
