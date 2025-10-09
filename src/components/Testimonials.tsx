import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    // Load ZnanyLekarz widget script
    const script = document.createElement('script');
    script.id = 'zl-widget-s';
    script.src = '//platform.docplanner.com/js/widget.js';
    script.async = true;
    
    if (!document.getElementById('zl-widget-s')) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('zl-widget-s');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-soft-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
            Głosy zaufania
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poniżej znajdziesz autentyczne opinie pacjentów z portalu ZnanyLekarz.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/50 max-w-4xl w-full">
            <a 
              id="zl-url" 
              className="zl-url block" 
              href="https://www.znanylekarz.pl/barbara-wojnarowska/psycholog/szczecin" 
              rel="nofollow" 
              data-zlw-doctor="barbara-wojnarowska" 
              data-zlw-type="big" 
              data-zlw-opinion="true" 
              data-zlw-hide-branding="true" 
              data-zlw-saas-only="true" 
              data-zlw-a11y-title="Widget umówienia wizyty lekarskiej"
            >
              Barbara Wojnarowska - ZnanyLekarz.pl
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gold/20 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-foreground mb-4">
              Prywatność i dyskrecja
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wszystkie opinie zostały udostępnione przez pacjentów. 
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