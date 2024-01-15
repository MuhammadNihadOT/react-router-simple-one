
import { NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header>
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to={''}>Home</NavLink></li>
          <li><NavLink to={'about'}>About</NavLink></li>
          <li><NavLink>Contact</NavLink></li>
          <li><NavLink to={'service'}>Services</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header