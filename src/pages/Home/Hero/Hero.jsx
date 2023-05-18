import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative pt-32 md:mb-64 mb-12">
      <div className="flex font-Oswald text-center text-xl justify-center ">
        <Link to="/mint">
          <img
            className="absolute md:hidden left-0 w-[100%] scale-[0.95] "
            src="/assets/images/heroHolder.png"
            alt=""
          />
        </Link>

        <div>
          <h1 className="zoom-in-text px-4 md:px-0 text-5xl md:text-7xl leading-relaxed md:leading-snug transition-all font-bold mb-4">
            THE BULLS ARE
            <br /> RAGING...
          </h1>
          <h2 className="hidden md:block md:text-xl 2xl:text-4xl mb-2">
            Bull's Lodge NFT;
          </h2>
          <h2 className="hidden md:block md:text-xl 2xl:text-3xl mb-2">
            Home of your benefits in
          </h2>
          <h2 className="hidden md:block md:text-xl 2xl:text-3xl mb-16">
            Metaverse & Reality. MINT to be announced soon.
          </h2>
        </div>
      </div>
      <div className=" md:flex hidden justify-center">
        <Link to="/mint">
          <button className="font-Oswald font-bold border-4 hover:bg-[#FF0099] border-[#FF0099] p-8 mb-4 text-5xl">
            MINT TBA
          </button>
        </Link>
      </div>
      <p className="font-Oswald font-bold text-center text-6xl mt-36 md:mt-0">
        01:23:45
      </p>
      <div className="md:hidden font-Oswald text-center text-xl mt-6">
        <h2 className="text-2xl">Bull's Lodge NFT;</h2>
        <h2 className="">Home of your benefits in</h2>
        <h2 className="">Metaverse & Reality. MINT to be announced soon.</h2>
      </div>
      <img
        className="absolute md:block hidden  left-0 2xl:top-44 md:scale-75 2xl:scale-100 md:top-24"
        src="/assets/images/leftHero.png"
        alt=""
      />
      <img
        className=" fade-in-image absolute md:block hidden  left-0 2xl:top-44 md:scale-75 2xl:scale-100 md:top-24"
        src="/assets/images/leftHeroChange.png"
        alt=""
      />
      {/*  <img
        className="absolute md:block hidden left-[21.5%] top-24 scale-75 "
        src="/assets/images/middleHero.png"
        alt=""
      /> */}
      <img
        className="absolute md:block hidden right-0 2xl:top-44 md:scale-75 2xl:scale-100 md:top-24"
        src="/assets/images/rightHero.png"
        alt=""
      />
      <img
        className="fade-in-image absolute md:block hidden right-0 2xl:top-44 md:scale-75 2xl:scale-100 md:top-24"
        src="/assets/images/rightHeroChange.png"
        alt=""
      />
    </section>
  )
}

export default Hero
