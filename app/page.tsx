
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { USPSection } from "@/components/usp-section";

// ... (existing imports)

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />

      <USPSection />



      <Footer />
    </main>
  );
}
