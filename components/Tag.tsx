export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
      {children}
    </li>
  );
}
