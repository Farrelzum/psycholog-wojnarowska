import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Contact = () => {
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
            Zrób pierwszy krok
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wiem, że napisanie pierwszej wiadomości może być trudne. 
            Nie martw się o to, co napisać - po prostu powiedz, co Cię do mnie sprowadziło.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="shadow-soft border-none bg-cream">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Skontaktuj się ze mną
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-warm-accent rounded-full flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">anna.kowalska@terapia.pl</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Telefon</p>
                    <p className="text-muted-foreground">+48 790 798 993</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-warm-accent rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Gabinet</p>
                    <p className="text-muted-foreground">
                      ul. Spokójna 15/3<br />
                      00-001 Warszawa
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center">
                    <span className="text-primary">🕒</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Godziny przyjęć</p>
                    <p className="text-muted-foreground">
                      Pon - Pt: 9:00 - 19:00<br />
                      Sob: 10:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="shadow-soft border-none bg-cream">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Pierwsze spotkanie
              </h3>
              
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-3">💫 Bezpłatna konsultacja</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pierwsze 30-minutowe spotkanie jest bezpłatne. To czas, w którym 
                    możemy się poznać i sprawdzić, czy czujesz się ze mną komfortowo.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-3">🤝 Bez zobowiązań</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Nie musisz się od razu decydować na regularną terapię. 
                    Spotkajmy się, porozmawiajmy i zobacz, czy to jest dla Ciebie.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-3">🔒 Pełna dyskrecja</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wszystko, co powiesz, zostanie między nami. 
                    Tajemnica zawodowa to podstawa mojej pracy.
                  </p>
                </div>
              </div>

              <Button className="w-full mt-6 bg-warm shadow-soft hover:shadow-warm transition-all duration-300">
                Umów bezpłatną konsultację
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-soft-beige rounded-xl p-8 shadow-soft">
            <p className="text-primary mb-4 font-medium">
              Często zadawane pytanie:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>"Co mam napisać w pierwszej wiadomości?"</strong><br />
              Naprawdę nie musisz się nad tym zastanawiać. Wystarczy, że napiszesz 
              kilka słów o tym, co Cię do mnie sprowadziło. Nie ma złych ani dobrych odpowiedzi.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;