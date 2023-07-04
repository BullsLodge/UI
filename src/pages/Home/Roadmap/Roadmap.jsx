import NFTContainer from "./components/NFTContainer"
import NFTContainerRight from "./components/NFTContainerRight"

const Roadmap = () => {
  return (
    <section id="roadmap" className="md:mt-64 mt-32 w-full overflow-hidden">
      <h2 className="w-full uppercase text-center font-bold my-2 text-4xl md:text-6xl font-Oswald">
        The Roadmap
      </h2>
      <h3 className="w-full text-center text-xl md:text-3xl font-normal font-Oswald">
        Bulls are awaiting your arrival
      </h3>
      <h2 className="w-full uppercase text-center font-black my-4 text-4xl md:text-6xl font-Oswald">
        Bulls Lodge NFT
      </h2>
      <div>
        <NFTContainer
          img={"/assets/images/nft1.png"}
          percent={"10%"}
          phase={"1"}
          head={"Dawn of Bulls"}
          description={[
            "We begin to develop DAO for decision-making of privileges of your choice, little or big, all decided in unity",
            "Developments of privileges and roadmap to be expanded at pace to implement ideas in action.",
          ]}
        />
        <NFTContainerRight
          img={"/assets/images/nft2.png"}
          percent={"35%"}
          phase={"2"}
          head={"United We Stand!"}
          description={[
            "Weekly raffles and live events begin.",
            "Bulls-only private channel",
            "Future Roadmap explained",
          ]}
        />
        <NFTContainer
          img={"/assets/images/nft3.png"}
          percent={"50%"}
          phase={"3"}
          head={"Crossroad of Bulls"}
          description={[
            "Priority Decision to vote whether to focus on Real World Privileges OR Virtual Privileges",
            "Growth Continuity of Bulls with partnerships",
          ]}
        />
        <NFTContainerRight
          img={"/assets/images/nft4.png"}
          percent={"65%"}
          phase={"4"}
          head={"Let The Hunt Begin!"}
          description={[
            "Implementation of Gamified Infrastructure, run by DAO for Bulls",
            "Implementing Exclusive Ranking System among Bulls Holdership",
            "Bull-owner only secrets",
          ]}
        />
        <NFTContainer
          img={"/assets/images/nft5.png"}
          percent={"85%"}
          phase={"5"}
          head={"Bullish Branding Iron"}
          description={[
            "Kickstart of Merchs and Events",
            "Partnerships to expose our art dynamically",
            "Sponsored Events and Giveaways to the Community",
          ]}
        />
        <NFTContainerRight
          img={"/assets/images/nft6.png"}
          percent={"100%"}
          phase={"6"}
          head={"Rise of the Raging Bull"}
          description={[
            "Complete Release of our Gamified Infrastructure",
            "Partnership Events and Representations around the globe and Meet-ups",
            "Partner-Mutual Art activities",
            "Hidden Privileges",
            "Your wishes becoming true with full of adventure together",
          ]}
        />
      </div>
    </section>
  )
}

export default Roadmap
