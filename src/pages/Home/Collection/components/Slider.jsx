import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useMediaQuery } from "react-responsive"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { useState } from "react"
const Slider = ({ collect }) => {
  const [run, setRun] = useState(false)
  setTimeout(function () {
    setRun(true)
  }, 2500)

  if (run) {
    setTimeout(function () {
      setRun(false)
    }, 2500)
  }

  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  return (
    <>
      <Splide
        className="h-1/2"
        hasTrack={true}
        options={{
          classes: {
            arrows: "splide__arrows your-class-arrows",
            arrow: "splide__arrow your-class-arrow",
            prev: "splide__arrow--prev your-class-prev",
            next: "splide__arrow--next your-class-next",
          },
          arrowPath: "",
          autoHeight: true,
          type: "loop",
          perPage: isBigScreen ? 6 : 3,
          focus: 0,
          flickMaxPages: 1,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: run ? 0.01 : 2.1,
            autoStart: true,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Collection"
      >
        {collect.map((Image, index) => (
          <SplideSlide
            className="hover:scale-110 transition-transform"
            key={index}
          >
            <div>
              <img src={Image} alt="" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  )
}

export default Slider
