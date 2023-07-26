import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row  md:items-end mb-16 md:gap-16 justify-center">
        <div className="md:w-1/4 justify-center">
          <div className="font-Oswald text-center">
            <a href="">
              <p className="text-3xl font-seminold">JOIN US</p>
            </a>
            <a
              href="https://discord.gg/VxkC8zmbWP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-4xl lg:text-6xl font-bold">ON DISCORD</p>
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="https://discord.com/invite/VxkC8zmbWP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/discord.png" alt="logo" />
            </a>
          </div>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/bullslodgenft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/linkedin.png" alt="logo" />
            </a>
            <a
              href="https://twitter.com/blnftofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/twitter.png" alt="logo" />
            </a>
            <a
              href="https://www.facebook.com/bullslodgenft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/facebook.png" alt="logo" />
            </a>
            <a
              href="https://www.instagram.com/bullslodgenft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/instagram.png" alt="logo" />
            </a>
          </div>
        </div>
        <div className="text-center font-Oswald text-xl md:text-2xl my-8 md:my-0 text-[#FF0099] underline">
          <p className="mb-2">
            <Link
              to="/terms"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              Terms and Conditions
            </Link>
          </p>
          <p>
            <Link
              to="/privacy"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="hidden md:block md:w-1/4">
          <img src="/assets/images/logo.png" alt="logo" />
        </div>
      </div>
      <footer className="text-center font-Oswald text-lg md:text-2xl pb-32">
        <p>© 2022 - Bulls Lodge NFT - All Rights Reserved.</p>
        <p className="text-[#FF0099]">
          <a
            href="mailto:contact@bullslodgenft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact E-mail: contact@bullslodgenft.com
          </a>
        </p>
      </footer>
      <div className="md:hidden">
        <img src="/assets/images/logo.png" alt="logo" />
      </div>
    </section>
  )
}

export default Footer
