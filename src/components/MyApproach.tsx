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
            Wierzę, że każdy człowiek ma w sobie potencjał do rozwoju i zmiany.
            Moim zadaniem jako psychologa jest towarzyszyć Ci w tej drodze, wspierać i pomóc odnaleźć Twoje własne zasoby.
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
                Podstawą skutecznej terapii jest relacja oparta na zaufaniu i wzajemnym zrozumieniu. 
                Tworzę przestrzeń, w której możesz poczuć się bezpiecznie i swobodnie – bez oceniania i presji.
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
                Każdy z nas ma swoje tempo i własną drogę. Wspólnie będziemy odkrywać, 
                co działa właśnie dla Ciebie, szanując Twoje doświadczenia i gotowość do zmiany.
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
                Podczas spotkań korzystam zarówno z rozmowy, jak i sprawdzonych metod terapeutycznych. 
                Otrzymasz konkretne narzędzia, które możesz wykorzystać w codziennych sytuacjach.
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
                Traktuję człowieka całościowo – ważne są Twoje emocje, ciało, myśli i relacje. 
                Razem będziemy szukać równowagi między tymi obszarami, by poprawić Twoje samopoczucie.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;