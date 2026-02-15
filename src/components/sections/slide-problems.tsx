import { useReveal } from "@/hooks/use-reveal"

const metrics = [
  { value: "70%", label: "на рутину", color: "text-destructive" },
  { value: "40%", label: "дублирование", color: "text-foreground/80" },
  { value: "3 ч", label: "реакция", color: "text-foreground/80" },
  { value: "3/3", label: "спец. на цеха", color: "text-foreground/80" },
]

const problems = [
  "Избыточные совещания без результатов",
  "Дублирование проверок между специалистами",
  "Ручной сбор данных и бумажные отчёты",
  "Низкая вовлечённость линейного персонала",
]

const timeDistribution = [
  { label: "Рутина", percent: 70, color: "bg-destructive/80" },
  { label: "Инциденты", percent: 20, color: "bg-primary" },
  { label: "Стратегия", percent: 10, color: "bg-accent" },
]

export function SlideProblems() {
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
            / 03 Проблематика
          </span>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-10 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Почему нужна <span className="text-foreground/40">оптимизация?</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: metrics and chart */}
          <div>
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-2">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className={`rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 backdrop-blur-sm transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className={`font-sans text-2xl font-light md:text-3xl ${m.color}`}>
                    {m.value}
                  </div>
                  <div className="font-mono text-xs text-foreground/60">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Time distribution bar */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "650ms" }}
            >
              <div className="mb-3 font-mono text-xs text-foreground/60">
                Распределение времени сейчас
              </div>
              <div className="flex h-8 w-full overflow-hidden rounded-lg">
                {timeDistribution.map((item, i) => (
                  <div
                    key={i}
                    className={`${item.color} flex items-center justify-center transition-all duration-1000`}
                    style={{
                      width: isVisible ? `${item.percent}%` : "0%",
                      transitionDelay: `${800 + i * 150}ms`,
                    }}
                  >
                    <span className="text-xs font-medium text-white/90">
                      {item.percent}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between">
                {timeDistribution.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className={`h-2 w-2 rounded-full ${item.color}`} />
                    <span className="font-mono text-xs text-foreground/50">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: problems list */}
          <div>
            <div
              className={`mb-4 font-mono text-xs text-foreground/60 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Ключевые проблемы
            </div>
            <div className="space-y-3">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4 backdrop-blur-sm transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + i * 120}ms` }}
                >
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                  <span className="text-sm leading-relaxed text-foreground/80 md:text-base">
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
