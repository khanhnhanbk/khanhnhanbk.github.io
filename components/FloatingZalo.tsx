import Icon from "@/components/Icon";
import { ZALO_URL } from "@/lib/contact";

// Always-visible Zalo button: the main way Vietnamese clients get in touch.
export default function FloatingZalo({ label }: { label: string }) {
  return (
    <a
      href={ZALO_URL}
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 right-5 z-40 flex min-h-14 items-center gap-2 glass rounded-full bg-zalo/70 px-5 font-semibold text-white hover:bg-zalo/85 active:scale-95"
    >
      <span className="animate-pulse-ring absolute inset-0 -z-10 rounded-full bg-zalo" aria-hidden="true" />
      <Icon name="chat" className="h-6 w-6" strokeWidth={2} />
      {label}
    </a>
  );
}
