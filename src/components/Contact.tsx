import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactFormDialog } from "@/components/ContactFormDialog";
const Contact = () => {
  return <section className="py-12 md:py-20 px-4 md:px-6 bg-background" aria-labelledby="kontakt-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="kontakt-heading" className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
            Kontakt - psycholog Barbara Wojnarowska Szczecin
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="shadow-soft border-none bg-cream h-full">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Skontaktuj się ze mną
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:psycholog.wojnarowska@gmail.com" className="flex items-center gap-4 cursor-pointer">
                  <div className="w-10 h-10 bg-warm-accent rounded-full flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">psycholog.wojnarowska@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+48790798993" className="flex items-center gap-4 cursor-pointer">
                  <div className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Telefon</p>
                    <p className="text-muted-foreground">+48 790 798 993</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-warm-accent rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Gabinet</p>
                    <p className="text-muted-foreground">
                      Port Zdrowie<br />
                      ul. Citroena 8<br />
                      70-772 Szczecin<br />
                      I piętro, gabinet 117
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

              {/* Cennik Modal */}
              <div className="mt-auto pt-8 border-t border-muted" style={{ marginTop: '2rem' }}>
                <div className="space-y-2 mb-4">
                  <div className="bg-background rounded-lg p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">📍 Spotkania odbywają się w gabinecie stacjonarnym oraz online.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">💳 Płatność gotówką, blik lub przelewem po sesji.</p>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-warm shadow-soft hover:shadow-warm transition-all duration-300">
                      Zobacz cennik
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold text-primary">Cennik</DialogTitle>
                      <DialogDescription className="sr-only">
                        Szczegółowy cennik usług psychologicznych
                      </DialogDescription>
                    </DialogHeader>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50%]">Usługa</TableHead>
                          <TableHead>Czas trwania</TableHead>
                          <TableHead className="text-right">Cena</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-sm">Konsultacja psychologiczna (dziecko, młodzież, dorosły)</TableCell>
                          <TableCell className="text-sm">50 min</TableCell>
                          <TableCell className="text-right text-sm">200 zł</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm">Sesja terapeutyczna indywidualna</TableCell>
                          <TableCell className="text-sm">50 min</TableCell>
                          <TableCell className="text-right text-sm">200 zł</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm">Konsultacja rodzicielska / wychowawcza</TableCell>
                          <TableCell className="text-sm">50–60 min</TableCell>
                          <TableCell className="text-right text-sm">200 zł</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm">Terapia par / mediacja</TableCell>
                          <TableCell className="text-sm">60 min</TableCell>
                          <TableCell className="text-right text-sm">250 zł</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm">Wydanie opinii psychologicznej (na życzenie klienta)</TableCell>
                          <TableCell className="text-sm">—</TableCell>
                          <TableCell className="text-right text-sm">od 250 zł</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm">Wydanie zaświadczenia</TableCell>
                          <TableCell className="text-sm">—</TableCell>
                          <TableCell className="text-right text-sm">50 zł</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-sm">Pakiet diagnostyczny ADHD</TableCell>
                          <TableCell className="text-sm">3–4 spotkania</TableCell>
                          <TableCell className="text-right text-sm">do 800 zł</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="shadow-soft border-none bg-cream h-full">
            <CardContent className="p-8 flex flex-col h-full">
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

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Button className="flex-1 bg-warm shadow-soft hover:shadow-warm transition-all duration-300" asChild>
                  <a href="tel:+48790798993">Zadzwoń</a>
                </Button>
                <ContactFormDialog>
                  <Button variant="outline" className="flex-1 border-warm-brown text-warm-brown hover:bg-warm-accent/10">
                    Wyślij wiadomość
                  </Button>
                </ContactFormDialog>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-8">
          <Card className="shadow-soft border-none bg-cream overflow-hidden">
            <CardContent className="p-0">
              <iframe src="https://www.google.com/maps?q=Krzemienna+42B,+70-734+Szczecin,+Poland&output=embed" width="100%" height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja gabinetu - Krzemienna 42B, Szczecin" />
            
            </CardContent>
          </Card>
        </div>

      </div>
    </section>;
};
export default Contact;