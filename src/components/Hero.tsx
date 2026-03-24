import { HERO, SEGMENT_CARDS, FOUNDATION } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";
import { ArrowUpRight, iconMap } from "@/components/ui/Icons";
import FacePile from "@/components/ui/FacePile";

export default function Hero() {
  const segmentImages = [ASSETS.segmentCard1, ASSETS.segmentCard2];

  return (
    <section
      className="relative flex flex-col justify-start min-h-screen"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="flex flex-col items-center gap-10">
            {/* Title */}
            <div className="text-center" style={{ maxWidth: "44rem" }}>
              <h1
                className="font-heading"
                style={{
                  fontSize: "clamp(2.25rem, 5vw + 0.5rem, 4.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                {HERO.headline}
                <em className="italic">{HERO.headlineEm}</em>
                {HERO.headlineSuffix}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="text-center" style={{ maxWidth: "36rem" }}>
              <p
                className="text-[1.125rem]"
                style={{ color: "var(--text-secondary)" }}
              >
                {HERO.subtitle}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 text-[0.875rem] font-medium no-underline px-6 py-3"
                style={{
                  backgroundColor: "var(--swatch--dark)",
                  color: "var(--swatch--white)",
                }}
                data-bezel=""
              >
                {HERO.ctaPrimary}
              </a>
              <a
                href="#tjanster"
                className="inline-flex items-center justify-center gap-2 text-[0.875rem] font-medium no-underline border px-6 py-3"
                style={{
                  borderColor: "var(--border-secondary)",
                  color: "var(--text-primary)",
                  backgroundColor: "var(--bg-primary)",
                }}
                data-bezel=""
              >
                {HERO.ctaSecondary}
              </a>
            </div>

            {/* Face pile */}
            <FacePile count={4} label={HERO.facepileText} />

            {/* Segment cards */}
            <div className="grid w-full self-stretch gap-6 segment-grid" data-anim>
              {SEGMENT_CARDS.map((card, i) => (
                <div
                  key={card.label}
                  className="relative text-white h-full"
                  style={{ minHeight: "36rem", padding: "1.5rem" }}
                  data-bezel=""
                >
                  {/* Background image */}
                  <img
                    src={segmentImages[i]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(#2220 20%, #222)" }}
                  />
                  {/* Content */}
                  <div className="relative z-[2] flex flex-col justify-between h-full gap-8">
                    <div>
                      <p
                        className="text-label"
                        style={{ color: "var(--white-700)", textAlign: "left" }}
                      >
                        {card.label}
                      </p>
                    </div>
                    {/* Middle mockup for first card */}
                    <div className="flex-1 flex items-center justify-center">
                      {i === 0 && (
                        <img
                          src={ASSETS.segmentCard1Mockup}
                          alt=""
                          className="w-full max-w-md"
                          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }}
                        />
                      )}
                    </div>
                    {/* Bottom */}
                    <div className="flex items-center justify-between gap-4">
                      <p
                        className="text-[0.875rem]"
                        style={{ color: "var(--white-700)", maxWidth: "30rem" }}
                      >
                        {card.description}
                      </p>
                      <div
                        className="shrink-0 border flex items-center justify-center p-3"
                        style={{
                          width: "3rem",
                          height: "3rem",
                          borderColor: "var(--border-secondary)",
                          backgroundColor: "var(--white-50)",
                        }}
                      >
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Foundation row */}
            <div className="grid w-full gap-6 foundation-grid" data-anim-stagger>
              {FOUNDATION.items.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div key={item.title} className="flex flex-col gap-6">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        padding: "0.5rem",
                        backgroundColor: "var(--bg-alternate)",
                        color: "var(--swatch--white)",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[1rem] font-medium" style={{ lineHeight: 1.2 }}>
                        {item.title}
                      </h3>
                      <p className="text-[0.875rem]" style={{ color: "var(--text-secondary)" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
