import Slider from "./components/Slider"

const Team = () => {
  return (
    <section id="team" className="mt-32 md:mt-64 mb-32 m-4">
      <div className="text-center font-Oswald">
        <h2 className="uppercase font-bold my-2  text-5xl md:text-6xl mb-4">
          BULL'S LODGE NFT TEAM
        </h2>
        <h3 className="2xl:w-3/4 2xl:mx-auto text-sm md:text-3xl font-normal mb-12 md:mb-24">
        We welcome enthusiastic contributors to share their knowledge about continuously evolving technology space. Send your application to hr@bullslodgenft.com with this subject: “Candidate Bull”

        </h3>
      </div>
      <Slider
        team={[
          {
            img: "/assets/images/mem1.png",
            name: "artist bull",
            designation: "lead funder",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
          {
            img: "/assets/images/mem2.png",
            name: "artist bull",
            designation: "lead funder",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
          {
            img: "/assets/images/mem3.png",
            name: "artist bull",
            designation: "lead funder",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
          {
            img: "/assets/images/mem1.png",
            name: "artist bull",
            designation: "lead funder",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
          {
            img: "/assets/images/mem2.png",
            name: "artist bull",
            designation: "lead funder",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
          {
            img: "/assets/images/mem3.png",
            name: "artist bull",
            designation: "lead funder",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
          {
            img: "/assets/images/mem1.png",
            name: "artist bull",
            designation: "lead funder",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
        ]}
      />
    </section>
  )
}

export default Team
