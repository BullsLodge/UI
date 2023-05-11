import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const Slider = ({ team }) => {
  return (
    <>
      <Splide
        options={{
          type: "loop",
          perPage: 6,
          focus: 0,
          gap: "2%",
        }}
        aria-label="My Favorite Images"
      >
        {team.map((member) => (
          <SplideSlide className=" rounded-xl  bg-gradient-to-b from-[#FF0099B2] to-[#B845FFB2] ">
            <img className=" h-[300px]" src={member.img} alt="" />
          </SplideSlide>
        ))}
      </Splide>
    </>
  )
}

export default Slider
