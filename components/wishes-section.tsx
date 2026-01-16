"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const wishes = [
  {
    text: "Будем очень признательны, если Вы воздержитесь от криков «Горько». Ведь поцелуй — это знак выражения чувств, и он не может быть по заказу.",
  },
  {
    text: "Просим вас не дарить цветы — лучше порадуйте нас вашим присутствием и хорошим настроением!",
  },
  {
    text: "Если вы хотите произнести тост или подготовить сюрприз, пожалуйста, согласуйте это с нашим координатором заранее.",
  },
]

export function WishesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextWish = () => {
    setCurrentIndex((prev) => (prev + 1) % wishes.length)
  }

  const prevWish = () => {
    setCurrentIndex((prev) => (prev - 1 + wishes.length) % wishes.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Quotation marks */}
        <div className="flex justify-between items-start mb-8">
          <span className="text-6xl text-[#e5e5e5] font-serif leading-none">"</span>
          <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] uppercase text-rainbow">Пожелания</h2>
          <span className="text-6xl text-[#e5e5e5] font-serif leading-none">"</span>
        </div>

        {/* Wish text */}
        <p className="text-[#3d3d3d] leading-relaxed mb-10 min-h-[80px]">{wishes[currentIndex].text}</p>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={prevWish}
              className="text-[#d4d4d4] hover:text-[#3d3d3d] transition-colors"
              aria-label="Предыдущее"
            >
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
            <span className="text-sm text-[#6b6b6b]">
              {currentIndex + 1} / {wishes.length}
            </span>
            <button
              onClick={nextWish}
              className="text-[#d4d4d4] hover:text-[#3d3d3d] transition-colors"
              aria-label="Следующее"
            >
              <ChevronRight size={24} strokeWidth={1} />
            </button>
          </div>
          <p className="text-sm text-[#6b6b6b] italic">with love.</p>
        </div>
      </div>
    </section>
  )
}
