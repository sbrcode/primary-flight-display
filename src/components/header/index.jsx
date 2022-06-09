import { Link } from "react-router-dom"

const styledNav = {
  padding: 10,
  backgroundColor: "silver",
}

const styledLink = {
  marginLeft: 25,
  textDecoration: "none",
  fontSize: 16,
  color: "black",
}

const Header = () => {
  return (
    <nav style={styledNav}>
      <Link to="/" style={styledLink}>
        Home
      </Link>
      <Link to="databoard" style={styledLink}>
        Board
      </Link>
    </nav>
  )
}

export default Header
