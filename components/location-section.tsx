export function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] uppercase text-rainbow text-center mb-16">
          Локация
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Info */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-light text-[#5a7247] mb-4">Hedonist</h3>
            <p className="text-[#6b6b6b] text-sm mb-6">
              Покровский бул., 8, стр. 1, Москва
            </p>
            <p className="text-[#3d3d3d] italic">* Сбор гостей - 17:30</p>
          </div>

          {/* Image with button */}
          <div className="order-1 md:order-2 relative">
            <img
              src="/elegant-rustic-event-house-venue-with-green-lawn-a.jpg"
              alt="Hedonist"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <a
              href="https://yandex.ru/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 md:right-[-20px] md:top-1/2 md:-translate-y-1/2 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-xs tracking-[0.1em] uppercase text-[#3d3d3d]">
                Как
                <br />
                добраться
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
