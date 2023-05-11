import NFTContainer from "./components/NFTContainer"
import NFTContainerRight from "./components/NFTContainerRight"
import nft1 from "./components/nft1.png"
import nft2 from "./components/nft2.png"
import nft3 from "./components/nft3.png"
import nft4 from "./components/nft4.png"
import nft5 from "./components/nft5.png"
import nft6 from "./components/nft6.png"

const Roadmap = () => {
  return (
    <section className="md:mt-64 mt-32">
      <h2 className="w-full uppercase text-center font-bold my-2 text-4xl md:text-6xl font-Oswald">
        The Roadmap
      </h2>
      <h3 className="w-full text-center text-xl md:text-3xl font-normal font-Oswald">
        Bulls are RACING!
      </h3>
      <h2 className="w-full uppercase text-center font-black my-4 text-4xl md:text-6xl font-Oswald">
        Bulls Lodge NFT
      </h2>
      <div>
        <NFTContainer
          img={nft1}
          percent={"10%"}
          phase={"1"}
          description={
            "We will create a Community  Wallet and prepare Game Economy Development Phase. We prepare to launch our dividend ecosystem for Bulls in Lodge."
          }
        />
        <NFTContainerRight
          img={nft2}
          percent={"35%"}
          phase={"2"}
          description={
            "Preparations of game development will be initialized. Additionally we have a raffle for our members to win an Island tour to show our Lodge’s place and a special vacation for bulls."
          }
        />
        <NFTContainer
          img={nft3}
          percent={"50%"}
          phase={"3"}
          description={"Metaverse development phase will begin."}
        />
        <NFTContainerRight
          img={nft4}
          percent={"65%"}
          phase={"4"}
          description={
            "We will complete Dividend Funding for Passive Income and with DAO decisions will be done by community. We will also announce our exclusive rarity system for our NFT collection."
          }
        />
        <NFTContainer
          img={nft5}
          percent={"85%"}
          phase={"5"}
          description={
            "We will kickstart merchs for lodge including our partner’s arts. Celebrations will also begin with a raffle giveaway to community. (This will be open to all participants since it’s planned to be done by our sponsor in local"
          }
        />
        <NFTContainerRight
          img={nft6}
          percent={"100%"}
          phase={"6"}
          description={
            "We will complete Dividend Funding for Passive Income and with DAO decisions will be done by community. We will also announce our exclusive rarity system for our NFT collection."
          }
        />
      </div>
    </section>
  )
}

export default Roadmap
