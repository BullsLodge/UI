import { useState } from "react"
import Collapsible from "react-collapsible"

const Faqs = ({ ques }) => {
  const [currentOpen, setCurrentOpen] = useState()
  return (
    <div>
      {ques.map((que, index) => {
        return (
          <Collapsible
            trigger={que.q}
            className=" font-Oswald md:text-3xl text-lg md:text-center mb-4 border-b-2 border-[#9900B160] pb-2 md:mx-64"
            transitionTime={600}
            open={index === currentOpen}
            onTriggerOpening={() => {
              setCurrentOpen(index)
            }}
            openedClassName="  font-Oswald  md:text-3xl text-lg text-[#DB00FF] md:text-center"
          >
            <p className=" md:text-lg text-sm text-white md:text-center my-4 md:mx-64 border-b-2 border-[#9900B160] pb-4">
              {que.a}
            </p>
          </Collapsible>
        )
      })}
    </div>
  )
}

export default Faqs
