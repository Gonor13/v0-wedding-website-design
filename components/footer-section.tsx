export function FooterSection() {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/white-feathers-soft-elegant-wedding-background.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Couple photo */}
        <div className="flex justify-center mb-8">
          <img
            src="/romantic-couple-holding-wildflowers-field-engageme.jpg"
            alt="Никита и Ирина"
            className="w-full max-w-md h-48 md:h-64 object-cover"
          />
        </div>

        {/* Message */}
        <p className="text-[#3d3d3d] italic mb-4 text-left">До скорой встречи! С любовью,</p>

        {/* Names */}
        <div className="text-left">
          <p className="text-3xl md:text-5xl font-light tracking-[0.1em] uppercase text-[#3d3d3d]">
            Никита <span className="text-[#3d3d3d]">&#10022;</span>
          </p>
          <p className="text-3xl md:text-5xl font-light tracking-[0.1em] uppercase text-[#3d3d3d]">и Ирина</p>
        </div>
      </div>
    </footer>
  )
}
