import { useReveal } from "@/hooks/use-reveal"

const schedule = [
  {
    frequency: "Еженедельно",
    color: "bg-primary",
    borderColor: "border-primary/30",
    tasks: [
      "Детальные проверки документации",
      "Анализ микротравм и происшествий",
    ],
  },
  {
    frequency: "Ежемесячно",
    color: "bg-accent",
    borderColor: "border-accent/30",
    tasks: [
      "Аудит систем вентиляции",
      "Анализ показателей безопасности",
    ],
  },
  {
    frequency: "Квартально",
    color: "bg-foreground/50",
    borderColor: "border-foreground/20",
    tasks: [
      "Полный аудит СУОТ",
      "Оценка профессиональных рисков",
    ],
  },
]

export function SlideDefer() {
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
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
              / 07 DEFER
            </span>
          </div>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-10 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Планируем <span className="text-foreground/40">разумно</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:gap-12">
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 hover:bg-foreground/[0.08] md:p-6 ${item.borderColor} ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${250 + i * 150}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${item.color}`} />
                  <span className="font-mono text-sm font-medium text-foreground">
                    {item.frequency}
                  </span>
                  {/* Frequency indicator dots */}
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: i === 0 ? 4 : i === 1 ? 2 : 1 }).map((_, j) => (
                      <div
                        key={j}
                        className={`h-1.5 w-4 rounded-full ${item.color} opacity-60`}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  {item.tasks.map((task, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 rounded-lg bg-foreground/5 px-4 py-2.5"
                    >
                      <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.color} opacity-50`} />
                      <span className="text-sm text-foreground/70">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Effect card */}
          <div
            className={`flex items-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            <div className="rounded-xl border border-accent/20 bg-accent/5 px-6 py-8 backdrop-blur-sm lg:px-8">
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-accent/60">
                Выгода
              </div>
              <div className="mb-1 font-sans text-4xl font-light text-accent md:text-5xl">
                -25%
              </div>
              <div className="max-w-[200px] text-sm leading-relaxed text-foreground/60">
                снижение операционной нагрузки
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
