export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] uppercase text-rainbow mb-8">Контакты</h2>

        <p className="text-[#6b6b6b] text-sm mb-10">
          По всем вопросам, связанным с мероприятием, Вы можете
          <br />
          связаться с нами:
        </p>

        <div className="flex items-center justify-center gap-8 md:gap-16">
          <div className="text-left">
            <h3 className="text-xl font-light text-[#3d3d3d] mb-2">Виктория</h3>
            <a href="tel:+79268887788" className="text-[#6b6b6b] hover:text-[#5a7247] transition-colors">
              +7 (926) 888-77-88
            </a>
          </div>

          <a
            href="tel:+79268887788"
            className="w-24 h-24 rounded-full border border-[#d4d4d4] flex items-center justify-center text-xs tracking-[0.1em] uppercase text-[#6b6b6b] hover:border-[#5a7247] hover:text-[#5a7247] transition-colors"
          >
            Связаться
          </a>
        </div>

        {/* Large background date */}
        <div className="mt-16 text-[120px] md:text-[200px] font-light text-[#f5f4f2] leading-none select-none">
          06.03.26
        </div>
      </div>
    </section>
  )
}
