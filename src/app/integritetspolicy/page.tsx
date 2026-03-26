import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Integritetspolicy – H.A.B. Sales Invest AB",
  description: "Integritetspolicy för H.A.B. Sales Invest AB. Läs om hur vi hanterar personuppgifter.",
};

export default function Integritetspolicy() {
  return (
    <>
      <Navbar />
      <main
        className="padding-global"
        style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
      >
        <div className="container-medium">
          <h1 className="font-heading" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Integritetspolicy
          </h1>
          <p style={{ opacity: 0.6, marginBottom: "3rem" }}>
            Senast uppdaterad: mars 2026
          </p>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              1. Inledning
            </h2>
            <p>
              H.A.B. Sales Invest AB (org.nr 559459-3534), med säte på Krusegatan 19,
              212 25 Malmö, är personuppgiftsansvarig för behandlingen av dina
              personuppgifter. Vi värnar om din integritet och behandlar
              personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR) och
              tillämplig svensk lagstiftning.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              2. Vilka uppgifter vi samlar in
            </h2>
            <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Kontaktuppgifter (namn, e-post, telefonnummer) som du lämnar via våra kontaktformulär</li>
              <li>Företagsuppgifter (företagsnamn, organisationsnummer, roll)</li>
              <li>Teknisk data (IP-adress, webbläsartyp, besökstid) som samlas in automatiskt</li>
            </ul>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              3. Varför vi behandlar dina uppgifter
            </h2>
            <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Hantera förfrågningar och kommunicera med dig</li>
              <li>Administrera kundrelationer och avtal</li>
              <li>Förbättra vår webbplats och våra tjänster</li>
              <li>Uppfylla rättsliga skyldigheter (exempelvis bokföring)</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              Rättslig grund för behandlingen är berättigat intresse, avtal eller
              samtycke beroende på sammanhanget.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              4. Hur länge vi sparar uppgifter
            </h2>
            <p>
              Vi sparar dina personuppgifter så länge det är nödvändigt för det
              ändamål de samlades in, eller så länge vi är skyldiga enligt lag.
              Kontaktuppgifter från förfrågningar raderas senast 24 månader efter
              senaste kontakt om inget avtal har ingåtts.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              5. Cookies
            </h2>
            <p>
              Vår webbplats använder cookies för att säkerställa grundläggande
              funktionalitet och analysera besökstrafik. Du kan när som helst
              hantera dina cookie-inställningar i din webbläsare.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              6. Dina rättigheter
            </h2>
            <p style={{ marginBottom: "0.75rem" }}>
              Enligt GDPR har du rätt att:
            </p>
            <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Begära tillgång till de personuppgifter vi behandlar om dig</li>
              <li>Begära rättelse av felaktiga uppgifter</li>
              <li>Begära radering av dina uppgifter</li>
              <li>Invända mot behandling baserad på berättigat intresse</li>
              <li>Begära begränsning av behandlingen</li>
              <li>Begära dataportabilitet</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten
              (IMY).
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="font-heading" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              7. Kontakt
            </h2>
            <p>
              Vid frågor om vår behandling av personuppgifter, kontakta oss:
            </p>
            <p style={{ marginTop: "0.75rem" }}>
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
