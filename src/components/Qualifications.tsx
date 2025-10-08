import { Users, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Qualifications = () => {
  const highlights = [{
    icon: Users,
    title: "Różnorodne doświadczenie",
    description: "Praca indywidualna i grupowa, terapia par i rodzin w Poradni Psychologiczno-Pedagogicznej"
  }, {
    icon: Heart,
    title: "Wsparcie dla dorosłych",
    description: "Pomoc w radzeniu sobie z lękiem, depresją, żałobą i zaburzeniami obsesyjno-kompulsywnymi"
  }, {
    icon: Lightbulb,
    title: "Pomoc dzieciom i młodzieży",
    description: "ADHD, zaburzenia adaptacyjne, opozycyjno-buntownicze i problemy emocjonalne"
  }];
  return <section id="kwalifikacje" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">O mnie</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify">
            Ukończyłam psychologię na Uniwersytecie SWPS o{'\u00A0'}specjalności psychologia kliniczna dzieci i{'\u00A0'}młodzieży oraz edukację elementarną z{'\u00A0'}diagnozą i{'\u00A0'}terapią pedagogiczną. Jestem mediatorem i{'\u00A0'}psychoterapeutką w{'\u00A0'}trakcie szkolenia w{'\u00A0'}nurcie Terapii Skoncentrowanej na Rozwiązaniach (TSR). Należę do Polskiego Towarzystwa Terapii Skoncentrowanej na Rozwiązaniach, które zrzesza terapeutów pracujących w{'\u00A0'}podejściu opartym na zasobach i{'\u00A0'}współpracy. Obecnie poszerzam swoją wiedzę z{'\u00A0'}zakresu integracji sensorycznej, aby skuteczniej wspierać dzieci w{'\u00A0'}rozwoju emocjonalnym, poznawczym i{'\u00A0'}społecznym. W{'\u00A0'}pracy łączę podejście psychologiczne, pedagogiczne i{'\u00A0'}terapeutyczne, dostosowując metody do indywidualnych potrzeb każdej osoby.
          </p>
        </div>

        <div className="mb-12">
          <Card className="border-none shadow-soft bg-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Doświadczenie zawodowe</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Ukończyłam psychologię na Uniwersytecie SWPS o{'\u00A0'}specjalności psychologia kliniczna dzieci i{'\u00A0'}młodzieży oraz edukację elementarną z{'\u00A0'}diagnozą i{'\u00A0'}terapią pedagogiczną. Jestem mediatorem i{'\u00A0'}psychoterapeutką w{'\u00A0'}trakcie szkolenia w{'\u00A0'}nurcie Terapii Skoncentrowanej na Rozwiązaniach (TSR). Należę do Polskiego Towarzystwa Terapii Skoncentrowanej na Rozwiązaniach, które zrzesza terapeutów pracujących w{'\u00A0'}podejściu opartym na zasobach i{'\u00A0'}współpracy. Obecnie poszerzam swoją wiedzę z{'\u00A0'}zakresu integracji sensorycznej, aby skuteczniej wspierać dzieci w{'\u00A0'}rozwoju emocjonalnym, poznawczym i{'\u00A0'}społecznym. W{'\u00A0'}pracy łączę podejście psychologiczne, pedagogiczne i{'\u00A0'}terapeutyczne, dostosowując metody do indywidualnych potrzeb każdej osoby.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Kwalifikacje i szkolenia</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Posiadam kwalifikacje trenera Treningu Umiejętności Społecznych (TUS) oraz ukończone kursy w{'\u00A0'}nurcie Terapii Skoncentrowanej na Rozwiązaniach (TSR) – na poziomie podstawowym i{'\u00A0'}zaawansowanym. Jestem członkiem Polskiego Towarzystwa Terapii Skoncentrowanej na Rozwiązaniach, regularnie uczestniczę w{'\u00A0'}superwizjach i{'\u00A0'}szkoleniach rozwijających warsztat terapeutyczny.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
          const Icon = item.icon;
          return <Card key={index} className="border-none shadow-soft bg-card hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warm-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-warm-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Qualifications;