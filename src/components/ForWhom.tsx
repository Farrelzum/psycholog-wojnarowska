const ForWhom = () => {
  const situations = [
    {
      title: "Gdy czujesz się przytłoczony",
      description: "Bywa, że codzienność staje się zbyt ciężka – praca, obowiązki, trudne decyzje czy relacje. Możesz wtedy czuć się zagubiony i przytłoczony. W terapii dostajesz przestrzeń, by to unieść razem."
    },
    {
      title: "Kiedy coś się w życiu zmieniło",
      description: "Zmiany – nawet te dobre – potrafią wywrócić życie do góry nogami. Rozstanie, przeprowadzka, utrata bliskiej osoby czy nowa praca mogą budzić lęk i niepewność. Nie musisz przechodzić przez to sam."
    },
    {
      title: "Gdy relacje przestają dawać radość",
      description: "Relacje są sercem naszego życia, ale czasem zamiast bliskości dają ból. Kłótnie z partnerem, poczucie samotności, trudności w porozumieniu z dziećmi – warto wtedy poszukać nowych sposobów budowania więzi."
    },
    {
      title: "Kiedy chcesz lepiej siebie poznać",
      description: "Możesz czuć, że chcesz czegoś więcej – lepiej rozumieć swoje emocje i reakcje, odkryć mocne strony albo znaleźć kierunek rozwoju. Terapia to bezpieczne miejsce, by przyjrzeć się sobie."
    },
    {
      title: "Gdy przeszłość wciąż boli",
      description: "Trudne wspomnienia i rany z przeszłości często wpływają na nasze dzisiejsze życie. Wspólnie możemy się im przyjrzeć i pracować nad tym, by ból stopniowo ustępował miejsca większemu spokoju."
    },
    {
      title: "Kiedy lęk ogranicza Twoje życie",
      description: "Lęk to naturalna emocja, ale czasem zaczyna przejmować kontrolę – pojawiają się napady paniki, fobie czy nieustanne zamartwianie się. W terapii możesz znaleźć sposoby, by odzyskać równowagę i poczucie wolności."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
            Dla kogo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Każdy z nas ma momenty, w których potrzebuje wsparcia. Oto sytuacje, w których 
            najczęściej towarzyszę moim pacjentom – być może odnajdziesz tu coś ze swojego doświadczenia:
          </p>
        </div>

        <div className="space-y-8">
          {situations.map((situation, index) => (
            <div key={index} className="flex gap-6 p-6 bg-cream rounded-xl shadow-soft">
              <div className="flex-shrink-0 w-8 h-8 bg-warm-accent rounded-full flex items-center justify-center mt-1">
                <span className="text-sm font-semibold text-white">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {situation.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {situation.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-soft-beige rounded-xl p-8 shadow-soft">
            <p className="text-lg text-primary mb-4">
              💡 <strong>Pamiętaj:</strong> nie musisz być w kryzysie, żeby skorzystać z terapii.
            </p>
            <p className="text-muted-foreground">
              Czasem wystarczy, że chcesz mieć kogoś, kto wysłucha, zrozumie i pomoże spojrzeć 
              na życie z nowej perspektywy. To jest w porządku – i bardzo cenne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;