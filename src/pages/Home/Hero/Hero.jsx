import React from "react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative pt-32 md:mb-64 mb-12">
      <div className="flex font-Oswald text-center text-xl  md:w-1/2 mx-auto ">
        <img
          className="absolute md:hidden w-full scale-90"
          src="/assets/images/heroHolder.png"
          alt=""
        />
        <img
          className="w-1/3  hidden md:block"
          src="/assets/images/heroLeft.svg"
          alt=""
        />
        <div>
          <h1 className="px-4 md:px-0 text-5xl md:text-7xl leading-relaxed md:leading-relaxed hover:scale-125 transition-all hover:text-[#FF0099] font-bold ">
            THE BULLS ARE RAGING...
          </h1>
          <h2 className="hidden md:block text-4xl">Bull's Lodge NFT;</h2>
          <h2 className="hidden md:block text-2xl">Home of your benefits in</h2>
          <h2 className="hidden md:block">
            Metaverse & Reality. MINT to be announced soon.
          </h2>
        </div>
        <img
          className="w-1/3 hidden md:block"
          src="/assets/images/heroRight.svg"
          alt=""
        />
      </div>
      <div className=" md:flex hidden justify-center">
        <Link to="/mint">
          <button className="font-Oswald font-normal border-2 hover:bg-[#FF0099] border-[#FF0099] p-8 mb-4 text-6xl">
            MINT TBA
          </button>
        </Link>
      </div>
      <p className="font-Oswald font-bold text-center text-6xl mt-36 md:mt-0">
        01:23:45
      </p>
      <div className="md:hidden font-Oswald text-center text-xl mt-6">
        <h2 className=" text-2xl">Bull's Lodge NFT;</h2>
        <h2 className="">Home of your benefits in</h2>
        <h2 className="">Metaverse & Reality. MINT to be announced soon.</h2>
      </div>
    </section>
  )
}

export default Hero
