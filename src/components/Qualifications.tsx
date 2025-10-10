import { GraduationCap, Briefcase, Users, BookOpen, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Kluczowe informacje o wykształceniu
const educationHighlights = ["Psychologia specjalność kliniczna dzieci i młodzieży - Uniwersytet SWPS w Poznaniu", "Pedagogika - edukacja elementarna z diagnozą i terapią pedagogiczną - Wyższa Szkoła Bankowa w Szczecinie", "Mediacje - studia podyplomowe - Wyższa Szkoła Bankowa w Szczecinie", "Studium Terapii i Podejścia Skoncentrowanego na Rozwiązaniach - kurs zaawansowany TSR", "Integracja sensoryczna - studia podyplomowe w trakcie - Collegium Balticum w Szczecinie"];

// Doświadczenie zawodowe
const experienceHighlights = ["Mam doświadczenie w pracy z dziećmi, młodzieżą i dorosłymi. Obecnie pracuję w Poradni Psychologiczno-Pedagogicznej oraz w gabinecie prywatnym, gdzie wspieram rozwój emocjonalny, społeczny i poznawczy moich klientów.", "Wcześniej zdobywałam doświadczenie w Ośrodku Szkolenia i Wychowania, udzielając wsparcia młodzieży zagrożonej wykluczeniem społecznym i towarzysząc jej w rozwoju emocjonalnym oraz społecznym.", "W pracy terapeutycznej łączę elementy Terapii Skoncentrowanej na Rozwiązaniach (TSR), Terapii Akceptacji i Zaangażowania (ACT) oraz podejścia psychodynamicznego, aby jak najlepiej odpowiadać na potrzeby każdej osoby."];

// Obszary specjalizacji
const specializations = [{
  icon: Users,
  title: "Różnorodne doświadczenie",
  description: "Praca indywidualna i grupowa, terapia par i rodzin"
}, {
  icon: Target,
  title: "Wsparcie dla dorosłych",
  description: "Lęk, depresja, żałoba, zaburzenia obsesyjno-kompulsywne"
}, {
  icon: Sparkles,
  title: "Pomoc dzieciom i młodzieży",
  description: "ADHD, zaburzenia adaptacyjne, opozycyjno-buntownicze"
}];
const Qualifications = () => {
  return <section id="kwalifikacje" className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
            O mnie
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify">Jestem psychologiem, mediatorem i trenerem Treningu Umiejętności Społecznych (TUS).
W pracy kieruję się empatią i uważnością. Pracuję w nurcie Terapii Skoncentrowanej na Rozwiązaniach (TSR), wspierając dzieci, młodzież i dorosłych w odkrywaniu swoich mocnych stron oraz wprowadzaniu zmian, które prowadzą do większego spokoju i satysfakcji w życiu.</p>
        </div>

        {/* Główna karta z złotą ramką */}
        <div className="relative mb-12">
          {/* Złota ramka gradientowa */}
          <div className="absolute -inset-1 gradient-gold rounded-2xl opacity-75 blur-sm"></div>
          
          <Card className="relative border-2 border-gold shadow-warm bg-card">
            <CardContent className="p-8 md:p-12">
              {/* Wykształcenie */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-warm-brown">
                    Wykształcenie
                  </h3>
                </div>
                <ul className="space-y-3">
                  {educationHighlights.map((item, index) => <li key={index} className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>)}
                </ul>
              </div>

              {/* Doświadczenie */}
              <div className="mt-8 pt-8 border-t border-gold/20 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-warm-brown">
                    Doświadczenie
                  </h3>
                </div>
                <ul className="space-y-3">
                  {experienceHighlights.map((item, index) => <li key={index} className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>)}
                </ul>
              </div>

              {/* Dodatkowe informacje */}
              <div className="mt-8 pt-8 border-t border-gold/20">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    Jestem członkiem Polskiego Towarzystwa Terapii Skoncentrowanej na Rozwiązaniach (PTTSR). W swojej pracy kieruję się Kodeksem Etycznym Terapeutów TSR.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Obszary specjalizacji */}
        <div className="grid md:grid-cols-3 gap-6">
          {specializations.map((item, index) => {
          const Icon = item.icon;
          return <Card key={index} className="border-none shadow-soft bg-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-warm-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-warm-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm text-left">
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