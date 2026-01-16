export function CalendarSection() {
  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]

  // March 2026 calendar - starts on Sunday (1st is Sunday)
  const marchDays = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, null, null, null, null, null],
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] uppercase text-rainbow mb-8">Мы ждём вас</h2>

        {/* Month */}
        <p className="text-lg tracking-[0.3em] uppercase text-[#6b6b6b] mb-6 italic">Март</p>

        {/* Calendar Grid */}
        <div className="mb-8">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map((day, i) => (
              <div key={day} className={`text-xs tracking-wider py-2 ${i === 4 ? "text-[#5a7247]" : "text-[#9a9a9a]"}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          {marchDays.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`py-2 text-sm font-light ${day === 6 ? "relative" : day ? "text-[#3d3d3d]" : ""}`}
                >
                  {day === 6 ? (
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#3d3d3d]">
                      {day}
                    </span>
                  ) : (
                    day
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Message */}
        <p className="text-[#6b6b6b] text-sm mb-4">
          Не пропустите важное событие этого лета —<br />
          день нашей свадьбы!
        </p>

        {/* Date */}
        <p className="text-2xl md:text-3xl font-light tracking-[0.2em] text-[#3d3d3d]">06 / 03 / 26</p>
      </div>
    </section>
  )
}
