import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OurInstructors from "@/components/OurInstructors";
import TestimonialCards from "@/components/TestimonialCards";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <Webinars />
      <OurInstructors />
      <Footer />
    </main>
  );
}
