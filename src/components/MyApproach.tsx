import { Card, CardContent } from "@/components/ui/card";

const MyApproach = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
            Moje podejście
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Każdy z nas ma w sobie mądrość i siłę potrzebną do zmiany. 
            Moją rolą jest być z Tobą w tej podróży i pomóc Ci ją odkryć.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft border-none bg-background">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-warm-accent rounded-full flex items-center justify-center mb-6">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Relacja to podstawa
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Wierzę, że terapia to przede wszystkim relacja między dwójką ludzi. 
                Tworzę przestrzeń, w której możesz czuć się bezpiecznie i zrozumiane, 
                bez oceniania czy presji na szybkie zmiany.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-none bg-background">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-soft-beige rounded-full flex items-center justify-center mb-6">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Twoje tempo, Twoja droga
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nie ma jednego uniwersalnego sposobu na radzenie sobie z trudnościami. 
                Razem odkryjemy to, co działa właśnie dla Ciebie, szanując Twoje 
                doświadczenia i tempo zmian.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-none bg-background">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-warm-accent rounded-full flex items-center justify-center mb-6">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Praktyczne narzędzia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Łączę rozmowy terapeutyczne z konkretnymi technikami, które możesz 
                wykorzystać w codziennym życiu. Każde narzędzie dopasowuję do Twojej 
                sytuacji i potrzeb.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-none bg-background">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-soft-beige rounded-full flex items-center justify-center mb-6">
                <span className="text-xl">🌈</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Całościowe spojrzenie
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Patrzę na człowieka jako całość - Twoje emocje, ciało, myśli i relacje 
                są równie ważne. Razem odkrywamy, jak te wszystkie elementy wpływają 
                na Twoje samopoczucie.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;