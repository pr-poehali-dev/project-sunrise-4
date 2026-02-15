import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const roadmapItems = [
  {
    icon: "Brain",
    title: "AI-аналитика",
    description: "Внедрение AI для прогнозирования рисков и предотвращения инцидентов",
    timeline: "Q1 2026",
  },
  {
    icon: "Smartphone",
    title: "Мобильное приложение ОТ",
    description: "Разработка полноценного приложения для специалистов и работников",
    timeline: "Q2 2026",
  },
  {
    icon: "Trophy",
    title: "Геймификация безопасности",
    description: "Система мотивации и вовлечения через игровые механики",
    timeline: "Q3 2026",
  },
  {
    icon: "Share2",
    title: "Тиражирование опыта",
    description: "Распространение модели на другие подразделения компании",
    timeline: "2027",
  },
]

export function SlideNextSteps() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
            / 13 Дорожная карта
          </span>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-10 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Куда движемся <span className="text-foreground/40">дальше?</span>
        </h2>

        <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {roadmapItems.map((item, i) => (
            <div
              key={i}
              className={`group rounded-xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/[0.08] md:p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 120}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon name={item.icon} className="h-5 w-5 text-accent" />
                </div>
                <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 font-mono text-xs text-foreground/50">
                  {item.timeline}
                </span>
              </div>
              <h3 className="mb-1.5 font-sans text-lg font-light text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`rounded-xl border border-accent/20 bg-accent/5 px-6 py-6 text-center backdrop-blur-sm transition-all duration-700 md:px-8 md:py-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="mb-4 text-base text-foreground/80 md:text-lg">
            Давайте вместе создадим{" "}
            <span className="font-medium text-accent">эталонную систему охраны труда!</span>
          </p>
          <MagneticButton variant="primary" size="lg">
            Обсудить проект
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
