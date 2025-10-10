import { Button } from "@/components/ui/button";
import therapistPortrait from "@/assets/therapist-portrait.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-8 md:py-12 gradient-subtle">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Portrait */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="relative">
            <img src={therapistPortrait} alt="Dr Anna Kowalska - Psychoterapeutka" className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-warm" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-warm-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-soft-beige rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-light text-warm-brown mb-6 leading-tight">
            Wspólnie stwórzmy <br />
            <span className="font-semibold text-primary">Twoją drogę</span> <br />
            do lepszego jutra
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center md:text-justify">Nazywam się Barbara Wojnarowska. Towarzyszę osobom, które chcą lepiej zrozumieć siebie i swoje emocje. W bezpiecznej przestrzeni możesz zatrzymać się, nabrać sił i ruszyć w stronę zmian, które są dla Ciebie ważne.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-warm shadow-soft hover:shadow-warm transition-all duration-300 px-12" asChild>
              <a href="tel:+48790798993">Umów spotkanie</a>
            </Button>
            <Button size="lg" variant="outline" className="border-warm-brown text-warm-brown hover:bg-warm-accent/10 px-12" asChild>
              <a href="#kwalifikacje">Dowiedz się więcej</a>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>💫 Pierwsze spotkanie to rozmowa bez zobowiązań</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;