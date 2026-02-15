import { useReveal } from "@/hooks/use-reveal"

const transformations = [
  { from: "От реагирования", to: "к предотвращению" },
  { from: "От количества проверок", to: "к качеству профилактики" },
  { from: "От бумажного документооборота", to: "к цифровым решениям" },
  { from: "От разрозненной работы", to: "к единой системе" },
]

export function SlideVision() {
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
            / 02 Видение
          </span>
        </div>

        <h2
          className={`mb-6 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-8 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Наша цель: <span className="text-foreground/40">проактивная система</span>
          <br />
          охраны труда
        </h2>

        <div
          className={`mb-10 rounded-xl border border-accent/20 bg-accent/5 px-6 py-4 backdrop-blur-sm transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="max-w-3xl text-sm leading-relaxed text-foreground/90 md:text-lg">
            &laquo;Превращаем ОТ из <span className="text-accent font-medium">&laquo;пожарной команды&raquo;</span> в центр превентивного управления рисками&raquo;
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {transformations.map((item, i) => (
            <div
              key={i}
              className={`group flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/5 px-5 py-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/[0.08] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${350 + i * 120}ms` }}
            >
              <div className="shrink-0">
                <span className="font-mono text-xs text-foreground/40">0{i + 1}</span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-sm text-foreground/50 line-through decoration-foreground/20 md:text-base">
                  {item.from}
                </span>
              </div>
              <div className="shrink-0 px-2">
                <span className="text-accent text-lg">&rarr;</span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-sm font-medium text-accent md:text-base">
                  {item.to}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
