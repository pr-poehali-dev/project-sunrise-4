import { useReveal } from "@/hooks/use-reveal"

const metrics = [
  {
    label: "Время на рутину",
    before: 70,
    after: 40,
    change: "-30%",
    unit: "%",
  },
  {
    label: "Время на стратегию",
    before: 10,
    after: 30,
    change: "+200%",
    unit: "%",
  },
  {
    label: "Дублирование",
    before: 40,
    after: 10,
    change: "-75%",
    unit: "%",
  },
  {
    label: "Скорость реакции",
    before: 3,
    after: 1,
    change: "-67%",
    unit: " ч",
    maxBar: 3,
  },
]

const qualitative = [
  "Повышение вовлечённости линейного персонала",
  "Формирование культуры безопасности",
  "Прозрачная система отчётности",
  "Проактивное управление рисками",
]

export function SlideResults() {
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
            / 11 Результаты
          </span>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-10 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Что получим <span className="text-foreground/40">через 3 месяца?</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:gap-12">
          {/* Metrics with bars */}
          <div className="space-y-5">
            {metrics.map((m, i) => {
              const maxVal = m.maxBar || 100
              const beforeWidth = (m.before / maxVal) * 100
              const afterWidth = (m.after / maxVal) * 100

              return (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${250 + i * 120}ms` }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-foreground/70 md:text-base">{m.label}</span>
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-medium text-accent">
                      {m.change}
                    </span>
                  </div>
                  {/* Before bar */}
                  <div className="mb-1.5 flex items-center gap-3">
                    <span className="w-14 shrink-0 font-mono text-xs text-foreground/40">
                      Было
                    </span>
                    <div className="h-5 flex-1 overflow-hidden rounded-md bg-foreground/5">
                      <div
                        className="flex h-full items-center rounded-md bg-foreground/20 px-2 transition-all duration-1000"
                        style={{
                          width: isVisible ? `${beforeWidth}%` : "0%",
                          transitionDelay: `${400 + i * 120}ms`,
                        }}
                      >
                        <span className="font-mono text-xs text-foreground/60">
                          {m.before}{m.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* After bar */}
                  <div className="flex items-center gap-3">
                    <span className="w-14 shrink-0 font-mono text-xs text-accent/70">
                      Стало
                    </span>
                    <div className="h-5 flex-1 overflow-hidden rounded-md bg-foreground/5">
                      <div
                        className="flex h-full items-center rounded-md bg-accent/30 px-2 transition-all duration-1000"
                        style={{
                          width: isVisible ? `${afterWidth}%` : "0%",
                          transitionDelay: `${550 + i * 120}ms`,
                        }}
                      >
                        <span className="font-mono text-xs text-accent">
                          {m.after}{m.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Qualitative effects */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="rounded-xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur-sm">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-foreground/40">
                Качественные эффекты
              </div>
              <div className="space-y-3">
                {qualitative.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
