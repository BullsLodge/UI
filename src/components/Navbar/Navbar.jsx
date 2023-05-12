import { Link } from "react-router-dom"

const Navbar = ({ currentTab = "home" }) => {
  return (
    <header className="hidden md:flex justify-evenly p-6 bg-gradient-to-t from-[#35003520]  to-[#35003590]">
      <nav className="flex gap-8 text-lg items-center">
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
      <div className="flex gap-8 items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/linkedin.png" width={32} alt="linkedin" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/facebook.png" width={32} alt="facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/instagram.png" width={32} alt="instagram" />
        </a>
        <button className="border-2 border-[#FF0099] p-4">JOIN DISCORD</button>
        <Link to="/">
          <img src="/assets/images/logo.png" width={46} alt="logo" />
        </Link>
      </div>
    </header>
  )
}

export default Navbar
