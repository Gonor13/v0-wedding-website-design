"use client"

import { useState, useEffect } from "react"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date("2026-03-06T16:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 relative">
      {/* Background with white roses */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/white-roses-soft-elegant-floral-background.jpg')`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-16 text-center shadow-sm">
          <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] uppercase text-rainbow mb-10">
            До нашей свадьбы осталось
          </h2>

          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="text-center">
              <div className="border border-[#e5e5e5] rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
                <span className="text-3xl md:text-5xl font-light text-[#3d3d3d]">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#a8b5a0] mt-2">Дней</p>
            </div>

            <div className="text-center">
              <div className="border border-[#e5e5e5] rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
                <span className="text-3xl md:text-5xl font-light text-[#3d3d3d]">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#a8b5a0] mt-2">Часов</p>
            </div>

            <div className="text-center">
              <div className="border border-[#e5e5e5] rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
                <span className="text-3xl md:text-5xl font-light text-[#3d3d3d]">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#a8b5a0] mt-2">Минут</p>
            </div>

            <div className="text-center hidden md:block">
              <div className="border border-[#e5e5e5] rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
                <span className="text-3xl md:text-5xl font-light text-[#3d3d3d]">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#a8b5a0] mt-2">Секунд</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
