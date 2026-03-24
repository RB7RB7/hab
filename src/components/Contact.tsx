import FacePile from "@/components/ui/FacePile";

export default function Contact() {
  return (
    <section id="kontakt" className="padding-global padding-section-medium" data-anim>
      <div className="container-large">
        <div className="flex flex-col items-center gap-6 text-center">
          <FacePile count={4} label="Anslut dig till 100+ nöjda företag" />
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "35rem",
            }}
          >
            Redo att accelerera er försäljning?
          </h2>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 text-[0.875rem] font-medium no-underline px-6 py-3"
            style={{
              backgroundColor: "var(--swatch--dark)",
              color: "var(--swatch--white)",
            }}
            data-bezel=""
          >
            Boka ett möte
          </a>
        </div>
      </div>
    </section>
  );
}
