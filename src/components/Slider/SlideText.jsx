import slide from "/src/assets/images/index.js";

export default function SlideText({tagline, p, btncolor, btnText}){
    return(
        <div className="absolute top-32 h-[413px] w-[420px]">
  {/* Logo */}
  <div className="mb-3">
    <img
      src={slide.gearup}
      alt="gearUp"
      className="h-[51px] w-[240px]"
    />
  </div>

  {/* Headline */}
  <div>
    <span className="block font-bold text-6xl text-gray-900">15% OFF</span>
    <span className="block font-bold text-6xl text-gray-900">SITEWIDE</span>
  </div>

  {/* Tagline */}
  <div className="mt-8 text-[#1a1a1a]">
    <p>
      <strong className="block">{tagline}</strong>
      {p} Use code <strong>GEARUP15</strong> at check out.
      <span className="block underline font-medium">
        Find my product quiz
      </span>
    </p>
  </div>

  {/* Buttons */}
  <div className="mt-8 flex gap-4">
    <button
      className={`"rounded-none h-[60px] w-[288px] py-3 px-8 font-bold text-white text-center hover:bg-opacity-85 "`}
      style={{ backgroundColor: btncolor }} 
      // example: "#4ba7ff" blue, "#16cf60" green, "#ef7929" orange
    >
      {btnText}
    </button>
  </div>
</div>

    )
}