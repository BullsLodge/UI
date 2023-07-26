import Slider from "./components/Slider"

const Team = () => {
  return (
    <section id="team" className="mt-32 md:mt-64 mb-32 m-4">
      <div className="text-center font-Oswald">
        <h2 className="uppercase font-bold my-2  text-4xl md:text-6xl mb-4">
          BULL'S LODGE NFT TEAM
        </h2>
        <h3 className="2xl:w-3/4 2xl:mx-auto text-sm md:text-3xl font-normal mb-12 md:mb-24">
          We welcome enthusiastic contributors to share their knowledge about
          continuously evolving technology space. Send your application to
          hr@bullslodgenft.com with this subject: “Candidate Bull”
        </h3>
      </div>
      <div className=" rounded-xl mx-auto truncate w-fit ">
        <img
          className=" md:h-[600px] h-[280px] "
          src="/assets/images/founder.jpeg"
          alt=""
        />
      </div>
      <h3 className="uppercase font-Oswald font-semibold my-2 text-3xl text-center md:text-3xl mb-4">
        Professor Bull
        <br />
        <a
          className="text-xl"
          href="https://www.linkedin.com/in/kadir-ulas-678962142/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </h3>
      {/*   <Slider
        team={[
          {
            img: "/assets/images/founder.jpeg",
            name: "Professor Bull",
            designation: "Linkedin",
            link: "https://www.linkedin.com/in/kadir-ulas-678962142/",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!",
          },
        ]}
      /> */}
    </section>
  )
}

export default Team
