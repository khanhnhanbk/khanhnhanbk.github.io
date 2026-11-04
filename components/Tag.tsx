export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="pill">
      {children}
    </li>
  );
}
