import Header from "@/components/Header";
import HeroContainer from "@/components/HeroContainer";
import PortfolioIntroduction from "@/components/PortfolioIntroduction";
import Skills from "@/components/IndexSkills";
import Projects from "@/components/IndexProjects";
import HowIWork from "@/components/HowIWork";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroContainer />
      <PortfolioIntroduction />
      <Skills />
      <Projects />
      <HowIWork />
      <CTA />
      <Footer />
    </>
  );
}