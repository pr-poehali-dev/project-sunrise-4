import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    letter: "D",
    title: "DELETE",
    subtitle: "Удалить",
    description: "Исключить избыточные процессы, которые не добавляют ценности безопасности",
    accent: "border-destructive/30 hover:border-destructive/50",
    dotColor: "bg-destructive",
    titleColor: "text-destructive",
  },
  {
    number: "02",
    letter: "D",
    title: "DELEGATE",
    subtitle: "Делегировать",
    description: "Передать функции другим подразделениям, которые могут выполнять их эффективнее",
    accent: "border-primary/30 hover:border-primary/50",
    dotColor: "bg-primary",
    titleColor: "text-primary",
  },
  {
    number: "03",
    letter: "D",
    title: "DEFER",
    subtitle: "Отложить / Планировать",
    description: "Оптимизировать периодичность задач, убрав избыточную частоту проверок",
    accent: "border-accent/30 hover:border-accent/50",
    dotColor: "bg-accent",
    titleColor: "text-accent",
  },
  {
    number: "04",
    letter: "D",
    title: "DO",
    subtitle: "Делать",
    description: "Сосредоточиться на ключевых задачах, которые реально влияют на безопасность",
    accent: "border-foreground/20 hover:border-foreground/40",
    dotColor: "bg-foreground/60",
    titleColor: "text-foreground",
  },
]

export function Slide4D() {
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
            / 04 Методология
          </span>
        </div>

        <h2
          className={`mb-10 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-14 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          4 шага <span className="text-foreground/40">к эффективности</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group rounded-xl border bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 hover:bg-foreground/[0.08] md:p-6 ${step.accent} ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 120}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs text-foreground/40">{step.number}</span>
                <div className={`h-2 w-2 rounded-full ${step.dotColor}`} />
              </div>

              <div className="mb-1">
                <span className={`font-mono text-2xl font-bold tracking-wider md:text-3xl ${step.titleColor}`}>
                  {step.title}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-mono text-xs text-foreground/60">{step.subtitle}</span>
              </div>

              <p className="text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 flex items-center gap-3 transition-all duration-700 md:mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="h-px flex-1 bg-foreground/10" />
          <span className="font-mono text-xs text-foreground/40">
            Каждый шаг снижает нагрузку на команду ОТ
          </span>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>
      </div>
    </section>
  )
}
