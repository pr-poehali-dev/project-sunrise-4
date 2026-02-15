import { useReveal } from "@/hooks/use-reveal"

const delegations = [
  {
    target: "Мастерам участков",
    tasks: ["Ежедневный контроль СИЗ", "Первичный осмотр рабочих мест"],
    color: "border-primary/30",
    dotColor: "bg-primary",
  },
  {
    target: "Отделу кадров",
    tasks: ["Учёт медосмотров", "Контроль медкнижек"],
    color: "border-accent/30",
    dotColor: "bg-accent",
  },
  {
    target: "Отделу снабжения",
    tasks: ["Учёт и выдача СИЗ"],
    color: "border-foreground/20",
    dotColor: "bg-foreground/50",
  },
  {
    target: "ИТ-отделу",
    tasks: ["Поддержка систем", "Автоматизация отчётов"],
    color: "border-primary/30",
    dotColor: "bg-primary",
  },
]

export function SlideDelegate() {
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
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
              / 06 DELEGATE
            </span>
          </div>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-10 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Распределяем
          <br />
          <span className="text-foreground/40">ответственность</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:gap-12">
          <div className="grid gap-4 md:grid-cols-2">
            {delegations.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 hover:bg-foreground/[0.08] ${item.color} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${250 + i * 120}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-foreground/40">ОТ</span>
                    <span className="text-foreground/30">&rarr;</span>
                  </div>
                  <div className={`h-1.5 w-1.5 rounded-full ${item.dotColor}`} />
                  <span className="font-sans text-sm font-medium text-foreground">
                    {item.target}
                  </span>
                </div>
                <div className="space-y-1.5 pl-4 border-l border-foreground/10">
                  {item.tasks.map((task, j) => (
                    <div key={j} className="text-sm text-foreground/60">
                      {task}
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
            style={{ transitionDelay: "800ms" }}
          >
            <div className="rounded-xl border border-accent/20 bg-accent/5 px-6 py-8 backdrop-blur-sm lg:px-8">
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-accent/60">
                Результат
              </div>
              <div className="mb-1 font-sans text-4xl font-light text-accent md:text-5xl">
                +20%
              </div>
              <div className="max-w-[200px] text-sm leading-relaxed text-foreground/60">
                высвобождение рабочего времени
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
