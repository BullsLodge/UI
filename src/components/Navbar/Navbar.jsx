import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = ({ currentTab = "home" }) => {
  const [hamClicked, setHamClicked] = useState(true)
  return (
    <header
      className={`h-[90px]  flex justify-evenly py-6 pt-12 md:p-6 bg-gradient-to-b from-[#350035]  to-[#350035]  ${
        !hamClicked && "py-6 pt-8"
      } fixed top-0 left-0 w-full z-10`}
    >
      {
        <nav
          className={`${
            !hamClicked && "hidden"
          }  flex gap-2 md:gap-8 text-xs md:text-lg  items-center`}
        >
          <Link
            to="/"
            className={`${
              currentTab === "home" ? "text-[#FF0099]" : "text-white"
            }`}
          >
            HOME
          </Link>
          <a href="#collection">COLLECTION</a>
          <a href="#about">ABOUT</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="#team">TEAM</a>
          <a href="#faq">FAQ</a>
        </nav>
      }
      <div
        className={`${
          hamClicked ? "hidden" : "flex gap-4"
        } md:flex gap-8 items-center`}
      >
        <a
          href="https://www.linkedin.com/company/bullslodgenft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/linkedin.png" width={32} alt="linkedin" />
        </a>
        <a
          href="https://twitter.com/blnftofficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/twitter.png" width={32} alt="linkedin" />
        </a>
        <a
          href="https://www.facebook.com/bullslodgenft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/facebook.png" width={32} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/bullslodgenft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/instagram.png" width={32} alt="instagram" />
        </a>
        <a
          href="https://discord.com/invite/VxkC8zmbWP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border-2 border-[#FF0099] p-2 md:p-4 text-xs md:text-base">
            JOIN DISCORD
          </button>
        </a>
        <Link to="/">
          <img src="/assets/images/logo.png" width={46} alt="logo" />
        </Link>
      </div>
      <div className="md:hidden" onClick={() => setHamClicked(!hamClicked)}>
        {hamClicked && <img src="/assets/images/hamburger.png" alt="" />}
        {!hamClicked && (
          <img className="pt-2" src="/assets/images/hamburgerX.png" alt="" />
        )}
      </div>
    </header>
  )
}

export default Navbar
