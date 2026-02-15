import { MagneticButton } from "@/components/magnetic-button"

export function SlideTitle({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <section className="flex min-h-screen w-screen shrink-0 flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-24">
      <div className="max-w-4xl">
        <div className="mb-4 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md duration-700">
          <p className="font-mono text-xs text-foreground/90">Оптимизация охраны труда</p>
        </div>
        <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-8 font-sans text-5xl font-light leading-[1.1] tracking-tight text-foreground duration-1000 md:text-6xl lg:text-7xl">
          <span className="text-balance">
            От рутины к стратегии:
            <br />
            <span className="text-foreground/50">оптимизация работы ОТ</span>
            <br />
            в 3 цехах
          </span>
        </h1>
        <p className="mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 text-base leading-relaxed text-foreground/80 duration-1000 delay-200 md:text-lg">
          Как 2 специалиста могут эффективно заменить 3 за счёт системного подхода и цифровизации
        </p>
        <div className="flex animate-in fade-in slide-in-from-bottom-4 items-center gap-8 duration-1000 delay-300">
          {[
            { value: "2", label: "специалиста" },
            { value: "3", label: "цеха" },
            { value: "1", label: "система" },
          ].map((item, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-sans text-3xl font-light text-foreground md:text-4xl">{item.value}</span>
              <span className="font-mono text-xs text-foreground/50">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex animate-in fade-in slide-in-from-bottom-4 gap-4 duration-1000 delay-500">
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(1)}>
            Начать презентацию
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500">
        <div className="flex items-center gap-2">
          <p className="font-mono text-xs text-foreground/80">Листайте вправо</p>
          <div className="flex h-6 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/15 backdrop-blur-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-foreground/80" />
          </div>
        </div>
      </div>
    </section>
  )
}
