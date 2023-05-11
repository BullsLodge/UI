import Slider from "./components/Slider"
import mem1 from "./components/mem1.png"
import mem2 from "./components/mem2.png"
import mem3 from "./components/mem3.png"
const Team = () => {
  return (
    <section className="mt-32 md:mt-64">
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
          { img: mem1, name: "rajnish" },
          { img: mem2, name: "rajnish2" },
          { img: mem3, name: "rajnish3" },
          { img: mem1, name: "rajnish3" },
          { img: mem2, name: "rajnish3" },
          { img: mem3, name: "rajnish3" },
          { img: mem1, name: "rajnish3" },
        ]}
      />
    </section>
  )
}

export default Team
