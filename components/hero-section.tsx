export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16">
      {/* Background with white roses */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/white-roses-soft-elegant-wedding-background.jpg')`,
        }}
      />

      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        {/* Wedding Day Label */}
        <p className="text-xs tracking-[0.4em] uppercase text-[#9a9a9a] mb-12">Wedding Day</p>

        {/* Polaroid Photos with Date */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
          {/* Left Polaroid - Bride as child */}
          <div className="bg-white p-2 pb-12 shadow-lg transform -rotate-6 w-36 md:w-48">
            <div className="aspect-square overflow-hidden">
              <img src="/little-girl-with-flower-crown-smiling-childhood-ph.jpg" alt="Ирина в детстве" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-[#6b6b6b] mt-3 italic text-center leading-tight">
              — интересно, кто будет моим
              <br />
              мужем, когда я вырасту?
            </p>
          </div>

          {/* Date in the middle */}
          <div className="text-[#c5c9cc] text-4xl md:text-6xl font-light leading-tight">
            <div>06</div>
            <div>03</div>
            <div>26</div>
          </div>

          {/* Right Polaroid - Groom as child */}
          <div className="bg-white p-2 pb-12 shadow-lg transform rotate-6 w-36 md:w-48">
            <div className="aspect-square overflow-hidden">
              <img src="/little-boy-smiling-childhood-photo-cute.jpg" alt="Никита в детстве" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-[#6b6b6b] mt-3 italic text-center flex items-center justify-center gap-1">
              — им буду я <span className="text-[#a8b5a0]">&#9829;</span>
            </p>
          </div>
        </div>

        {/* Names */}
        <div className="flex items-center justify-center gap-4 md:gap-8 text-3xl md:text-5xl font-light tracking-[0.15em] text-[#3d3d3d]">
          <span className="uppercase">Никита</span>
          <span className="text-[#a8b5a0] text-2xl">&#10022;</span>
          <span className="uppercase">Ирина</span>
        </div>
      </div>
    </section>
  )
}
