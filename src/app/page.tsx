import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import GalleryCta from "@/components/sections/GalleryCta";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <GalleryCta />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
