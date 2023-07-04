const Bullish = () => {
  return (
    <section
      id="about"
      className=" md:m-16 flex md:flex-row flex-col-reverse justify-between md:items-end mb-32 md:mb-64"
    >
      <img
        className="md:w-3/6 ml-auto md:px-12 px-8"
        src={"/assets/images/bullishTrio.png"}
        alt=""
      />
      <div className="md:w-2/5 text-left md:px-16 md:m-12 m-8 space-y-8">
        <h2 className="w-full uppercase font-bold my-2 text-4xl md:text-6xl font-Oswald mb-4">
          ARE YOU BULLISH?
        </h2>

        <p className="2xl:text-base  ">
          Hi there! Welcome to the Bull’s Lodge NFT! My name is Professor Bull,
          a pseudonym I earned from my friends due to my biochemistry
          background. Our lodge is featuring bulls called as NFTs (aka
          Non-Fungible Tokens) which they reside on blockchain – in our case it
          is Polygon (Matic) Network. For some people NFTs are digital arts.
          Others use them for trading and flipping. As for myself, I study NFT
          use cases. Now you know a bit better about our world, let’s delve
          deeper into the Bulls Lodge. Bulls Lodge strives to create a
          DAO-driven community including members-only zone. Bulls’ ultimate
          purpose is to create a community and connect alike-mindeds around the
          globe just like you. Before I guide you further, allow me to explain
          what “Bull”, “Lodge” and “NFT” stands for in here. As “Bull”, bull
          represent significant role since the beginning of human civilization.
          In many cultures they were worshipped and they were used as an old
          form of money. Bulls have always been the symbol of Power, Strength
          and Abundance. As “Lodge”, lodge here is not just a shelter but home,
          connecting you with real world and with metaverse. You can
          individually explore and connect with other community members from
          anywhere in the world!
        </p>
        <p className="2xl:text-base  ">
          As “NFT”, you become a Bull in shape of a digital asset (which is
          one-of-a-kind and your authentic identity value inside the lodge) that
          cannot be replicated or duplicated and you live on the blockchain!
        </p>

        <p className="2xl:text-base  ">
          And as “Bulls Lodge NFT”, we combine the both worlds as “one” with
          innovation at our heart by creating a space where you can call home no
          matter where you are!
        </p>
      </div>
    </section>
  )
}

export default Bullish
