import React from "react"

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/assets/bg.svg')] md:bg-none  justify-center gap-12 items-center 2xl:py-36 2xl:scale-100 md:scale-75  md:py-8 flex">
        <div>
          <img src="/assets/images/mintLeft.png" alt="" />
        </div>
        <div className="w-1/4 text-center  mt-36">
          <button className=" border-[20px] border-[#DB00FF] p-24 text-6xl font-Oswald font-bold uppercase">
            Mint
            <br /> Now
          </button>
          <p className="text-2xl mt-8">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <p className="text-2xl mt-8">
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type
          </p>
        </div>
        <div>
          <img src="/assets/images/mintRight.png" alt="" />
        </div>
      </section>
    </>
  )
}

export default Hero
