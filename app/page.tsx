import { Desktop } from "@/components/Desktop";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Catogories } from "@/components/Catogories";
import { CatogoriesContainer } from "@/components/CatogoriesContainer";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Desktop />
      <Features />
      <Catogories />
      <Testimonials/>
    </>
  );
}
