import header_img from "../assets/header_img.png"
import { MoveRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const Submit = () => {
    navigate('/Logic')
  }
  return (
    <div className="flex min-h-screen justify-around container mx-auto flex-col-reverse md:flex-row mt-8 px-4">
  {/* Text content section */}
  <div className="md:grid md:place-content-center mt-7 md:mt-0">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold md:w-[65%]">
      Remove <span className="bg-gradient-to-b from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">background</span> from images instantly and effortlessly.
    </h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl md:w-[80%]  text-gray-600">
      Get clean, professional results with just one click—no experience required. Our tool quickly and accurately removes backgrounds, giving you a flawless image every time.
    </p>
    <button type="button" className="flex items-center justify-center bg-slate-800 hover:bg-slate-50 hover:text-black transition text-slate-50 p-2 rounded-2xl cursor-pointer sm:h-11 h-auto md:w-[50%] lg:w-[40%] mt-4 text-lg sm:text-xl" onClick={Submit}>
      Remove background
      <MoveRight size={25} strokeWidth={2.5} className="ml-2" />
    </button>
  </div>

  {/* Image section */}
  <div className="grid place-content-center">
    <img src={header_img} alt="header-img" className="" />
  </div>
</div>

  )
}

export default Hero