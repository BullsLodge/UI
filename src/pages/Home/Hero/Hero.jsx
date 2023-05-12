import React from "react"

const Hero = () => {
  return (
    <section className="mt-16 mb-64 hidden md:block">
      <div className="flex font-Oswald text-center text-xl w-1/2 mx-auto ">
        <img src="/assets/images/heroLeft.svg" alt="" />
        <div>
          <h1 className="text-6xl  font-bold ">THE BULLS ARE RAGING...</h1>
          <h2>Bull's Lodge NFT;</h2>
          <h2>Home of your benefits in</h2>
          <h2>Metaverse & Reality. MINT to be announced soon.</h2>
        </div>
        <img src="/assets/images/heroRight.svg" alt="" />
      </div>
      <div className="flex justify-center">
        <button className="font-Oswald font-normal border-2 border-[#FF0099] p-8 mb-4 text-6xl">
          MINT TBA
        </button>
      </div>
      <p className="font-Oswald font-bold text-center text-6xl">01:23:45</p>
    </section>
  )
}

export default Hero
