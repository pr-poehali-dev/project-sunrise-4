import { useReveal } from "@/hooks/use-reveal"

const removedItems = [
  "Дублирующие обходы одних и тех же объектов",
  "Повторные отчёты в разных системах",
  "Бумажный документооборот (перевод в цифру)",
  "Формальные проверки без реального эффекта",
  "Избыточные совещания (объединяем в одно)",
]

export function SlideDelete() {
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
            <div className="h-2 w-2 rounded-full bg-destructive" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
              / 05 DELETE
            </span>
          </div>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-10 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Убираем лишнее
          <br />
          <span className="text-foreground/40">без потери качества</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:gap-16">
          <div className="space-y-3">
            {removedItems.map((item, i) => (
              <div
                key={i}
                className={`group flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4 backdrop-blur-sm transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${250 + i * 120}ms` }}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10">
                  <span className="text-xs text-destructive">&times;</span>
                </div>
                <span className="text-sm text-foreground/50 line-through decoration-foreground/20 md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Effect card */}
          <div
            className={`flex items-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="rounded-xl border border-accent/20 bg-accent/5 px-6 py-8 backdrop-blur-sm lg:px-8">
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-accent/60">
                Эффект
              </div>
              <div className="mb-1 font-sans text-4xl font-light text-accent md:text-5xl">
                -30%
              </div>
              <div className="max-w-[200px] text-sm leading-relaxed text-foreground/60">
                сокращение рутинных операций
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
