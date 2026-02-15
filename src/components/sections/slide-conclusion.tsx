import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const reasons = [
  {
    icon: "Users",
    title: "Чёткое разделение ролей",
    description: "Оперативник и стратег -- без дублирования функций",
  },
  {
    icon: "Zap",
    title: "Автоматизация рутины",
    description: "Цифровые инструменты вместо бумажных процессов",
  },
  {
    icon: "Handshake",
    title: "Вовлечённость всех подразделений",
    description: "Общая ответственность за безопасность",
  },
  {
    icon: "ShieldCheck",
    title: "Поддержка руководства",
    description: "Административный ресурс для внедрения изменений",
  },
]

export function SlideConclusion() {
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
            / 14 Выводы
          </span>
        </div>

        <h2
          className={`mb-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground transition-all duration-700 md:mb-10 md:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Ключевые <span className="text-foreground/40">выводы</span>
        </h2>

        {/* 4 reasons grid */}
        <div className="mb-8 grid gap-4 md:mb-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`group rounded-xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/[0.08] md:p-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 120}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                <Icon name={reason.icon} className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-1.5 font-sans text-base font-medium text-foreground md:text-lg">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main message */}
        <div
          className={`mb-8 rounded-xl border border-accent/20 bg-accent/5 px-6 py-6 text-center backdrop-blur-sm transition-all duration-700 md:mb-10 md:px-8 md:py-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-foreground/90 md:text-xl">
            &laquo;Мы не сокращаем людей -- мы{" "}
            <span className="font-medium text-accent">оптимизируем процессы</span> для большей
            безопасности и эффективности!&raquo;
          </p>
        </div>

        {/* Contact placeholder */}
        <div
          className={`flex flex-col items-center gap-2 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="h-px w-16 bg-foreground/20" />
          <div className="mt-2 font-mono text-xs text-foreground/40">
            Контакты для обсуждения
          </div>
          <div className="text-sm text-foreground/60">
            Отдел охраны труда | safety@company.ru | ext. 1234
          </div>
        </div>
      </div>
    </section>
  )
}
