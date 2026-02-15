import { useReveal } from "@/hooks/use-reveal"

const bigNumbers = [
  {
    value: "6 млн",
    unit: "руб./год",
    label: "Экономия ФОТ",
    color: "text-accent",
  },
  {
    value: "15+ млн",
    unit: "руб./год",
    label: "Снижение рисков",
    color: "text-primary",
  },
  {
    value: "250%",
    unit: "",
    label: "ROI за первый год",
    color: "text-accent",
  },
]

const investments = [
  { item: "Обучение персонала", cost: "0.5 млн руб." },
  { item: "Цифровизация процессов", cost: "1.2 млн руб." },
]

export function SlideROI() {
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
            / 12 Окупаемость
          </span>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-12 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          ROI <span className="text-foreground/40">проекта</span>
        </h2>

        {/* Big numbers */}
        <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-3 md:gap-8">
          {bigNumbers.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur-sm transition-all duration-700 hover:bg-foreground/[0.08] md:p-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 150}ms` }}
            >
              <div className="mb-1 font-mono text-xs text-foreground/40">{item.label}</div>
              <div className={`font-sans text-4xl font-light md:text-5xl ${item.color}`}>
                {item.value}
              </div>
              {item.unit && (
                <div className="mt-1 font-mono text-xs text-foreground/50">{item.unit}</div>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Investments */}
          <div
            className={`rounded-xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-foreground/40">
              Инвестиции
            </div>
            <div className="space-y-3">
              {investments.map((inv, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">{inv.item}</span>
                  <span className="font-mono text-sm text-foreground/80">{inv.cost}</span>
                </div>
              ))}
              <div className="border-t border-foreground/10 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/80">Итого</span>
                  <span className="font-mono text-sm font-medium text-foreground">1.7 млн руб.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payback */}
          <div
            className={`flex items-center rounded-xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "850ms" }}
          >
            <div className="text-center w-full">
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-accent/60">
                Срок окупаемости
              </div>
              <div className="font-sans text-5xl font-light text-accent md:text-6xl">
                4-6
              </div>
              <div className="mt-1 text-sm text-foreground/60">месяцев</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
