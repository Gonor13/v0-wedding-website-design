export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Vertical line */}
        <div className="w-px h-16 bg-[#d4d4d4] mx-auto mb-12" />

        <h2 className="text-2xl md:text-4xl font-light tracking-[0.15em] uppercase text-[#3d3d3d] mb-8 italic">
          Узнали этих малышей?
        </h2>

        <p className="text-[#6b6b6b] leading-relaxed mb-10 text-sm md:text-base">
          Время пролетело незаметно. И вот наступил момент, когда наши детские мечты стали реальностью. Разделите с нами
          это главное событие лета — подарите нам своё внимание и поддержку!
        </p>

        {/* Cute couple illustration */}
        <div className="flex justify-center">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" className="text-[#3d3d3d]">
            {/* Simple line drawing of couple */}
            <circle cx="30" cy="20" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M30 30 L30 55 M20 40 L40 40 M30 55 L20 75 M30 55 L40 75" stroke="currentColor" strokeWidth="1" />
            <circle cx="70" cy="20" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M70 30 L70 55 M60 40 L80 40 M70 55 L60 75 M70 55 L80 75" stroke="currentColor" strokeWidth="1" />
            {/* Hearts */}
            <path
              d="M45 15 C45 10 50 10 50 15 C50 10 55 10 55 15 C55 20 50 25 50 25 C50 25 45 20 45 15"
              fill="#a8b5a0"
              opacity="0.5"
            />
            <path
              d="M25 5 C25 3 27 3 27 5 C27 3 29 3 29 5 C29 7 27 9 27 9 C27 9 25 7 25 5"
              fill="#d4c4b5"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
