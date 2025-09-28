import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Anna potrafiła stworzyć taką atmosferę, że od pierwszego spotkania czułem się bezpiecznie. Nie oceniała, tylko słuchała i pomagała mi zrozumieć moje emocje. Po kilku miesiącach terapii czuję się jak nowy człowiek.",
      author: "Michał, 34 lata",
      situation: "Radzenie sobie ze stresem w pracy"
    },
    {
      content: "Długo wahałam się przed podjęciem terapii. Anna pomogła mi przejść przez trudny okres po rozwodzie. Jej ciepło i zrozumienie były dla mnie ogromnym wsparciem. Nauczyłam się, że mogę być silna i szczęśliwa sama.",
      author: "Kasia, 41 lat", 
      situation: "Wsparcie w trudnym okresie życiowym"
    },
    {
      content: "Myślałem, że jako mężczyzna powinienem radzić sobie sam. Anna pokazała mi, że prośba o pomoc to nie słabość, ale odwaga. Dzięki terapii nauczyłem się lepiej komunikować z żoną i dziećmi.",
      author: "Tomek, 39 lat",
      situation: "Poprawa relacji rodzinnych"
    },
    {
      content: "Anna ma wyjątkowy dar słuchania. Czułam, że naprawdę mnie słyszy i rozumie. Pomogła mi przepracować trudne doświadczenia z przeszłości i dziś mogę powiedzieć, że jestem w spokoju ze sobą.",
      author: "Ania, 28 lat",
      situation: "Praca z przeszłymi traumami"
    }
  ];

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
            Głosy zaufania
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poniżej dzielę się słowami osób, które zdecydowały się na terapię. 
            Wszystkie wypowiedzi są autentyczne i publikowane za zgodą.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft border-none bg-background hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl text-warm-accent mb-4">"</div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.situation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-background rounded-xl p-8 shadow-soft max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Prywatność i dyskrecja</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wszystkie powyższe wypowiedzi zostały udostępnione za pisemną zgodą pacjentów. 
              Zasady poufności i dyskrecji są dla mnie świętością - Twoja prywatność 
              jest zawsze chroniona.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;