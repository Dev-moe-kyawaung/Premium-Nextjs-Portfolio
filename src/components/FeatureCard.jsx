export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}
