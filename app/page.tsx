import { Navigation, Hero, SocialProof, Features, HowItWorks, Benefits, CTA, Footer } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navigation />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}
