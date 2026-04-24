export default function ParticleDots() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-cyan-400" />
      <div className="absolute left-[25%] top-[35%] h-1.5 w-1.5 rounded-full bg-white" />
      <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-blue-400" />
      <div className="absolute bottom-[25%] left-[20%] h-1.5 w-1.5 rounded-full bg-purple-400" />
      <div className="absolute bottom-[18%] right-[22%] h-2 w-2 rounded-full bg-cyan-300" />
    </div>
  );
}

