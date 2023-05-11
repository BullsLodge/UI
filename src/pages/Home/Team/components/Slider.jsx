import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useMediaQuery } from "react-responsive"

const Slider = ({ team }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  console.log(isBigScreen)
  return (
    <>
      <Splide
        options={{
          autoHeight: true,
          type: "loop",
          perPage: isBigScreen ? 6 : 3,
          focus: 0,
          gap: "2%",
          pagination: false,
        }}
        aria-label="Team"
      >
        {team.map((member, index) => (
          <SplideSlide
            key={index}
            className=" rounded-xl  bg-gradient-to-b from-[#FF0099B2] to-[#B845FFB2] "
          >
            <img className=" md:h-[300px] h-[180px] " src={member.img} alt="" />
          </SplideSlide>
        ))}
      </Splide>
    </>
  )
}

export default Slider
