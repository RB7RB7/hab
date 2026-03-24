import { ASSETS } from "@/lib/assets";

type Props = {
  count?: number;
  label?: string;
  dark?: boolean;
};

export default function FacePile({ count = 4, label, dark = false }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center justify-center">
        {ASSETS.facepile.slice(0, count).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="rounded-full object-cover border-2"
            style={{
              width: "3rem",
              height: "3rem",
              marginRight: "-0.5rem",
              borderColor: dark ? "var(--swatch--dark)" : "var(--swatch--light)",
            }}
          />
        ))}
      </div>
      {label && (
        <p
          className="text-[0.875rem]"
          style={{ color: dark ? "var(--white-500)" : "var(--text-secondary)" }}
        >
          {label}
        </p>
      )}
    </div>
  );
}
