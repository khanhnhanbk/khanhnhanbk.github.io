import Icon from "@/components/Icon";
import { ZALO_URL } from "@/lib/contact";

// Always-visible Zalo button: the main way Vietnamese clients get in touch.
export default function FloatingZalo({ label }: { label: string }) {
  return (
    <a
      href={ZALO_URL}
      target="_blank"
      rel="noopener"
      className="glass btn no-print fixed bottom-5 right-5 z-40 min-h-14 px-5 shadow-lg active:scale-95"
    >
      <span className="animate-pulse-ring absolute inset-0 -z-10 rounded-full bg-brand" aria-hidden="true" />
      <Icon name="chat" className="h-6 w-6" strokeWidth={2} />
      {label}
    </a>
  );
}
