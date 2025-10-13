import Hero from "@/components/Hero";
import Qualifications from "@/components/Qualifications";
import ForWhom from "@/components/ForWhom";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MyApproach from "@/components/MyApproach";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MyApproach />
      <Qualifications />
      <ForWhom />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;
