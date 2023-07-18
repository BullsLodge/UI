import Faqs from "./components/Faqs"

const Faq = () => {
  return (
    <section id="faq" className="mt-32 md:mt-64 mb-32 m-4">
      <div className="text-center font-Oswald">
        <h2 className="uppercase font-bold my-2  text-5xl md:text-6xl mb-16">
          Bull's Lodge NFT
        </h2>
      </div>
      <Faqs
        ques={[
          {
            q: "What is NFT?",
            a: "NFT, stands for Non-Fungible Token, which is unique digital assets that can represent ownership or proof of authentic digital items or content pieces from pictures to audios to videos.",
          },
          {
            q: "What can I do with NFT?",
            a: "You can showcase your NFT by sharing, or you can gift NFT or you can put your NFT for sale from your wallet to the marketplace that supports blockchain where your NFT resides. ",
          },
          {
            q: "What is your NFT specifications?",
            a: "Our Bulls Lodge NFT resides on Polygon (Matic) Blockchain. Our minting price is 222 MATIC Our NFTs has limited 10,000 supply. You can mint up to 20 Bulls per transaction. Our Royalty Fee is %5.",
          },
          {
            q: "Where can I trade my Bulls?",
            a: "You can trade your Bulls on compatible NFT Marketplaces or directly with your friends and/or other NFT collectors.",
          },
          {
            q: "What is 1,000 Reserved Bull?",
            a: "1,000 Bulls from our collection will be reserved for community giveaways, partnerships, sponsorships events and many other privileges for you.",
          },
          {
            q: "How can I stay up-to-date with you?",
            a: "You can find us through our Official Social Media Accounts listed below and on our website. For safety precautions, please double check the pages or social media before you proceed.",
          },
          {
            q: "I am not sure if I should mint one of your NFTs, what to do?",
            a: "If you are unsure about minting or you do not have spare cryptocurrency, for your peace of mind we do not suggest you to mint our NFTs. Minting an NFT is an irreversible transaction on the blockchain. Your happiness and peace is more important.",
          },
          {
            q: "I do not have spare money but I want to own Bulls Lodge NFT, what to do?",
            a: "You need not to worry dear candidate bull! Join us in Discord and follow our social media accounts for giveaways and weekly raffles for a chance of free Bulls Lodge NFT!",
          },
          {
            q: "How can I mint on Bulls Lodge NFT?",
            a: "If you wish to mint Bulls Lodge NFT from our collection, check our only official website (https://www.bullslodgenft.com/) and simply connect your compatible crypto wallet, approve the transaction and done.",
          },
          {
            q: "Congratulations! I do not have Bull yet but I wish to join to your lodge, what to do?",
            a: "You are welcome to join us, enjoy and discover the prosperity within Bulls Lodge NFT Discord!",
          },
        ]}
      />
      <p className=" md:text-lg text-sm text-white md:text-center font-thin italic my-8 md:mx-64 pb-4">
        If you can’t find the information you seek here, do not hesitate to
        reach out to our super-friendly support in our Official Discord!
      </p>
    </section>
  )
}

export default Faq
