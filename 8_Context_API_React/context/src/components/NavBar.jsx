import {NavLink} from "react-router-dom"
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
    </nav>
  )
}

export default NavBar