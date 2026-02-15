import { useReveal } from "@/hooks/use-reveal"

const specialists = [
  {
    role: "Оперативный",
    label: "Специалист 1",
    color: "border-primary/30",
    dotColor: "bg-primary",
    tagColor: "bg-primary/10 text-primary",
    tasks: [
      "Расследование инцидентов",
      "Внеплановые проверки",
      "Взаимодействие с надзорными органами",
      "Обучение по сложным вопросам",
    ],
  },
  {
    role: "Стратегический",
    label: "Специалист 2",
    color: "border-accent/30",
    dotColor: "bg-accent",
    tagColor: "bg-accent/10 text-accent",
    tasks: [
      "Планирование мероприятий ОТ",
      "Анализ эффективности системы",
      "Развитие культуры безопасности",
      "Внедрение новых технологий",
    ],
  },
]

export function SlideDo() {
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
            <div className="h-2 w-2 rounded-full bg-foreground/60" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
              / 08 DO
            </span>
          </div>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-12 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Чем будут заниматься
          <br />
          <span className="text-foreground/40">2 специалиста?</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {specialists.map((spec, i) => (
            <div
              key={i}
              className={`rounded-xl border bg-foreground/5 p-6 backdrop-blur-sm transition-all duration-700 hover:bg-foreground/[0.08] md:p-8 ${spec.color} ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : i === 0
                    ? "-translate-x-12 opacity-0"
                    : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 150}ms` }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-foreground/40">{spec.label}</span>
                  <h3 className="mt-1 font-sans text-2xl font-light text-foreground md:text-3xl">
                    {spec.role}
                  </h3>
                </div>
                <div
                  className={`rounded-full px-3 py-1 font-mono text-xs ${spec.tagColor}`}
                >
                  {i === 0 ? "Action" : "Strategy"}
                </div>
              </div>

              <div className="space-y-3">
                {spec.tasks.map((task, j) => (
                  <div
                    key={j}
                    className={`flex items-center gap-3 transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${450 + i * 150 + j * 80}ms` }}
                  >
                    <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${spec.dotColor}`} />
                    <span className="text-sm leading-relaxed text-foreground/70 md:text-base">
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 flex items-center gap-3 transition-all duration-700 md:mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="h-px flex-1 bg-foreground/10" />
          <span className="font-mono text-xs text-foreground/40">
            Чёткое разделение = нулевое дублирование
          </span>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>
      </div>
    </section>
  )
}
