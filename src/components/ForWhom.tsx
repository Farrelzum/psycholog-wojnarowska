const ForWhom = () => {
  const situations = [
    {
      title: "Gdy czujesz się przytłoczony",
      description: "Życie czasami przynosi więcej wyzwań niż jesteś w stanie udźwignąć. Stres w pracy, problemy w relacjach, trudne decyzje - wszystko to może sprawić, że czujesz się zagubiony."
    },
    {
      title: "Kiedy coś się w życiu zmieniło",
      description: "Rozwód, utrata bliskiej osoby, zmiana pracy, przeprowadzka - duże zmiany, nawet pozytywne, mogą być wyzwaniem. Nie musisz radzić sobie z nimi sam."
    },
    {
      title: "Gdy relacje przestają dawać radość",
      description: "Konflikty z partnerem, trudności w komunikacji z dziećmi, poczucie samotności wśród innych ludzi - relacje to serce naszego życia i warto o nie dbać."
    },
    {
      title: "Kiedy chcesz lepiej siebie poznać",
      description: "Czasem po prostu czujesz, że chcesz więcej od życia, lepiej rozumieć swoje reakcje, odkryć swoje mocne strony czy znaleźć kierunek rozwoju."
    },
    {
      title: "Gdy przeszłość wciąż boli",
      description: "Traumatyczne doświadczenia, krzywdy z dzieciństwa, trudne wspomnienia - wszystko to może wpływać na Twoje dzisiejsze życie i zasługuje na uwagę i uzdrowienie."
    },
    {
      title: "Kiedy lęk ogranicza Twoje życie",
      description: "Ataki paniki, fobie, nadmierna troska o przyszłość - lęk to naturalna emocja, ale gdy zaczyna dominować w życiu, warto poszukać wsparcia."
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
            Każdy ma prawo do wsparcia. Oto sytuacje, w których najczęściej się spotykamy - 
            może rozpoznasz w nich coś ze swojego doświadczenia.
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
              <strong>Pamiętaj:</strong> Nie musisz być w kryzysie, żeby skorzystać z terapii.
            </p>
            <p className="text-muted-foreground">
              Czasem po prostu chcesz mieć kogoś, kto wysłucha, zrozumie i pomoże Ci 
              spojrzeć na życie z nowej perspektywy. To jest w porządku i bardzo cenne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;