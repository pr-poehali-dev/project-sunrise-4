import { useReveal } from "@/hooks/use-reveal"

const phases = [
  {
    weeks: "Неделя 1-2",
    title: "Анализ и DELETE",
    description: "Аудит текущих процессов, выявление и удаление дублирующих операций",
    color: "bg-destructive",
    borderColor: "border-destructive/30",
    tag: "DELETE",
  },
  {
    weeks: "Неделя 3-4",
    title: "DELEGATE",
    description: "Обучение смежных подразделений, передача функций, закрепление ответственности",
    color: "bg-primary",
    borderColor: "border-primary/30",
    tag: "DELEGATE",
  },
  {
    weeks: "Неделя 5-6",
    title: "DEFER",
    description: "Разработка оптимальных графиков, внедрение системы приоритизации",
    color: "bg-accent",
    borderColor: "border-accent/30",
    tag: "DEFER",
  },
  {
    weeks: "Неделя 7-12",
    title: "DO",
    description: "Запуск новой модели работы, контроль показателей, корректировка",
    color: "bg-foreground/50",
    borderColor: "border-foreground/20",
    tag: "DO",
  },
]

export function SlideTimeline() {
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
            / 10 План внедрения
          </span>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-12 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Поэтапный <span className="text-foreground/40">переход</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[17px] top-0 bottom-0 hidden w-px bg-foreground/10 md:block" />

          <div className="space-y-4 md:space-y-6">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`flex gap-4 transition-all duration-700 md:gap-8 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${250 + i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="relative hidden shrink-0 md:flex md:w-9 md:items-start md:justify-center md:pt-6">
                  <div className={`h-3.5 w-3.5 rounded-full ${phase.color} ring-4 ring-background`} />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-xl border bg-foreground/5 p-5 backdrop-blur-sm transition-colors hover:bg-foreground/[0.08] md:p-6 ${phase.borderColor}`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-xs text-white/90 ${phase.color}`}>
                      {phase.tag}
                    </span>
                    <span className="font-mono text-xs text-foreground/50">
                      {phase.weeks}
                    </span>
                  </div>
                  <h3 className="mb-1 font-sans text-lg font-light text-foreground md:text-xl">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/60">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control note */}
        <div
          className={`mt-8 flex items-center gap-3 transition-all duration-700 md:mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="h-px flex-1 bg-foreground/10" />
          <span className="font-mono text-xs text-foreground/40">
            Контроль: еженедельные отчёты + обратная связь от цехов
          </span>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>
      </div>
    </section>
  )
}
