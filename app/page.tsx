
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { BentoGrid, BentoGridItem, BentoFeatureCard, BentoNumberCard } from "@/components/ui/bento-grid";
import {
  ShieldUser,
  MapPinned,
  Wallet,
  Cloud,
  LayoutGrid,
  Ticket,
  EyeOff
} from "lucide-react";

import { USPSection } from "@/components/usp-section";

// ... (existing imports)

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />

      <USPSection />

      <section className="py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">


          <BentoGrid className="max-w-4xl mx-auto">
            {/* Row 1: Privacy + Stores */}
            <BentoFeatureCard
              title="Private by design"
              description="Jouw data is jouw data. Geen accounts. Geen reclame. Geen cookies."
              icon={ShieldUser}
              iconColor="text-white"
              iconBgClass="bg-gradient-to-br from-blue-400 to-blue-600 border border-white/20"
              iconClassName="w-6 h-6 md:w-16 md:h-16"
              className="col-span-2"
            />
            <BentoNumberCard
              number="350+"
              label="ontworpen klantenpassen"
              className="col-span-1"
            />

            {/* Row 2: Battery + Smart Locations */}
            <BentoNumberCard
              number="0%"
              label="Batterij impact"
              className="col-span-1"
            />
            <BentoFeatureCard
              title="Slimme Locaties"
              description="De juiste pas, precies wanneer je hem nodig hebt. Slim ontworpen. Batterij- en privacyvriendelijk. Precies zoals het hoort."
              icon={MapPinned}
              iconColor="text-white"
              iconBgClass="bg-gradient-to-br from-purple-400 to-purple-600 border border-white/20"
              iconClassName="w-6 h-6 md:w-16 md:h-16"
              className="col-span-2"
            />

            {/* Row 3: Apple Wallet + Placeholder */}
            <BentoFeatureCard
              title="Apple Wallet"
              description="Voeg je favoriete kaarten met één tik toe aan je Apple Wallet voor ultra-snelle toegang."
              icon={Wallet}
              iconColor="text-black"
              iconBgClass="bg-gradient-to-br from-yellow-400 to-yellow-600 border border-white/20"
              iconClassName="w-6 h-6 md:w-16 md:h-16"
              className="col-span-2"
            />
            <BentoNumberCard
              topLabel="In slechts"
              number="3 tikken"
              label="stap je over"
              numberClassName="text-3xl md:text-6xl"
              className="col-span-1"
            />

            {/* Row 4: Placeholder + Vouchers */}
            <BentoNumberCard
              number="?"
              label="Binnenkort beschikbaar"
              className="col-span-1"
            />
            <BentoFeatureCard
              title="Sla je tegoedbonnen veilig op"
              description="Voorkom dat je geld verliest en ontvang een melding voordat de bon verloopt"
              icon={Ticket}
              iconColor="text-white"
              iconBgClass="bg-gradient-to-br from-orange-400 to-orange-600 border border-white/20"
              iconClassName="w-6 h-6 md:w-16 md:h-16"
              className="col-span-2"
            />

            {/* Row 5: Widgets + Format */}
            <BentoFeatureCard
              title="Snelle toegang met widgets"
              description="Met widgets zet je klantenpassen direct op je startscherm. Personaliseer de widget zelf met je favoriete passen."
              icon={LayoutGrid}
              iconColor="text-white"
              iconBgClass="bg-gradient-to-br from-green-400 to-green-600 border border-white/20"
              iconClassName="w-6 h-6 md:w-16 md:h-16"
              className="col-span-2"
            />
            <BentoNumberCard
              number="3"
              label="widget formaten"
              className="col-span-1"
            />

          </BentoGrid>
        </div>
      </section>

      <Footer />
    </main>
  );
}
