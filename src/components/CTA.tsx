import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg3.png";

const CTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 w-full">
      <div
        className="
          w-full
          max-w-[1600px] mx-auto
          rounded-[2.5rem]
          overflow-hidden
          relative
        "
      >
        {/* === BACKGROUND LAYERS (как в PlatformHero) === */}
        <div className="absolute inset-0 z-0">
          {/* Базовый градиент-фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy-light" />

          {/* Анимированный градиент поверх */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/20 animate-pulse"
            style={{ animationDuration: "8s" }}
          />

          {/* Картинка фоном с overlay */}
          <img
            src={heroBg}
            alt="Casino CTA Background"
            className="w-full h-full object-cover opacity-25 mix-blend-overlay"
          />

          {/* Геометрический/радальный паттерн */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 40%, hsl(var(--primary) / 0.16) 0%, transparent 55%),
                radial-gradient(circle at 80% 75%, hsl(var(--primary) / 0.18) 0%, transparent 55%),
                radial-gradient(circle at 45% 15%, hsl(var(--gold) / 0.18) 0%, transparent 45%)
              `,
            }}
          />

          {/* Орбы */}
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gold/18 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "9s", animationDelay: "1.5s" }}
          />

          {/* Нижний fade, чтобы текст читался */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/80" />
        </div>

        {/* === CONTENT === */}
        <div className="relative z-10 px-6 sm:px-16 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Ready to Launch Your
            <span className="block text-primary mt-2">Casino Platform?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Join successful operators who trust our proven casino solutions.
            Get started today with a personalized consultation.
          </p>

          {/* Кнопка как в PlatformHero, но чёрная и без затемнения */}
          <div className="pt-10 flex justify-center">
         <Button
           size="lg"
           className="
             w-full sm:w-56
             px-8 py-6
             text-base sm:text-lg
             font-semibold
             bg-primary text-primary-foreground
             hover:bg-primary/90
             shadow-[0_0_40px_hsl(var(--primary)/0.4)]
             transition-all
           "
         >
           Schedule Demo
         </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;