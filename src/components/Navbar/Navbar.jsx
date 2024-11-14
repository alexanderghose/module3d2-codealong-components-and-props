import './Navbar.css'
import NavbarLink from '../NavbarLink/NavbarLink.jsx'

const Navbar = (props) => {
    // demo of how you can use console.log inside a component
    console.log("Navbar is getting these props", props)

    return(
        <nav id="top-navbar" className="navbar">
        {props.links.map(l => <NavbarLink href={l.href} text={l.text} />)}

      </nav>
    )
}

export default Navbar;