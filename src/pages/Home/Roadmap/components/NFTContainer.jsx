import arrows from "./arrows.png"
const NFTContainer = ({ img, phase, percent, description }) => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-center my-32 overflow-hidden md:h-[396px]">
      <img className="md:w-3/5 m-2 " src={img} alt="" />
      <div className="md:w-2/5 md:h-[396px] flex justify-between md:border border-[#FF0099] md:border-b-0 md:border-r-0 m-2 md:p-8 p-4">
        <div className="w-3/5 ">
          <p className=" font-Montserrat text-6xl font-black text-[#79FFFE] pb-8">
            {percent}
          </p>
          <p className="md:leading-8 leading-6 font-Montserrat 2xl:text-xl">
            {description}
          </p>
        </div>
        <div className="w-1/5 text-[#ffffff40] font-black text-center font-Montserrat text-2xl 2xl:text-3xl">
          <p>PHASE</p>
          <p className="text-6xl">{phase}</p>
          <img src={arrows} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NFTContainer
