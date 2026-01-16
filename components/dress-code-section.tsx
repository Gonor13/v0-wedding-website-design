export function DressCodeSection() {
  const colors = [
    { color: "#d4c4b5", name: "Бежевый" },
    { color: "#c5c9cc", name: "Серый" },
    { color: "#a8b5a0", name: "Шалфей" },
    { color: "#5a7247", name: "Зелёный" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] uppercase text-rainbow mb-8">Дресс-код</h2>

        <p className="text-[#6b6b6b] text-sm leading-relaxed mb-10">
          Мы очень ждём и готовимся к нашему незабываемому дню!
          <br />
          Поддержите нас Вашими улыбками и объятиями, а также
          <br />
          красивыми нарядами в палитре мероприятия
        </p>

        {/* Color Palette */}
        <div className="flex items-center justify-center gap-4">
          {colors.map((item, index) => (
            <div
              key={index}
              className="w-16 h-20 md:w-20 md:h-24 rounded-sm border border-[#e5e5e5]"
              style={{ backgroundColor: item.color }}
              title={item.name}
            />
          ))}
        </div>

        {/* Vertical line */}
        <div className="w-px h-20 bg-[#d4d4d4] mx-auto mt-16" />
      </div>
    </section>
  )
}
