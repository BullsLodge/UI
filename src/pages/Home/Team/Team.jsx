import Slider from "./components/Slider"

const Team = () => {
  return (
    <section className="mt-32 md:mt-64 mb-32">
      <div className="text-center font-Oswald">
        <h2 className="uppercase font-bold my-2 text-4xl md:text-6xl mb-4">
          BULL'S LODGE NFT TEAM
        </h2>
        <h3 className="text-xl md:text-3xl font-normal mb-12">
          Project welcomes members around the world to share in knowledge about
          the ever-evolving space of NFTs.
        </h3>
      </div>
      <Slider
        team={[
          { img: "/assets/images/mem1.png", name: "rajnish" },
          { img: "/assets/images/mem2.png", name: "rajnish2" },
          { img: "/assets/images/mem3.png", name: "rajnish3" },
          { img: "/assets/images/mem1.png", name: "rajnish3" },
          { img:  "/assets/images/mem2.png", name: "rajnish3" },
          { img:  "/assets/images/mem3.png", name: "rajnish3" },
          { img:  "/assets/images/mem1.png", name: "rajnish3" },
        ]}
      />
    </section>
  )
}

export default Team
