import { BANNER } from "@/lib/constants";

export default function Banner() {
  return (
    <div
      className="border-b flex flex-col items-center justify-center py-4"
      style={{
        borderColor: "var(--border-primary)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="padding-global">
        <div className="flex items-center justify-center gap-2">
          {/* Square marker dot - Veyra uses 0.5rem square */}
          <div
            className="w-2 h-2 shrink-0"
            style={{ backgroundColor: "var(--swatch--dark)" }}
          />
          <p className="text-label">{BANNER.text}</p>
        </div>
      </div>
    </div>
  );
}
