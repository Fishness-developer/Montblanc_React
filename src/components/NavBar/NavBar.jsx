import './NavBar.css'
const NavBar = () =>{
    return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item"><a href="/">gift card</a></li>
                <li className="nav__menu-item"><a href="/">special programms</a></li>
                <li className="nav__menu-item"><a href="/">sales</a></li>
                <li className="nav__menu-item"><a href="/">delivery</a></li>
                <li className="nav__menu-item"><a href="/">contacts</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;