import { Hero } from "@/components/Hero";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { About } from "@/components/About";
import { Professionals } from "@/components/Professionals";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <PortfolioPreview />
      <About />
      <Professionals />
      <Contact />
    </main>
  );
}
