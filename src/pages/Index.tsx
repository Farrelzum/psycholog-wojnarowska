import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import Qualifications from "@/components/Qualifications";
import ForWhom from "@/components/ForWhom";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MyApproach />
      <Qualifications />
      <ForWhom />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
