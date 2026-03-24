import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudy from "@/components/CaseStudy";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimationInitializer from "@/components/AnimationInitializer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <WhyChooseUs />
      <CaseStudy />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <AnimationInitializer />
    </>
  );
}
