import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = ({ currentTab = "home" }) => {
  const [hamClicked, setHamClicked] = useState(true)
  return (
    <header
      className={`  flex justify-evenly py-6 pt-12 md:p-6 bg-gradient-to-b from-[#35003520]  to-[#35003590]  ${
        !hamClicked && "py-6 pt-8"
      }`}
    >
      {
        <nav
          className={`${
            !hamClicked && "hidden"
          }  flex gap-2 md:gap-8 text-xs md:text-lg items-center`}
        >
          <Link
            to="/"
            className={`${
              currentTab === "home" ? "text-[#FF0099]" : "text-white"
            }`}
          >
            HOME
          </Link>
          <Link to="/collection">COLLECTION</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/roadmap">ROADMAP</Link>
          <Link to="/team">TEAM</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      }
      <div
        className={`${
          hamClicked ? "hidden" : "flex gap-4"
        } md:flex gap-8 items-center`}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/linkedin.png" width={32} alt="linkedin" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/facebook.png" width={32} alt="facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/instagram.png" width={32} alt="instagram" />
        </a>
        <button className="border-2 border-[#FF0099] p-2 md:p-4 text-xs md:text-base">
          JOIN DISCORD
        </button>
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
