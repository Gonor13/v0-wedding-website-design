import { MapPin, Heart, Utensils, Sparkles } from "lucide-react"

const events = [
  {
    time: "16:00",
    title: "СБОР ГОСТЕЙ",
    icon: MapPin,
    color: "#e8a0a0",
  },
  {
    time: "16:15",
    title: "ЦЕРЕМОНИЯ РЕГИСТРАЦИИ",
    icon: Heart,
    color: "#d4c4b5",
  },
  {
    time: "17:30",
    title: "БАНКЕТ",
    icon: Utensils,
    color: "#3d3d3d",
  },
]

export function TimelineSection() {
  return (
    <section className="py-20 bg-[#f5f4f2]">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] uppercase text-rainbow mb-16">Тайминг</h2>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ color: event.color }}
              >
                <event.icon size={28} strokeWidth={1} />
              </div>
              <p className="text-lg font-light text-[#3d3d3d] mb-1">{event.time}</p>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: event.color }}>
                {event.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
