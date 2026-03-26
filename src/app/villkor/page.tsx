import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Allmänna villkor – H.A.B. Sales Invest AB",
  description: "Allmänna villkor för H.A.B. Sales Invest AB:s konsulttjänster.",
};

export default function Villkor() {
  return (
    <>
      <Navbar />
      <main
        className="padding-global"
        style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
      >
        <div className="container-medium">
          <h1 className="font-heading" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Allmänna villkor
          </h1>
          <p style={{ opacity: 0.6, marginBottom: "3rem" }}>
            Senast uppdaterad: mars 2026
          </p>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              1. Omfattning
            </h2>
            <p>
              Dessa allmänna villkor gäller för alla tjänster som tillhandahålls av
              H.A.B. Sales Invest AB (org.nr 559459-3534) om inte annat skriftligen
              avtalats. Genom att anlita oss godkänner uppdragsgivaren dessa villkor.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              2. Tjänster
            </h2>
            <p>
              Vi erbjuder konsulttjänster inom försäljning, inklusive uppsökande
              försäljning, lead-hantering, strategirådgivning och säljträning.
              Uppdragets exakta omfattning specificeras i separat offert eller avtal.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              3. Arvoden och betalning
            </h2>
            <p>
              Arvoden framgår av offert eller avtal. Fakturering sker månadsvis om
              inte annat avtalats. Betalningsvillkor är 30 dagar netto. Vid försenad
              betalning tillkommer dröjsmålsränta enligt räntelagen.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              4. Sekretess
            </h2>
            <p>
              Båda parter förbinder sig att behandla information som mottas inom
              ramen för uppdraget konfidentiellt. Sekretessåtagandet gäller även
              efter uppdragets avslutande utan tidsbegränsning, om inte annat
              avtalats.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              5. Ansvarsbegränsning
            </h2>
            <p>
              H.A.B. Sales Invest AB:s ansvar är begränsat till direkta skador och
              uppgår maximalt till det belopp som uppdragsgivaren har betalat för
              den aktuella tjänsten under de senaste 12 månaderna. Vi ansvarar inte
              för indirekta skador, utebliven vinst eller förlorade affärer.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              6. Uppsägning
            </h2>
            <p>
              Löpande uppdrag kan sägas upp med 30 dagars skriftligt varsel om inte
              annat avtalats. Vid uppsägning faktureras utfört arbete fram till
              uppsägningsdagen.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              7. Tillämplig lag och tvister
            </h2>
            <p>
              Dessa villkor lyder under svensk lag. Tvister som uppstår i anledning
              av dessa villkor ska i första hand lösas genom förhandling. Om
              parterna inte kan enas ska tvisten avgöras av allmän domstol med Malmö
              tingsrätt som första instans.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              8. Kontakt
            </h2>
            <p>
              H.A.B. Sales Invest AB<br />
              Org.nr 559459-3534<br />
              Krusegatan 19, 212 25 Malmö<br />
              E-post: info@habsalesinvest.se
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
