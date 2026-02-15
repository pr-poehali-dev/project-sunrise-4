import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const tools = [
  {
    icon: "MessageSquare",
    title: "Единый чат-канал",
    description: "Для всех цехов в реальном времени",
  },
  {
    icon: "BookOpen",
    title: "База знаний",
    description: "По типовым ситуациям и решениям",
  },
  {
    icon: "FileBarChart",
    title: "Автоматизированные отчёты",
    description: "Генерация без ручного ввода",
  },
  {
    icon: "ListChecks",
    title: "Система приоритизации",
    description: "Задачи категорий A / B / C",
  },
  {
    icon: "Smartphone",
    title: "Мобильное приложение",
    description: "Фиксация нарушений на месте",
  },
]

export function SlideTech() {
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
            / 09 Технологии
          </span>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-12 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Цифровизация как
          <br />
          <span className="text-foreground/40">драйвер эффективности</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`group rounded-xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/[0.08] md:p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon name={tool.icon} className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-foreground/40">0{i + 1}</span>
              </div>
              <h3 className="mb-1.5 font-sans text-lg font-light text-foreground">
                {tool.title}
              </h3>
              <p className="text-sm text-foreground/60">{tool.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 rounded-xl border border-accent/20 bg-accent/5 px-6 py-4 backdrop-blur-sm transition-all duration-700 md:mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "850ms" }}
        >
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-accent/60">
              Эффект
            </div>
            <div className="text-sm text-foreground/80 md:text-base">
              Ускорение обработки документов на{" "}
              <span className="font-medium text-accent">25-30%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
