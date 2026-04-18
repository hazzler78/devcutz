import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { DevinMedia } from "@/components/DevinMedia";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Navbar } from "@/components/Navbar";
import { Prices } from "@/components/Prices";

/** Startsida – en enda scroll-vänlig sida med alla sektioner. */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DevinMedia />
        <InstagramFeed />
        <Prices />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
