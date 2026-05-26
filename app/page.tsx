import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ListenStrip from "@/components/ListenStrip";
import FeaturedEpisodes from "@/components/FeaturedEpisodes";
import Manifesto from "@/components/Manifesto";
import Hosts from "@/components/Hosts";
import GuestCTA from "@/components/GuestCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ListenStrip />
        <FeaturedEpisodes />
        <Manifesto />
        <Hosts />
        <GuestCTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
