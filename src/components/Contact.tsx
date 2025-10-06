import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Contact = () => {
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
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
                    <p className="text-muted-foreground">psycholog.wojnarowska@gmail.com</p>
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
                      Krzemienna 42B<br />
                      70-734 Szczecin
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
                      Wt-Pt: 15:00-20:00<br />
                      Sob: 15:00-20:00
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
                  <p className="text-muted-foreground text-sm leading-relaxed">Pierwsza 15-minutowa rozmowa telefoniczna jest bezpłatna. To czas, w którym możemy się poznać i sprawdzić, czy czujesz się ze mną komfortowo.</p>
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

              <Button className="w-full mt-6 bg-warm shadow-soft hover:shadow-warm transition-all duration-300" asChild>
                <a href="tel:+48790798993">Umów bezpłatną konsultację</a>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>;
};
export default Contact;